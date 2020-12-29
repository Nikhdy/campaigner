import * as React from 'react';
import { createRef } from 'react';
import { Editor } from '../../editor';

interface ICustomEditorState {
  text: string,
  subject: string,
  position?: number,
}
interface ICustomEditorProps {
  editorObject?: { subject: string, body: string },
  variables?: any,
  onChange?: (value: any) => void,
  onCloseEditor: () => void,
  onSaveEditor: (value: any) => () => void,
  type: 'email' | 'newsletter'
}

export const CustomEditor = (props: ICustomEditorProps) => {

  const tempNewsletter = [
    {tag: 'div', type: 'LAYOUT', components: [{tag: 'p', type:'TEXT', content: 'this is my first Text', style: '' }]},
    {tag: 'div', type: 'LAYOUT', components: [{tag: 'img', type:'IMAGE', content: '', style: '' }]},
    {tag: 'div', type: 'LAYOUT', components: [{tag: 'img', type:'BUTTON', content: 'Click Here', style: '' }]},
  ]
  const handleChange = (value) => {
    console.log("POITION", value);
  }

  return <div className={`editor_container ${props.type}_container`}>
    <div className="editor-custom-header">
      <div className="editor-actions">
        <i className="fa fa-times fa-2" onClick={props.onCloseEditor}></i>
      </div>
    </div>
    <Editor onChange={handleChange} type={props.type} value={tempNewsletter}/>
  </div>
}

