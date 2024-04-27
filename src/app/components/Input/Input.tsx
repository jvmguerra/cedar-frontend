import React, { ChangeEvent } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    value?: string;
    errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export const Input = ({
    label,
    id,
    type = "text",
    value,
    errorMessage,
    onChange
}: InputProps) => {

    return (
        <div className="flex flex-col my-2 w-full">
            <label className="text-gray mb-2 font-arial font-normal text-sm leading-[21px]" htmlFor={id}>{label}</label>
            <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className={`${errorMessage ? 'border-error' : 'border-gray'} border rounded-lg py-3 px-4 font-circular mb-2`}/>
            {errorMessage && <p className="text-error text-sm leading-[21px] font-circular">{errorMessage.toString()}</p>}
        </div>
    )
}