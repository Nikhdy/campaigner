import * as React from 'react';
import { connect } from 'react-redux';
import { ReactDataGrid } from '../../shared/react-data-grid';
import DropDown from 'app/shared/dropdown/dropdown';
import { fetchProspects, fetchProspectColumns } from 'app/stores/prospects/prospect.action';


interface IProspectTabProps {
    match: any;
    fetchProspects: (filter: any) => void;
    fetchProspectColumns: () => void;
    columns: ReactDataGrid.IColumn[];
    prospects: any[],
}
interface IProspectTabState {

}

class ProspectTabUnwrapped extends React.Component<IProspectTabProps, IProspectTabState>{

    componentDidUpdate(prevProps, prevState) {

    }

    componentDidMount() {
        // API CALL DONE HERE CAMPAIGN WONT HAVE ASSIGNED PROSPECTS FILTER PROSPECTS BY CAMPAIGN ID 
        this.props.fetchProspectColumns();
        this.props.fetchProspects({});
    }

    onSelectionToggle = (selectedIDs) => {
        console.log('SELECTED', selectedIDs);
    }


    buttons = [{
        name: 'add',
        displayName: 'Add',
        event: (e) => { console.log('Add prospects') },
        icon: 'fa fa-user-plus',
        disabled: false,
    }, {
        name: 'delete',
        displayName: 'Delete',
        event: (e) => { console.log('delete prospects') },
        icon: 'fa fa-user-times',
        disabled: false,
    }, {
        name: 'show',
        displayName: 'Show / Hide',
        event: (e) => { console.log('show/hide columns') },
        icon: 'fa fa-eye',
        disabled: false,
    }, {
        name: 'addColumn',
        displayName: 'Add Column',
        event: (e) => { console.log('Add Column') },
        icon: 'fa fa-plus',
        disabled: false,
    }]



    render() {
        const rowSelection = {
            colKey: 'id',
            enableShiftSelect: true,
            showCheckBox: true,
            onSelectionToggle: this.onSelectionToggle,
        }
        return  <div className='row'>
                <div className='col-sm-12'>
                    <DropDown
                        buttons={this.buttons}
                        className='float-right'
                        type='dropdown'
                        displayName='Actions'
                        icon="fa fa-wrench"
                    />
                </div>
                <div className='col-sm-12'>

                  {this.props.prospects.length > 0 && <ReactDataGrid
                        name='prospects'
                        rows={this.props.prospects}
                        columns={this.props.columns}
                        height={700}
                        rowSelection={rowSelection}
                        paginated={{ isPaginated: true }}
                    />}
                </div>
            </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProspects: (filter: any) => dispatch(fetchProspects(filter)),
        fetchProspectColumns: () => dispatch(fetchProspectColumns())
    }
}
const mapStateToProps = (state) => {
    return {
        columns: state.prospectReducer.columns,
        prospects: state.prospectReducer.prospects
    }
}

export const ProspectTab = connect(mapStateToProps, mapDispatchToProps)(ProspectTabUnwrapped);
