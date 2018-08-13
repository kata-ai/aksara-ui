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
