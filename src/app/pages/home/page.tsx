import React from 'react';
import LeftSidebar from '@/app/partials/leftSidebar';

export const Page: React.FC = (): JSX.Element => {
    return (
        <>
            <div className='left-sidebar-wrapper'>
                <LeftSidebar />
            </div>
            <div className='main'>
            <div className='content'>
            </div>
            </div>
        </>
    );
}