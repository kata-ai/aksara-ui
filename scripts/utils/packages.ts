import execa from 'execa';
import ora from 'ora';
import Listr from 'listr';
import { readFileSync } from 'fs';
import debug from 'debug';
import getStream from 'get-stream';

import { ROOT } from './constants';
import { mapPkgNameToPkgPath } from './workspaces';

const log = debug('PACKAGES');

/**
 * Run `lerna bootstrap` behind the scene.
 */
export const reinstallDeps = async () => {
  try {
    const loader = ora('Reinstall dependencies...').start();

    await execa('yarn', ['bootstrap'], {
      cwd: ROOT
    });

    loader.stopAndPersist({
      symbol: '✅ '
    });
  } catch (err) {
    throw err;
  }
};

/**
 * Publish all packages to NPM.
 *
 * @param {*} pkgs respective package.json object
 * @returns
 */
export const publish = async pkgs => {
  try {
    // don't publish demo package for now
    const filteredPkgs = pkgs.filter(pkg => pkg.name !== '@kata-kit/demo');

    // build tasks as array for Listr
    const taskArray = (await Promise.all(
      filteredPkgs.map(async pkg => {
        const path = await mapPkgNameToPkgPath(pkg);

        const pkgDescriptor = JSON.parse(
          readFileSync(`${path}/package.json`, 'utf8')
        );

        log('taskArray', pkgDescriptor);

        return {
          title: `📦  ${pkg.name}@${pkgDescriptor.version}`,
          task: () => publishPackage(pkg, 'staging')
        };
      })
    )) as any[];
    const tasks = new Listr(taskArray, {
      concurrent: false,
      exitOnError: false
    });

    console.log('\r\nPublishing Packages to NPM:');
    return tasks.run();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

/**
 * Run build for all packages.
 *
 * @returns any
 */
// @ts-ignore
const buildPackages = async () => {
  try {
    const loader = ora('Building packages...\n').start();
    const { stdout } = execa('lerna', ['run', 'build', '--scope', 'kata-kit'], {
      cwd: ROOT
    });

    // pipe the execa stdout to process stdout
    stdout.pipe(process.stdout);

    // print out the build process since it will be swallowed by execa
    console.log(await getStream(stdout));

    loader.stopAndPersist({
      symbol: '✅ '
    });

    return await stdout;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

async function publishPackage(pkg, releaseType) {
  try {
    const path = await mapPkgNameToPkgPath(pkg);
    const npmArgs = ['publish', '--registry', 'http://localhost:4873', '-f'];

    return execa('npm', npmArgs, { cwd: path });
  } catch (err) {
    throw err;
  }
}
