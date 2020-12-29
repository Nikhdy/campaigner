import * as React from 'react';
const { useRef, useEffect, useState } = React;
export const Img = (props) => {
    const [onEdit, toggleEdit] = useState(false);
    const [value, editValue] = useState('');
    const output = useRef(null);
    useEffect(() => {
        if (props.content) {
            editValue(props.content);
        }
    }, []);

    const loadFile = (e) => {
        output.current.src = URL.createObjectURL(e.target.files[0]);
    };

    return <div className="upload-viewer">
        <label htmlFor="upload-photo" className="upload-photo">
            <i className="fa fa-upload" aria-hidden="true"></i>
        </label>
        <input className="img-input" type="file" accept="image/*" name="image" id="upload-photo" onChange={loadFile} ></input>
        <img ref={output} src={value} width="200" />
    </div>
}