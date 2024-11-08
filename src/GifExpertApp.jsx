import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {


    const [contries, setContries] = useState(['valorant']);

    const onClickContries = (valueContries) => {
        if (contries.includes(valueContries)) return;
        setContries([valueContries, ...contries])
    }
    return (
        <>
            <h1>GifExpertApp</h1>


            <AddCategory

                onValueContries={onClickContries}

            />
            {
                contries.map(contry => (
                    <GifGrid
                        key={contry}
                        category={contry}
                    />
                ))
            }


        </>
    )
}
