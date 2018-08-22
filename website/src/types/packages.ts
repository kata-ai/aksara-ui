import { PackageMetadata } from './app';

export interface PackagesStore {
  loading: boolean;
  errors?: string;
  list: Record<string, PackageMetadata>;
}

export interface DependencyMetadata {
  name: string;
  version: string;
}
