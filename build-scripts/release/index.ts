import debug from 'debug';

import { getAllPackages, mapPkgNameToPkgJson } from '../utils/workspaces';
import { reinstallDeps, publish, buildPackages } from '../utils/packages';

const log = debug('RELEASE');

(async () => {
  const updates = await getAllPackages();
  const pkgJsons = await Promise.all(
    updates.map(pkg => mapPkgNameToPkgJson(pkg))
  );

  log('pkgJsons', pkgJsons);

  const versions = updates.reduce((map, pkg, idx) => {
    const { version } = pkgJsons[idx];
    map[pkg] = `${version}`;
    return map;
  }, {});

  log('versions', versions);

  await reinstallDeps();

  log('Done reinstalling dependencies');

  await buildPackages();

  log('Done build packages');

  await publish(pkgJsons);

  log('Done publish packages');
})();
