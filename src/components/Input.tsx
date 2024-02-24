"use client"

import React from "react";

interface InputProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({value, setValue}: InputProps) {

    return (
        <input
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}
            className={"w-full border p-2 rounded-md outline-none focus:ring-1 ring-blue-500"}
            placeholder={"Paste URL to view Open Graph metadata"}
        />
    );
}
