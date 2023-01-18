import { IArticle } from "../models";

export const limitCharacters = (item: string, numOfCharacters: number) => {
    if (item.length > numOfCharacters) {
        return `${item.substring(0, numOfCharacters)}...`;
    }
    else {
        return item;
    }
}

export const compare = (key: string, order: string, query: Array<string>) => {
    return (a: IArticle, b: IArticle) => {
        const isItemIncludesQuery = (item: IArticle) => {
            return query.map((queryItem) => item[key].toLowerCase().includes(queryItem));
        }

        const getOrderNumOfItem = (item: IArticle) => {
            return isItemIncludesQuery(item).includes(true) ? isItemIncludesQuery(item).filter(item => item === true).length : 0;
        }

        if (order === 'asc') return getOrderNumOfItem(a) - getOrderNumOfItem(b);
        if (order === 'desc') return getOrderNumOfItem(b) - getOrderNumOfItem(a);
        else return 0;
    }
};

export const search = (data: Array<IArticle>, keys: Array<string>, query: Array<string>) => {
    return data.filter((item) => {
        return keys.some((key) => {
            return query.some((word) => {
                if ((query.length === 1) || (query.length > 1 && word !== '')) {
                    return item[key].toLowerCase().includes(word)
                }
            })
        })
    })
};
