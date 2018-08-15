import { action } from 'typesafe-actions';
import { PackageMetadata } from '../../types/app';

export const populatePackages = (packages: Record<string, PackageMetadata>) => {
  return action('@@packages/PACKAGE_LIST_POPULATED', packages);
};

export const populateError = (error: string) => {
  return action('@@packages/PACKAGE_LIST_ERROR', error);
};
