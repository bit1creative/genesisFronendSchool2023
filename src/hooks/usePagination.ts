import { useState, useEffect } from 'react';

const displayItem = (currentPage: number, maxPerPage: number, index: number): boolean => {
    const currentPageStart = (currentPage - 1) * maxPerPage + 1;
    const currentPageEnd = currentPage * maxPerPage;

    if (index + 1 >= currentPageStart && index + 1 <= currentPageEnd) {
        return true;
    }

    return false;
};

export interface UsePaginationReturn<T> {
    setItemList: (items: T[]) => void;
    isPaginating: boolean;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    pageItems: T[];
    totalPages: number;
}

export const usePagination = <T>(
    itemList: T[],
    maxItemsPerPage: number = 10
): UsePaginationReturn<T> => {
    const [items, setItems] = useState(itemList);
    const [currentPage, setCurrentPage] = useState(1);

    const isPaginating = items.length > maxItemsPerPage;
    const totalPages = Math.ceil(items.length / maxItemsPerPage);

    const pageItems: T[] = items.filter((val, index) => {
        if (!isPaginating) {
            return true;
        }

        if (!displayItem(currentPage, maxItemsPerPage, index)) {
            return false;
        }

        return true;
    });

    const setItemList = (items: T[]) => {
        setCurrentPage(1);
        setItems(items);
    };

    useEffect(() => {
        if (itemList.length) {
            setItems(itemList);
        }
    }, [itemList]);

    return {
        setItemList,
        isPaginating,
        currentPage,
        setCurrentPage,
        pageItems,
        totalPages
    };
};
