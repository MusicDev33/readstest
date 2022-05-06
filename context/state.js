import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [selectedBook, setSelectedBook] = useState();
  const [infoViewType, setInfoViewType] = useState('');

  let sharedState = {
    state: {
      selectedBook,
      infoViewType
    },
    setSelectedBook,
    setInfoViewType
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
