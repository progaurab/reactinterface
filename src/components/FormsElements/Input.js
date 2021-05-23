import React from 'react'

function Input(props) {
    return (
        <div>
            <label htmlFor={props.type}>{props.label}</label>
            <input
                type={props.type}
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id={props.id}
                placeholder={props.placeholder}
                />
        </div>
    )
}

export default Input
