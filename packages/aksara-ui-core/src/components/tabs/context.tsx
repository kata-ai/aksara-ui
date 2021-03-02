import * as React from 'react';
import { TabsSizeVariants } from './variants';

interface TabsContextProps {
  size: TabsSizeVariants;
  currentPage: number;
  setPage: (page: number) => void;
}

interface TabsProviderProps extends Pick<TabsContextProps, 'size'> {
  defaultIndex: number;
}

const useProviderTabs = ({ defaultIndex = 0, size = 48 }: TabsProviderProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(defaultIndex);

  function setPage(value: number) {
    setCurrentPage(value);
  }

  return {
    currentPage,
    setPage,
    size,
  };
};

const TabsContext = React.createContext<TabsContextProps>({
  size: 48,
  currentPage: 0,
  setPage: () => null,
});

export const TabsProvider: React.FC<TabsProviderProps> = ({ children, ...rest }) => {
  const provider = useProviderTabs({ ...rest });
  return <TabsContext.Provider value={provider}>{children}</TabsContext.Provider>;
};

export function useTabs(): TabsContextProps {
  const Tabs = React.useContext(TabsContext);
  if (!Tabs) {
    throw new Error('Tabs Provider is undefined.');
  }
  return Tabs;
}
