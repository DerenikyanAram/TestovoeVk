import React, { useState } from 'react';
import './Button.css';

const Button = ({ onClick, count, isLoading }) => {
    return (
        <button onClick={onClick} className="button" disabled={isLoading}>{!isLoading ? (<span className="content">что сделать {count}</span>) : (
                <div className="loader">
                    <div className="shimmer"></div>
                </div>
            )}
        </button>
    );
}

export default Button;
