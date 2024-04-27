import React, { ChangeEvent } from 'react';

interface ButtonProps {
    text: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({text, type = 'button', disabled = false, onClick}: ButtonProps) => {

    return (
        <div className="flex flex-col my-6 w-full">
            <button type={type} className="p-3 text-white font-bold leading-6 text-base bg-primary rounded-xl" onClick={onClick} disabled={disabled}>{text}</button>
        </div>
    )
}