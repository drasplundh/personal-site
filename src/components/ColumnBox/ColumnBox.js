import React from 'react';

function ColumnBox({leftContent, rightContent}) {
    return (
        <div className="column-box">
            <div id="left">{leftContent}</div>
            <div id="right">{rightContent}</div>
        </div>
    )
};

export default ColumnBox;