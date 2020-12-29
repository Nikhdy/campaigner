import * as React from 'react';
import {connect} from 'react-redux';

interface ISettingTabProps{
    match: any;
}
interface ISettingTabState{

}

class SettingTabUnwrapped extends React.Component<ISettingTabProps,ISettingTabState>{
    render(){
        const {match} = this.props;
        return <div>
            This is the Setting tab
        </div>
    }
}


export const SettingTab = connect()(SettingTabUnwrapped);
