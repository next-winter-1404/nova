'use client';

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from 'react';

type HouseContextType = {
    photos: File[];
    setPhotos: React.Dispatch<React.SetStateAction<File[]>>;
};

const HouseContext = createContext<HouseContextType | null>(null);

export const HouseProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [photos, setPhotos] = useState<File[]>([]);

    return (
        <HouseContext.Provider
        value={{
            photos,
            setPhotos,
        }}
        >
        {children}
        </HouseContext.Provider>
    );
};

export const useHouse = () => {
    const context = useContext(HouseContext);

    if (!context) {
        throw new Error(
        'useHouse must be used inside HouseProvider'
        );
    }

    return context;
};