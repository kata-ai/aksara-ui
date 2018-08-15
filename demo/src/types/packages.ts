import { PackageMetadata } from './app';

export interface PackagesStore {
  loading: boolean;
  errors?: string;
  list: Record<string, PackageMetadata>;
}
