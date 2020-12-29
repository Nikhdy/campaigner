import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { showModal } from 'app/stores/application/app.action';

interface IModalProps {
    children?: any;
    header?: string;
    showModal: (modalName: string) => void;
    footer?: any;
    className?: string;
    size?: string;
}

export class ModalUnwrapped extends React.Component<IModalProps, {}>{
    constructor(props) {
        super(props)

        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.showModal('');
    }


    render() {
        const { className, size } = this.props;
        return ReactDom.createPortal( <div aria-labelledby="myLargeModalLabel" className="onboarding-modal modal fade fade-up animated show" role="dialog"
            style={{ paddingRight: '15px', display: 'block' }}>
            <div className={"modal-dialog modal-centered modal-" + (size ? size : 'lg')} role="document">
                <div className={"modal-content " + (className ? className : '')}>
                   <div className="modal-header">
                   {this.props.header && <h5 className="modal-title" id="exampleModalLabel">
                            {this.props.header}
                        </h5>}
                        <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={this.onClose} >
                            <span className="os-icon os-icon-close"></span>
                        </button>
                    </div>
                    <div className="onboarding-content with-gradient">
                        {this.props.children}
                    </div>
                    {this.props.footer && <div className="modal-footer"></div>}
                </div>
            </div>
        </div>, document.getElementById('modal-root'))
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showModal: (modalName: string) => dispatch(showModal(modalName)),
    }
}

export const Modal = connect(null, mapDispatchToProps)(ModalUnwrapped);
