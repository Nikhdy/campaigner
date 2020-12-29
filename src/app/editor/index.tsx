import * as React from 'react';
import { Toolkit } from './components/toolkit';
import { Canvas } from './components/canvas';
export class Editor extends React.Component<IEditorProps, any>{
    constructor(props) {
        super(props)
        this.state={
            editElement: null
        }
    }

    onToolClick = (tool: Editor.ITool) => () => {
        console.log(tool);
    }

    onElementClick =(tag) => {
        this.setState({editElement: tag})
    }

    render() {
        return <div className="editor_wrapper">
            <div className="editor_header">
                Editor header
            </div>
            {this.props.type === 'newsletter' ?
                <div className="newsletter_body">
                    <div className="canvas">
                        <Canvas value={this.props.value}  onElementClick={this.onElementClick}/>
                    </div>
                    <Toolkit onToolClick={this.onToolClick} element={this.state.editElement}/>
                </div> :
                <div className="editor_body">

                </div>
            }
            <div className="editor_footer">
            </div>
        </div>
    }
}


interface IEditorProps {
    onChange: (e: any) => any;
    type: 'email' | 'newsletter';
    value?: any;
}
