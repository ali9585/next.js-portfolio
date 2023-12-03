'use client';

import { useEffect } from 'react';
import { RootState } from "@/app/presentationLayer/redux/store/store";
import { useSelector, useDispatch } from 'react-redux';
import redux from "@/app/presentationLayer/redux/actions/actions";

interface ReturnedData {
    updateSection: (index: number) => void,
    updateSectionIndex: (index: number) => void
}

export const usePageSectionController = (): ReturnedData => {
    const pageSection = useSelector((state: RootState) => state.pageSection.current);
    const pageScroll = useSelector((state: RootState) => state.pageSection.pageScroll);

    const dispatch = useDispatch();

    const updateSection = (index: number): void => {
        let sections = document.getElementsByClassName("scrollto-section");

        if (sections[index]) {
            sections[index].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'center'
            });
            
            if (pageScroll)
                dispatch(redux.disableScroll());
            
            dispatch(redux.changePageSection(index));
        }
    }

    const updateSectionIndex = (index: number): void => {
        dispatch(redux.changePageSection(index));
    }

    useEffect(() => {
        window.addEventListener('scrollend', () => {
            if (!pageScroll)
                dispatch(redux.enableScroll());
        })
    }, [])

    return {
        updateSection,
        updateSectionIndex
    };
}