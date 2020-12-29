import * as React from 'react';
import {TextArea} from './textarea';
import {Img} from './image';
import {Button} from './button';

export const Canvas = (props)=> {
    const renderComponent = (element) => {
        switch(element.type){
            case 'TEXT':
                return <TextArea value={element.content}></TextArea>;
            case 'IMAGE':
                return <Img value={element.content}></Img>; 
            case 'BUTTON':
                return <Button value={element.content}></Button>;    
            default:
                return  <React.Fragment />
        }
    }

    const onElementClick = (tag)=>(e)=> {
        props.onElementClick(tag);
    }

    const renderContent =(tag)=>{
        console.log(tag);
       return tag.map(element => {if(element.components){
           //TODO: got to remove div
            return <div className="tag-container" key={tag.id} onClick={onElementClick(element)}>{renderContent(element.components)}</div>
        }else{
            return renderComponent(element);
        }})
    }
    return <div>{renderContent(props.value)}</div>
}