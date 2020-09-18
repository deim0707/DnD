export type Author = {
    title: string,
    value?: string | boolean | any,
    type?: string | any,
    time?: number | string | any,
    typeData?: string |any,
};

export type Quote = {
    id: string,
    type: string,
    content: Author,
}

export type QuoteMap = {
    [key: string]: Quote[],
};

