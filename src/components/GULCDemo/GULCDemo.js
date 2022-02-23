import { useEffect, useState } from 'react';
import { handleFormSubmit, init } from './extension';
import './GULCDemo.scss';

export default function GULCDemo() {
    useEffect(() => {
        init();
    }, []);

    return(
        <div className='Demo'>
            <figure className='LinguistChartDemo'>
                <div className='LinguistChartDemo__header'>
                    <img src='https://avatars.githubusercontent.com/u/56898944?v=4' className='LinguistChartDemo__avatar user__avatar' alt="avatar" />
                    <div className='LinguistChartDemo__metadata'>
                        <span className='LinguistChartDemo__name user__display'>Michael Hollingshead</span>
                        <span className='LinguistChartDemo__username user__name'>mhollingshead</span>
                    </div>
                </div>
                <div className='LinguistChartDemo__description'>
                    <span className='LinguistChartDemo__data'>&nbsp;&nbsp;&nbsp;</span> <span className='LinguistChartDemo__label'>followers</span>&nbsp;•&nbsp;<span className='LinguistChartDemo__data'>&nbsp;&nbsp;&nbsp;</span> <span className='LinguistChartDemo__label'>following</span>
                </div>
                <ul className='LinguistChartDemo__list'>
                    <li className='LinguistChartDemo__item LinguistChartDemo__item--active'>Overview</li>
                    <li className='LinguistChartDemo__item'>Repositories</li>
                    <li className='LinguistChartDemo__item'>Projects</li>
                    <li className='LinguistChartDemo__item'>...</li>
                </ul>
                <div className='LinguistChartDemo__modules'>
                    <div className='wrapper'></div>
                    <h2 className="f4 mb-2 text-normal">Pinned</h2>
                    <div className='snip'>
                        <figure className='lang-figure' style={{height: '2rem'}}></figure>
                    </div>
                </div>
            </figure>
        </div>
    );
}