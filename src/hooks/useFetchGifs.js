import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getGifs(category)
            .then(setimages)
            .then(setIsLoading(false));
    }, []);

    return {
        images,
        isLoading,
    }
}
