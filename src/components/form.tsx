import React from "react";
interface Field {
    title: string;
    label: string;
    type: {
        name: string;
        message: string;
    };
    minLength: {
        value: number;
        message: string;
    };
    maxLength: {
        value: number;
        message: string;
    };
    required: boolean;
    regex: string;
}

type FieldWithKey = { name: string } & Field;

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
    );
}

export default async function Form() {
    const response = await fetch(`http://localhost:3000/api/form`, {
        next: {
            revalidate: 1,
        },
    }).then((res) => res.json());

    const data = response as {
        schema: Record<string, Field>;
    };

    console.log(data);

    return (
        <form>
            <Input type="text" name="name" placeholder="Name" />
        </form>
    );
}
