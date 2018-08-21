import { PackagesStore } from './packages';

export interface MenuDefinition {
  title: string;
  path: string;
  icon?: string;
  isExact?: true;
}

export interface SubMenuDefinition {
  type: 'heading' | 'menu';
  content: {
    title: string;
    path?: string;
    icon?: string;
    isExact?: true;
  };
}

export interface PackageMetadata {
  name: string;
  version: string;
  description: string;
  dependencies: {
    [key: string]: string;
  };
  peerDependencies?: {
    [key: string]: string;
  };
}

export interface RootStore {
  packages: PackagesStore;
}
