import {useEffect, useState} from "react";
import moment from "moment";


interface Ranges {
    min: number,
    max: number,
}

interface ParsedValue {
    all: number[],
    main: string,
    secondary: string,
}

interface Returned {
    title: string,
    typeValue: string,
    currentValue: ParsedValue,
    shortValue: number[],
    longValue: number[],
    rangeMinAttention: Ranges,
    rangeNormal: Ranges,
    rangeMaxAttention: Ranges,
    rangeAccident: Ranges,
    meanShortInterval: Ranges,
    meanLongInterval: Ranges,
    isOnline: boolean,
    tickInterval?: number,
    time?: string,
}

const useCurrentValue = (): Returned => {

    // типа моки
    let title = "Ток А. Освещение";
    let typeValue = 'A';
    let time = "2020-10-09T11:26:16.1634154";
    let currentValue: number[] = [8.1];
    let currentValueParsed: ParsedValue = {
        all: currentValue,
        main: currentValue[0].toString().split('.')[0],
        secondary: currentValue[0].toString().split('.')[1],
    };
    let shortValue: number[] = [7.2];
    let longValue: number[] = [9.3];
    let rangeMinAttention = {
        min: 5.4,
        max: 6.0,
    };
    let rangeNormal = {
        min: 6.0,
        max: 9.0,
    };
    let rangeMaxAttention = {
        min: 9.0,
        max: 9.4,
    };
    let rangeAccident = {
        min: 9.4,
        max: 11.4,
    };
    let meanShortInterval = {
        min: 6.0,
        max: 9.0,
    };
    let meanLongInterval = {
        min: 8.0,
        max: 10.2,
    };
    let isOnline = true;

    //рассчитываем разницу между нынешним временем и временем снятия данных с датчика
    const nowTime = moment()
    const parseTime = moment(time).local()
    const differentTimeInMinutes = moment.duration(nowTime.diff(parseTime)).asMinutes().toFixed()

    //для красивой анимации
    const [main, setMain] = useState(currentValue)
    const [long, setLong] = useState(longValue)
    const [short, setShort] = useState(shortValue)
    useEffect(() => {
            const changeValues = setInterval(() => {
                setMain([+((Math.random() * 11 + 4).toFixed(2))]);
                setLong([+((Math.random() * 11 + 4).toFixed(2))]);
                setShort([+((Math.random() * 11 + 4).toFixed(2))]);
            }, 2000)

            return (() => {
                clearInterval(changeValues)
            })
        },
        [main, long, short]
    )

    return {
        title,
        typeValue,
        time: differentTimeInMinutes,
        currentValue: currentValueParsed,
        longValue,
        shortValue,
        // currentValue: main,
        // longValue: long,
        // shortValue: short,
        rangeNormal,
        rangeMinAttention,
        rangeMaxAttention,
        rangeAccident,
        meanLongInterval,
        meanShortInterval,
        tickInterval: 0.1,
        isOnline: isOnline
    }
}

export default useCurrentValue;