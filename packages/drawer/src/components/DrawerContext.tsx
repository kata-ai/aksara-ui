import * as React from 'react';

interface DrawerContextAPI {
  overflow: boolean;
  labelledById?: string;
  watchOverflow: (position: number) => void;
  onClose: () => void;
}

const DrawerContext = React.createContext<DrawerContextAPI>(
  {} as DrawerContextAPI
);

export default DrawerContext;
