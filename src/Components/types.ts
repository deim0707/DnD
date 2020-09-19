export type Content = {
    title: string,
    value?: string | boolean | any,
    type?: string | any,
    time?: number | string | any,
    typeData?: string |any,
};

export type Widget = {
    id: string,
    type: string,
    ordered: number,
    content: Content,
}

export type WidgetMap = {
    [key: string]: Widget[],
};

