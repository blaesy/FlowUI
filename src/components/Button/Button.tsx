import React from "react";

const Button = ({children}: {children: JSX.Element | string}) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;