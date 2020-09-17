import React from "react";
import Board from "./Board";
import {QuoteMap} from "./types";


const data: QuoteMap = {
    'Jake': [
        {
            id: "2",
            content: "Sucking at something is the first step towards",
            author: {
                id: "1",
                name: "Jake",
                avatarUrl: "static/media/jake-min.cc34aede.png",
                url: "http://adventuretime.wikia.com/wiki/Jake",
                colors: {soft: "#FFFAE6", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: "3",
            content: "You got to focus on what's real, man",
            author: {
                id: "1",
                name: "Jake",
                avatarUrl: "static/media/jake-min.cc34aede.png",
                url: "http://adventuretime.wikia.com/wiki/Jake",
                colors: {soft: "#FFFAE6", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
    ],
    'BMO': [
        {
            id: '1',
            content: 'Sometimes life is scary and dark',
            author: {
                id: '2',
                name: 'BMO',
                avatarUrl: 'static/media/bmo-min.9c65ecdf.png',
                url: "http://adventuretime.wikia.com/wiki/BMO",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        }
    ],
    'Princess': [
        {
            id: '6',
            content: "Responsibility demands sacrifice",
            author: {
                id: '4',
                name: '"Princess bubblegum"',
                url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
                avatarUrl: "static/media/princess-min.34218e29.png",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: '7',
            content: "That's it! The answer was so simple, I was too smart to see it!",
            author: {
                id: '4',
                name: '"Princess bubblegum"',
                url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
                avatarUrl: "static/media/princess-min.34218e29.png",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: '10',
            content: "I should not have drunk that much tea!",
            author: {
                id: '4',
                name: '"Princess bubblegum"',
                url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
                avatarUrl: "static/media/princess-min.34218e29.png",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
    ],
    'Finn': [
        {
            id: '4',
            content: "Is that where creativity comes from? From sad biz?",
            author: {
                id: '3',
                name: '"Finn"',
                url: "http://adventuretime.wikia.com/wiki/Finn",
                avatarUrl: "static/media/finn-min.0a5700c4.png",
                colors: {soft: "#DEEBFF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: '5',
            content: "Homies help homies. Always",
            author: {
                id: '3',
                name: '"Finn"',
                url: "http://adventuretime.wikia.com/wiki/Finn",
                avatarUrl: "static/media/finn-min.0a5700c4.png",
                colors: {soft: "#DEEBFF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
    ],
}

const Container = () => {
    return (
        <div>
            <Board initial={data}/>
        </div>
    )
}

export default Container;