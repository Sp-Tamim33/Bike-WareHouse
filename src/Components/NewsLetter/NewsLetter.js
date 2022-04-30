import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div>
            <div className="newslatter-secton">
                <div className="mid-content">
                    <div className="newslatter-content">
                        <h3>Keep up to date with the latest updates</h3>
                        <p>Subscribe to our newsletter</p>
                    </div>
                    <div className="form">
                        <input type="email" className="email" placeholder="E-mail Address" />
                        <button type="submit" className="btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;