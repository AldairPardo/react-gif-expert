import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setimages(gifs);
        setIsLoading(false);
    };

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setimages)
    //         .then(setIsLoading(false));
    // }, []);

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }
}
