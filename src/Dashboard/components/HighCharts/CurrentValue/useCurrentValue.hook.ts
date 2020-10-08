import React from 'react';

interface Ranges {
    min: number,
    max: number,
}

interface Returned {
    title: string,
    currentValue: number,
    rangeNormal: Ranges,
    rangeMinAttention: Ranges,
    rangeMaxAttention: Ranges,
    rangeAccident: Ranges,
    shortValue: number,
    meanShortInterval: Ranges,
    longValue: number,
    meanLongInterval: Ranges,
    tickInterval?: number,
    isOnline?: boolean,
    time?: number,
}

const useCurrentValue = (): Returned => {
    let data = {
        title: "Ток А. Освещение",
        currentValue: 8.1,
        shortValue: 9.0,
        longValue: 7.0,
        rangeMinAttention:{
            min: 5.4,
            max: 6.0,
        },
        rangeNormal: {
            min: 6.0,
            max: 7.0,
        },
        rangeMaxAttention: {
            min: 7.0,
            max: 9.4,
        },
        rangeAccident: {
            min: 9.4,
            max: 11.4,
        },
        meanShortInterval: {
            min: 6.0,
            max: 9.0,
        },
        meanLongInterval: {
            min: 8.0,
            max: 11.0,
        },

    }

    return {
        title: data.title,
        currentValue: data.currentValue,
        rangeNormal: data.rangeNormal,
        rangeMinAttention: data.rangeMinAttention,
        rangeMaxAttention: data.rangeMaxAttention,
        rangeAccident: data.rangeAccident,
        shortValue: data.shortValue,
        meanLongInterval: data.meanLongInterval,
        meanShortInterval: data.meanShortInterval,
        longValue: data.longValue,
    }
}

export default useCurrentValue;