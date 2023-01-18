import { search } from '../helpers';
import { IArticle } from '../models';
import { keys } from '../constans';
import { useState, useEffect } from 'react';

export const useSearchingData = (responseData: Array<IArticle> | undefined, query: Array<string>) => {
    const [searchingData, setSearchingData] = useState<Array<IArticle>>();

    useEffect(() => {
        setTimeout(() => {
            if (responseData !== undefined) {
                setSearchingData(() => search(responseData, keys, query));
            }
        }, 500);
    }, [responseData, query])

    return searchingData;
}
