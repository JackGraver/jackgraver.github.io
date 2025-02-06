import React from 'react';

type NavigationButtonProps = {
    section: string;
    scrollFunction: () => void;
}

export default function Navigation_Button({ section, scrollFunction }: NavigationButtonProps) {

    return (
        <div>
            <button
                className="transition duration-75 ease-in-out hover:text-gray-600 hover:scale-110 mb-2"
                onClick={scrollFunction}
            >
                {section}
            </button>
        </div>
    )
}