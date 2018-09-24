import glob from 'glob';
import { DepGraph } from 'dependency-graph';
import debug from 'debug';

import { ROOT } from './constants';
import { readFileSync } from 'fs';

// tslint:disable-next-line
console.log('Current root project is on', `'${ROOT}'`);

const log = debug('WORKSPACES');
const { workspaces: rootWorkspaces } = require(`${ROOT}/package.json`);
const workspaces = rootWorkspaces.packages.map(
  workspace => `${ROOT}/${workspace}`
);

const mapPkgNameToPkgJson = async packageName => {
  const packages = await mapWorkspaceToPackages(workspaces);
  return mapPackagestoPkgJson(packages)
    .filter(pkg => pkg.name === packageName)
    .reduce(val => val);
};

const getAllPackages = async () => {
  const packages = await mapWorkspaceToPackages(workspaces);
  const dependencies = mapPackagesToDepGraph(packages);
  return dependencies.overallOrder();
};

const mapPkgNameToPkgPath = async pkg => {
  const packages = (await mapWorkspaceToPackages(workspaces)) as any[];

  return packages
    .filter(path => {
      try {
        const json = require(`${path}/package.json`);
        return json.name === pkg.name;
      } catch (err) {
        return null;
      }
    })
    .reduce(val => {
      return val;
    });
};

export { getAllPackages, mapPkgNameToPkgJson, mapPkgNameToPkgPath };

function mapPackagestoPkgJson(packagePaths) {
  return packagePaths
    .map(path => {
      try {
        return require(`${path}/package.json`);
      } catch (err) {
        return null;
      }
    })
    .filter(Boolean);
}

function mapPackagesToDepGraph(packagePaths) {
  const graph = new DepGraph();
  const packages = mapPackagestoPkgJson(packagePaths);

  packages.forEach(pkg => graph.addNode(pkg.name));
  packages.forEach(({ name, dependencies, devDependencies }) => {
    const allDeps = Object.assign({}, dependencies, devDependencies);

    Object.keys(allDeps)
      .filter(dep => graph.hasNode(dep))
      .forEach(dep => graph.addDependency(name, dep));
  });

  return graph;
}

function mapWorkspaceToPackages(workspaces) {
  return Promise.all(
    workspaces.map(
      workspace =>
        new Promise(resolve => {
          glob(workspace, (err, paths) => {
            if (err) {
              throw err;
            }

            resolve(paths);
          });
        })
    )
  ).then(paths => paths.reduce((arr: any[], val) => arr.concat(val), []));
}
