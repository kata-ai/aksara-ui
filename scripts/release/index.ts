import debug from 'debug';

import { getAllPackages, mapPkgNameToPkgJson } from '../utils/workspaces';
import { reinstallDeps, publish } from '../utils/packages';

const log = debug('RELEASE');

(async () => {
  const updates = await getAllPackages();
  const pkgJsons = await Promise.all(
    updates.map(pkg => mapPkgNameToPkgJson(pkg))
  );
  const versions = updates.reduce((map, pkg, idx) => {
    const { version } = pkgJsons[idx];
    map[pkg] = `${version}`;
    return map;
  }, {});

  log(versions);

  await reinstallDeps();

  await publish(pkgJsons);
})();
