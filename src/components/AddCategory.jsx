import { useState } from "react"



export const AddCategory = ({ onValueContries }) => {

    const [inputContries, setInputContries] = useState('');

    const onChageContries = (event) => {
        // console.log(event.target.value);

        setInputContries(event.target.value);

    }

    const onSubmitContries = (event) => {

        event.preventDefault();

        if (inputContries.trim().length <= 0) return
        // setContries(contry => [inputContries, ...contry]);
        onValueContries(inputContries.trim());

        setInputContries('');




    }




    return (

        <form onSubmit={onSubmitContries}>
            <input

                type="text"
                placeholder="Buscar Gifs"
                value={inputContries}
                onChange={onChageContries}


            />

        </form>
    )
}
