/* eslint-disable react-hooks/exhaustive-deps */
import { createStrictContext } from '@elpida/ui';
import { useLocalStorage, useWindowSize } from '@elpida/shared/hooks';
import { useEffect } from 'react';

export interface UiState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
}

export interface UiContext extends UiState {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const [Provider, useContext] = createStrictContext<UiContext>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UiProvider = (props: any) => {
  const [uiState, setUiState] = useLocalStorage<UiState>('ui', {
    sidebarOpen: true,
    theme: 'light',
  });

  const { innerWidth } = useWindowSize();

  const toggleSidebar = (value?: boolean) => {
    setUiState((prev) => ({
      ...prev,
      sidebarOpen: value === undefined ? !prev.sidebarOpen : value,
    }));
  };

  const openSidebar = () => {
    toggleSidebar(true);
  };

  const closeSidebar = () => {
    toggleSidebar(false);
  };

  useEffect(() => {
    if (innerWidth < 1280) {
      closeSidebar();
    }
  }, [innerWidth]);

  return (
    <Provider
      value={{
        ...uiState,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
      {...props}
    />
  );
};

export { UiProvider, useContext as useUiContext };
