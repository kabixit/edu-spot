// NavigationContext.js
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('/');

  const navigate = (newRoute) => {
    setCurrentRoute(newRoute);
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export { NavigationProvider, useNavigation };
