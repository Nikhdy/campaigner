import * as React from 'react';
import * as ReactDom from 'react-dom';
import { FC, useEffect } from 'react';

interface IModal {
    open: boolean,
    children?: React.ReactNode,
    onClose ?: ()=> void;
}
const Modal: FC<IModal> = (props) => {
    return ReactDom.createPortal( <div className="onboarding-modal modal fade animated show-on-load show" role="dialog" tabIndex={-1} aria-modal="true" style={props.open ? { display: 'block' }:{}}>
        <div className="modal-dialog modal-centered" role="document">
            <div className="modal-content text-center">
                <div className="modal-header">
                    <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={props.onClose}>
                        <span className="os-icon os-icon-close"></span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.open && props.children}
                </div>
            </div>
        </div>
    </div>, document.getElementById('modal-root'))
}

export default Modal;