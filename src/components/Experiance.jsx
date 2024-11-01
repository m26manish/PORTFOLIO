import React from 'react';
import javascript from "../../public/javascript.png";
import express from "../../public/express.png";
import mongodb from "../../public/mongodb.jpg";
import react from "../../public/reactjs.png";
import html from "../../public/html1.png";
import css from "../../public/css.jpg";
import mysql from "../../public/mysql.png"; 
import git from "../../public/git.png"; 
import github from "../../public/github.png"; 
import vscode from "../../public/vs code.png";

function Experiance() {
    const cardItem = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id: 4,
            logo: react,
            name: "React"
        },
        {
            id: 5,
            logo: html,
            name: "HTML"
        },
        {
            id: 6,
            logo: css,
            name: "CSS"
        },
        {
            id: 7,
            logo: mysql,
            name: "MySQL"
        },
        {
            id: 8,
            logo: git,
            name: "Git"
        },
        {
            id: 9,
            logo: github,
            name: "GitHub"
        },
        {
            id: 10,
            logo: vscode,
            name: "VS Code"
        }
    ];

    return (
        <div
            name="Experience"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience 📈</h1>
                <p className="font-semibold">I have more than 1 year of experience in this field.</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            className="flex flex-col items-center justify-center border-[2px] md:w-[150px] md:h-[150px] rounded-full p-1 cursor-pointer hover:scale-90 duration-300"
                            key={id}
                        >
                            <img
                                src={logo}
                                className="w-[90px] rounded-full"
                                alt={name}
                            />
                            <div>
                                <div className="px-2 text-green-500 font-bold text-xl mb-2">{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experiance;
