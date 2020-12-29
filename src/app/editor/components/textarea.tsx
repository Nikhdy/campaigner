import * as React from 'react';


interface ITextAreaProps {
    value: string
}


export const TextArea = (props: ITextAreaProps) => {
    return <div className="text-Area">
        {props.value}
    </div>
}