import execa from 'execa';
import ora from 'ora';
import Listr from 'listr';
import { readFileSync } from 'fs';
import debug from 'debug';

import { ROOT } from './constants';
import { mapPkgNameToPkgPath } from './workspaces';

const log = debug('PACKAGES');

export const reinstallDeps = async () => {
  try {
    const loader = ora('Reinstall dependencies...').start();

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
    // don't publish demo package for now
    const filteredPkgs = pkgs.filter(pkg => pkg.name !== 'demo');
    const taskArray = (await Promise.all(
      filteredPkgs.map(async pkg => {
        const path = await mapPkgNameToPkgPath(pkg);

        const pkgDescriptor = JSON.parse(
          readFileSync(`${path}/package.json`, 'utf8')
        );

        log(pkgDescriptor);

        return {
          title: `📦  ${pkg.name}@${pkg.version}`,
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

export const buildPackages = async () => {
  try {
    const loader = ora('Building packages...').start();
    const { stdout } = await execa('lerna', ['run', 'build'], { cwd: ROOT });

    loader.stopAndPersist({
      symbol: '✅ '
    });

    return stdout;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

async function publishPackage(pkg, releaseType) {
  try {
    const path = await mapPkgNameToPkgPath(pkg);

    log(path);

    const npmArgs = ['publish', '--registry', 'http://localhost:4873', '-f'];

    return execa('npm', npmArgs, { cwd: path });
  } catch (err) {
    throw err;
  }
}
