import execa from 'execa';
import ora from 'ora';
import Listr from 'listr';
import { readFile, readFileSync } from 'fs';
import debug from 'debug';
import { promisify } from 'bluebird';

import { ROOT } from './constants';
import { mapPkgNameToPkgPath } from './workspaces';

const readFilePromise = promisify(readFile);
const log = debug('PACKAGES');

export const reinstallDeps = async () => {
  try {
    const loader = ora('Reinstall deps').start();
    await execa('yarn', {
      cwd: ROOT
    });
    loader.stopAndPersist({
      symbol: '✅ '
    });
  } catch (err) {
    throw err;
  }
};

export const publish = async pkgs => {
  try {
    const filteredPkgs = pkgs.filter(pkg => pkg.name === 'kata-kit');
    const taskArray = (await Promise.all(
      // pkgs.map(async pkg => {
      filteredPkgs.map(async pkg => {
        const path = await mapPkgNameToPkgPath(pkg);

        /**
         * Can't require here because we have a cached version of the required JSON
         * in memory and it doesn't contain the updates
         */
        const pkgDescriptor = JSON.parse(
          readFileSync(`${path}/package.json`, 'utf8')
        );

        log(pkgDescriptor);

        return {
          // title: `📦  ${pkg}@${version}`,
          title: `📦  ${pkg.name}`,
          task: () => publishPackage(pkg, 'staging')
        };
      })
    )) as any[];
    const tasks = new Listr(taskArray, {
      concurrent: false,
      exitOnError: false,
      renderer: 'default'
    });

    console.log('\r\nPublishing Packages to NPM:');
    return tasks.run();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

async function publishPackage(pkg, releaseType) {
  try {
    const path = await mapPkgNameToPkgPath(pkg);

    log(path);

    await execa('lerna', ['run', 'build'], { cwd: ROOT });

    let npmArgs = ['publish', '--registry', 'http://localhost:4873', '-f'];

    return execa('npm', npmArgs, { cwd: path });
  } catch (err) {
    throw err;
  }
}
