import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
        const isAlreadyAdded = categories.find((category) => category.toLowerCase() === newCategory.toLowerCase());
        if (isAlreadyAdded?.length > 0) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {categories.map((category) => (
                <GifGrid 
                    key={ category } 
                    category={ category}/>
            ))}
        </>
    );
};
