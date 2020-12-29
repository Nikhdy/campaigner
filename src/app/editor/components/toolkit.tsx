import * as React from 'react';
import { tags, layout, tagSettings } from './tools';
const { useMemo, useState, useEffect } = React;
import {Settings} from './settings';
interface IToolKit {
    onToolClick: (tool: Editor.ITool)=> () => void,
    element: any
}

export const Toolkit = (props: IToolKit) => {

    const [active, setActive] = useState(1);
    useEffect(()=>{
        if(props.element){
            setActive(3);
        }else{
            setActive(1);
        }
    },[props.element])
    const displayTags = useMemo(() => tags.filter(tag => tag.display), [tags])

    return <div className="toolkit">
        <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
                <a className={`nav-link ${active===1? 'active':''}`} href="javascript:void(0)" onClick={()=>{setActive(1)}}>Insert</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${active===2? 'active':''}`} href="javascript:void(0)"  onClick={()=>{setActive(2)}}>Layout</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${props.element? '': 'disabled'} ${active===3 ? 'active':''}`}href="javascript:void(0)" onClick={()=>{props.element &&  setActive(3)}}>Styles</a>
            </li>
        </ul>
        <div>
            <div className={`${active === 1? 'tool-container':'hidden'}`}>
                {displayTags.map(tag => <div className='tool-card'> <div onClick={props.onToolClick(tag.value)}> <i className={tag.icon}></i><p className="tool-label">{tag.label}</p></div>
                </div>)}
            </div>

            <div className={`${active === 2? 'tool-container':'hidden'}`}>
                {layout.map((item: any) => <div className=''>{item.label}
                </div>)}
            </div>
            <div className={`${active === 3 && props.element? 'tool-container':'hidden'}`}>
               <Settings/>
            </div>
        </div>
    </div>
}
