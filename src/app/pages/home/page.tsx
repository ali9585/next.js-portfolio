import React from 'react';
import Image from 'next/image';

export const Page: React.FC = (): JSX.Element => {
    return (
        <>
            <div className='content'>
                <div className='hireme-card-wrapper'>
                    <div className='hireme-card'>
                        <div className='flex justify-between'>
                            <h2 className='logo'>Ali</h2>
                            <span className='title'>
                                Full Stack
                                <br />
                                Developer
                            </span>
                        </div>
                        <Image className='my-image' src={require('../../../../public/assets/images/my-logo.png')} alt='me' />
                    </div>
                </div>
            </div>
        </>
    );
}