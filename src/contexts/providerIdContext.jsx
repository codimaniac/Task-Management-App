import { createContext, useContext, useState } from "react";

const ProviderIdContext = createContext();

export const ProviderIdProvider = ({ children }) => {
    const [providerId, setProviderId] = useState(null);

    return (
        <ProviderIdContext.Provider value={{ providerId, setProviderId }}>
            {children}
        </ProviderIdContext.Provider>
    );
}

export const useProviderId = () => useContext(ProviderIdContext);