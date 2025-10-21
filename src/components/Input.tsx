import React from "react";

type InputProps = {
    label : string;
    value : string;
    onChange : (e:React.ChangeEvent<HTMLInputElement>) => void;
    type? : string;
};

export function Input ({label,value,onChange, type="text"}:InputProps) 
{
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
        </div>
    );

}

