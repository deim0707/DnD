import React, {FC} from "react";
import DashBoard from "./DashBoard/DashBoard";
import {QuoteMap} from "./types";

// ключ объекта станет тайтлом виджета
// каждый айтем - маленькийВиджет
const data: QuoteMap = {
    'Температура': [
        {
            id: "2",
            content: "Sucking at something is the first step towards",
            author: {
                id: "1",
                name: "Зона операционистов",
                text: "https://мтв.онлайн/files/2019/21779-119020-25151-xv2v84.jpg",
                url: "http://adventuretime.wikia.com/wiki/Jake",
                colors: {soft: "#FFFAE6", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: "3",
            content: "You got to focus on what's real, man",
            author: {
                id: "1",
                name: "Зона отдыха",
                text: "static/media/jake-min.cc34aede.png",
                url: "http://adventuretime.wikia.com/wiki/Jake",
                colors: {soft: "#FFFAE6", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
    ],
    'Датчики освещения': [
        {
            id: '1',
            content: 'Sometimes life is scary and dark',
            author: {
                id: '2',
                name: 'Зона входной группы',
                text: 'static/media/bmo-min.9c65ecdf.png',
                url: "http://adventuretime.wikia.com/wiki/BMO",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        }
    ],
    'Датчики задымления': [
        {
            id: '6',
            content: "Responsibility demands sacrifice",
            author: {
                id: '4',
                name: 'Зал бухгалтерии',
                url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
                text: "static/media/princess-min.34218e29.png",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: '7',
            content: "That's it! The answer was so simple, I was too smart to see it!",
            author: {
                id: '4',
                name: 'Какая-то зона1',
                url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
                text: "https://i.ytimg.com/vi/UcnfY0wAb7A/maxresdefault.jpg",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: '10',
            content: "I should not have drunk that much tea!",
            author: {
                id: '4',
                name: 'Какая-то зона2',
                url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
                text: "static/media/princess-min.34218e29.png",
                colors: {soft: "#E3FCEF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
    ],
    'Датчики радости': [
        {
            id: '4',
            content: "Is that where creativity comes from? From sad biz?",
            author: {
                id: '3',
                name: 'Какая-то зона3',
                url: "http://adventuretime.wikia.com/wiki/Finn",
                text: "static/media/finn-min.0a5700c4.png",
                colors: {soft: "#DEEBFF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
        {
            id: '5',
            content: "Homies help homies. Always",
            author: {
                id: '3',
                name: 'Какая-то зона4',
                url: "http://adventuretime.wikia.com/wiki/Finn",
                text: "static/media/finn-min.0a5700c4.png",
                colors: {soft: "#DEEBFF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
    ],
    'Dat4ik': [
        {
            id: '234234',
            content: "Is that where creativity comes from? From sad biz?",
            author: {
                id: '333',
                name: 'z0n@ otDiX@',
                url: "http://adventuretime.wikia.com/wiki/Finn",
                text: "static/media/finn-min.0a5700c4.png",
                colors: {soft: "#DEEBFF", hard: "rgba(9, 30, 66, 0.71)"}
            }
        },
    ],
    // 'айдиВиджета': [
    //     {
    //         title: 'Заголовок виджета',
    //         description: "Is that where creativity comes from? From sad biz?",
    //         miniWidgets: [
    //             {
    //                 айдиЗоны: айдиЗоны
    //                 айдиДатчика: айдиДатчика
    //             },
    //         ]
    //
    //     },
    // ]
}

const Container: FC = () => {
    return (
        <div>
            <DashBoard initial={data}/>
        </div>
    )
}

export default Container;