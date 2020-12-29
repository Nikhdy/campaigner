import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { getCampaignByuIdSelector, getDripVariables } from 'app/stores/campaign/campaign.selector';
import { CustomEditor } from '../../shared/editor/editor';
import { editDrips } from '../../stores/campaign/campaign.action';
interface IDrapTabProps {
    match: any;
    campaign: Campaign.IColdCampaign;
    editDrips: (drip: any) => void;
    variables: any;
}
interface IDrapTabState {
    editIndex?: number,
    showAllMessages: boolean,
    newDrip: boolean,
    showDrowDown: boolean,
    type: 'email' | 'newsletter'
}

class DripTabUnwrapped extends React.Component<IDrapTabProps, IDrapTabState>{
    constructor(props) {
        super(props)
        this.state = {
            showAllMessages: false,
            newDrip: true,
            editIndex: -1,
            showDrowDown: false,
            type: 'newsletter',
        }
    }
    editDrips = (index) => () => {
        this.setState({ editIndex: index, newDrip: false })
    }
    createDrip = (type: 'email' | 'newsletter') => () => {
        // append drip to the campaign
        const index = this.props.campaign && this.props.campaign.drips ? this.props.campaign.drips.length : 0;
        this.setState({ newDrip: true, editIndex: index, showDrowDown: false, type })
    }
    onCloseEditor = () => {
        this.setState({ editIndex: -1, newDrip: false });
    }

    deleteDrip = (drip) => () => {
        // show model to delete and confirm delete
    }
    onSaveEditor = (value) => () => {
        const { editIndex } = this.state;
        const { campaign } = this.props;
        const editDrip: any = campaign.drips[editIndex] || {};
        const drip = { dripTitle: editDrip.dripTitle || '', subject: value.subject || '', body: value.text, id: editDrip.id || '', delay: editDrip.delay || 0 }
        this.props.editDrips({ drip, editIndex })
    }

    showDropDown = () => {
        this.setState(state => ({ ...state, showDrowDown: true }));
    }

    getEmail = (drip: Campaign.IDrip, index) => {
        return <div className="aec-full-message-w" key={index}>
            {index === this.state.editIndex ?
                <CustomEditor editorObject={drip}
                    onCloseEditor={this.onCloseEditor}
                    onSaveEditor={this.onSaveEditor}
                    variables={this.props.variables}
                    type={drip.type}
                /> : <div className="aec-full-message">
                    <div className="message-head">
                        <div className="user-w">
                            <div className="user-name">
                                <div className="user-subtitle">
                                    {drip.dripTitle}
                                </div>
                                <div className="user-role">
                                    <b>Subject: </b>{drip.subject}
                                </div>
                            </div>
                        </div>
                        <div className="actions-buttons">
                            <i className="os-icon os-icon-pencil-2" onClick={this.editDrips(index)} />
                            <i className="os-icon os-icon-ui-15" onClick={this.deleteDrip(drip)}></i>
                        </div>
                    </div>
                    <div className="message-content" dangerouslySetInnerHTML={{ __html: drip.body ? drip.body.replace(/(<? *script)/gi, 'illegalscript') : '' }}>
                    </div>
                </div>}
        </div>
    }


    expandAllMessages = () => {
        this.setState({ showAllMessages: true })
    }

    render() {
        const { campaign } = this.props;
        const drips = campaign.drips || [];
        const { newDrip, editIndex , showDrowDown, type} = this.state;
        return <div className="ae-content">
            <div className="older-pack show-msgs">
                {
                    _.map(drips, (drip, index) => {
                        return this.getEmail(drip, index);
                    })
                }
            </div>
            {newDrip && <div className="aec-full-message-w"> <CustomEditor
                onCloseEditor={this.onCloseEditor}
                onSaveEditor={this.onSaveEditor}
                variables={this.props.variables}
                type={type}
            /></div>}
            {editIndex == -1 && <div className={`${showDrowDown? 'show': ''} dropdown`}><button className="btn btn-primary dropdown-toggle"
                onClick={this.showDropDown}
                type="button" id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="os-icon os-icon-plus"></i>
                    Add Drip
                </button>
                <div className={`${showDrowDown? 'show': ''} dropdown-menu`} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="javascript:void(0)" onClick={this.createDrip('email')}>email</a>
                    <a className="dropdown-item" href="javascript:void(0)" onClick={this.createDrip('newsletter')}>News letter</a>
                </div>
            </div>}
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editDrips: (data) => dispatch(editDrips(data)),
    }
}
const mapStateToProps = (state) => {
    return {
        campaign: getCampaignByuIdSelector(state),
        variables: getDripVariables(state),
    }
}


export const DripTab = connect(mapStateToProps, mapDispatchToProps)(DripTabUnwrapped);
