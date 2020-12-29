import * as React from 'react';
import { useEffect, FC, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setRoute } from 'app/stores/application/app.action';
import { fetchProspects, fetchProspectColumns } from 'app/stores/prospects/prospect.action';
import {ReactDataGrid}  from '../../shared/react-data-grid';
import { showModal } from 'app/stores/application/app.action';
import DropDown from 'app/shared/dropdown/dropdown';
interface IPropspectProps {
  setRoute: (route: string) => void;
  fetchProspects: (filter: any) => void;
  fetchProspectColumns: () => void;
  columns: ReactDataGrid.IColumn[];
  prospects: any[],
  showModal: (val: string)=> void;
}


const ProspectsUnwrapped: FC<IPropspectProps> = (props) => {

  useEffect(() => {
    props.setRoute('PROSPECTS');
    props.fetchProspectColumns();
    props.fetchProspects({});
  }, [])

  const onSelectionToggle = (selectedIDs) => {
    console.log('SELECTED', selectedIDs);
  };
  const buttons = [{
    name: 'add',
    displayName: 'Add',
    event: (e) => {props.showModal('addprospect')},
    icon: 'fa fa-user-plus',
    disabled: false,
  }, {
    name: 'delete',
    displayName: 'Delete',
    event: (e) => {props.showModal('deleteprospect') },
    icon: 'fa fa-user-times',
    disabled: false,
  }, {
    name: 'show',
    displayName: 'Show / Hide',
    event: (e) => {props.showModal('modifycolumns')},
    icon: 'fa fa-eye',
    disabled: false,
  }, {
    name: 'addColumn',
    displayName: 'Add Column',
    event: (e) => {props.showModal('addcolumn')},
    icon: 'fa fa-plus',
    disabled: false,
  }];

  const rowSelection = {
    colKey: 'id',
    enableShiftSelect: true,
    showCheckBox: true,
    onSelectionToggle: onSelectionToggle,
  }


  const onNaviagte =(pageNo: number, obj : any)=>{
     // api to fetch data
     console.log("DATA",obj );
     props.fetchProspects(obj);
  }
  const onColumnFilter = (filters, obj )=>{
    // api to fetch data
    props.fetchProspects(obj);
  }
  const onColumnSort = (columnName,sortDirection, obj)=>{
    props.fetchProspects(obj);
  }

  return <div className='content-box'>
    <div className='row'>
      <div className='col-sm-12'>
        <div className='element-wrapper'>
          <h6 className='element-header'>Prospect
            <DropDown
              buttons={buttons}
              className='float-right'
              type='dropdown'
              displayName='Actions'
              icon="fa fa-wrench"
            />
          </h6>
          <ReactDataGrid
            name='prospects'
            rows={props.prospects}
            columns={props.columns}
            height={700}
            rowSelection={rowSelection}
            onColumnFilter={onColumnFilter}
            onColumnSortClick={onColumnSort}
            paginated={{ isPaginated: true, noOfRowsPerPage: 50, onPageClick: onNaviagte }}
          />
        </div>
      </div>
    </div>
  </div>
}
const mapDispatchToProps = dispatch => {
  return {
    setRoute: (route: string) => dispatch(setRoute(route)),
    fetchProspects: (filter: any) => dispatch(fetchProspects(filter)),
    fetchProspectColumns: () => dispatch(fetchProspectColumns()),
    showModal: (val: string) => dispatch(showModal(val)),
  }
}
const mapStateToProps = (state) => {
  return {
    columns: state.prospectReducer.columns,
    prospects: state.prospectReducer.prospects
  }
}
export const Prospects = connect(mapStateToProps, mapDispatchToProps)(ProspectsUnwrapped)