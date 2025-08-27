import { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
    const [refreshFlag, setRefreshFlag] = useState(0);
    const triggerRefresh = () => setRefreshFlag((prev) => prev + 1);

    return (
        <RefreshContext.Provider value={{ refreshFlag, triggerRefresh }}>
            {children}
        </RefreshContext.Provider>
    );
}

export const useRefresh = () => useContext(RefreshContext);