import * as React from 'react';

interface TabsContextProps {
  currentPage: number;
  setPage: (page: number) => void;
}

interface TabsProviderProps {
  defaultIndex: number;
}

const useProviderTabs = (defaultIndex = 0) => {
  const [currentPage, setCurrentPage] = React.useState<number>(defaultIndex);

  function setPage(value: number) {
    setCurrentPage(value);
  }

  return {
    currentPage,
    setPage,
  };
};

const TabsContext = React.createContext<TabsContextProps>({
  currentPage: 0,
  setPage: () => null,
});

export const TabsProvider: React.FC<TabsProviderProps> = ({ children, defaultIndex }) => {
  const provider = useProviderTabs(defaultIndex);
  return <TabsContext.Provider value={provider}>{children}</TabsContext.Provider>;
};

export function useTabs(): TabsContextProps {
  const Tabs = React.useContext(TabsContext);
  if (!Tabs) {
    throw new Error('Tabs Provider is undefined.');
  }
  return Tabs;
}
