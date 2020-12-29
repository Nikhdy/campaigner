import * as React from 'react';

export const Button = (props) => {
    return <div>
        <button className='btn btn-primary'>{props.value}</button>
    </div>
};   