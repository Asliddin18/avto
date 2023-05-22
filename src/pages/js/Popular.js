import React from 'react'
import "../css/Popular.css"

export default function Popular() {

    return (
        <div className='popular'>
            <div className="popular_top">
                <h1>Popular Makes</h1>
                <div className="pop_btns">
                    <a href='#!' className='popular_btn'>Audi</a>
                    <a href='#!' className='popular_btn'>BMW</a>
                    <a href='#!' className='popular_btn'>Cadillac</a>
                    <a href='#!' className='popular_btn'>Ferrari</a>
                </div>
            </div>
        </div>
    )
}
