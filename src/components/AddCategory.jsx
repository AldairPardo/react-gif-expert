import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState("");

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setinputValue("");
        onNewCategory(inputValue.trim());
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.protoTypes = {
    onNewCategory: PropTypes.func.isRequired,
};