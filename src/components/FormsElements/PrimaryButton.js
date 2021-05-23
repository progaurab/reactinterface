import React from 'react'

function PrimaryButton(props) {
    return (
        <div>
            <button type={props.type} className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>
                {props.value}
            </button>
        </div>
    )
}

export default PrimaryButton