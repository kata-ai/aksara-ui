import fs from 'fs';
import path from 'path';

export const ROOT = getRootPath();

/**
 * Get root project path.
 *
 * @returns {string}
 */
function getRootPath(): string {
  let currentPath = process.cwd();

  // Walk from the executed folder until find `.monorepo` file
  while (currentPath !== '/') {
    // Stop if `lerna.json` file found
    if (fs.existsSync(`${currentPath}/lerna.json`)) {
      return currentPath;
    }

    // walk to the parent folder
    currentPath = path.resolve(currentPath, '..');
  }

  throw new Error("Looks like you're not in the monorepo directory");
}
