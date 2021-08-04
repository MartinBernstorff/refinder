import React , {Component} from "react";

export default function Button(props) {
    return (
        <a
                    className= "rounded-lg px-2 py-2 border border-gray-100 active:border-gray-200 text-center focus:outline-none hover:shadow-md active:shadow-sm place-content-center text-gray-200 text-sm"

                    href={props.href}
                >
                        {props.title}
        </a>
    )
};