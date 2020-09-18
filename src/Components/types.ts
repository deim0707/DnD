//поступивший initial в Board
export type Author = {
    id: string,
    name: string,
    text: string,
    url: string,
    colors: AuthorColors,
};

export type Quote = {
    id: string,
    content: string,
    author: Author,
}

export type AuthorColors = {
    soft: string,
    hard: string,
};

export type QuoteMap = {
    [key: string]: Quote[],
};

