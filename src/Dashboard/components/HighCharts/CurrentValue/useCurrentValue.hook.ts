import {useEffect, useState} from "react";


interface Ranges {
    min: number,
    max: number,
}

interface Returned {
    title: string,
    currentValue: number[],
    shortValue: number[],
    longValue: number[],
    rangeNormal: Ranges,
    rangeMinAttention: Ranges,
    rangeMaxAttention: Ranges,
    rangeAccident: Ranges,
    meanShortInterval: Ranges,
    meanLongInterval: Ranges,
    tickInterval?: number,
    isOnline?: boolean,
    time?: number,
}

const useCurrentValue = (): Returned => {

    // типа моки
    let title = "Ток А. Освещение";
    let currentValue: number[] = [8.1];
    let shortValue: number[] = [8.6];
    let longValue: number[] = [7.0];
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
        // currentValue,
        // longValue,
        // shortValue,
        currentValue: main,
        longValue: long,
        shortValue: short,
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