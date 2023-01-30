import { createContext } from "react";

export const PhotosContext = createContext(null);

export const PhotosProvider = ({children}) => {

    
    return <PhotosContext.Provider value={}> {children} </PhotosContext.Provider>
}
