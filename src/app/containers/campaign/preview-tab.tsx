import * as React from 'react';
import {connect} from 'react-redux';

interface IPreviewTabProps{
    match: any;
}
interface IPreviewTabState{

}

class PreviewTabUnwrapped extends React.Component<IPreviewTabProps,IPreviewTabState>{
    render(){
        const {match} = this.props;
        return <div>
            This is the Preview tab
        </div>
    }
}


export const PreviewTab = connect()(PreviewTabUnwrapped);
