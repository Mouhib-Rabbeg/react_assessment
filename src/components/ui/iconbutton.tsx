import React from 'react'


interface Props {
    color: string
    icon: any
    onClick:any
}

export default function IconButton(props:Props) {
    return (
        <>
            <button type="button" 
            onClick={props.onClick}
            className="w-9 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-xl p-2 mb-0.1 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-400">
                {props.icon}
            </button>
        </>
    )
}
