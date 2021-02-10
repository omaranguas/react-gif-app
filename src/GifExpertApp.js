import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    /* const categories = ["Vikings", "Dragon ball", "Eminem"]; */
    const [categories, setCategories] = useState(["Vikings"]);

    /* const handleAdd = () => {
      setCategories([...categories, "Oye Arnold"]);
    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory cat={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ul>
                {
                    /* <li key={category}> {category} </li>) */
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            cat={category} />
                    ))
                }
            </ul>
        </>
    );
};