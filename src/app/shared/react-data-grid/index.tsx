import * as React from 'react';
import { Table } from './table';
import * as _ from 'lodash';
import { Column } from './columns';

interface IReactDataGridProps {
  name: string;
  rows: any[];
  columns: ReactDataGrid.IColumn[];
  onColumnSortClick?: any;
  onColumnFilter?: any;
  onRowSelected?: any;
  selectedIndex?: any[];
  height: number;
  rowSelection?: IRowSelection;
  paginated?: ReactDataGrid.IPaginated;
}
interface IRowSelection {
  colKey: string;
  enableShiftSelect?: boolean;
  showCheckBox: boolean;
  onSelectionToggle: any;
}

interface IReactDataGridState {
  sortColumn: string;
  sortDirection: ReactDataGrid.SortDirection;
  filters: ReactDataGrid.IFilter[];
  pageNum?: number;
  displayRows: any[];
  willUpdate: boolean;
  columns: ReactDataGrid.IColumn[];
}

export class ReactDataGrid extends React.Component<IReactDataGridProps, IReactDataGridState> {
  container: any;
  constructor(props: IReactDataGridProps) {
    super(props);
    this.state = {
      sortColumn: '',
      sortDirection: '',
      filters: [],
      displayRows: [],
      willUpdate: true,
      pageNum: 1,
      columns: [],
    };
    this.showFilter = this.showFilter.bind(this);
    this.onColumnClickToSort = this.onColumnClickToSort.bind(this);
    this.sortFilterRows = this.sortFilterRows.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.getColumnOptions = this.getColumnOptions.bind(this);
    this.onCheckBoxToggled = this.onCheckBoxToggled.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
    this.onColumnDrag = this.onColumnDrag.bind(this);
  }
  showFilter() {
    let hasfilter = false;
    _.forEach(this.props.columns, (col) => {
      if (col.filterable) {
        hasfilter = true;
      }
    });
    return hasfilter;
  }
  onColumnClickToSort(colName: string, sortDirection: ReactDataGrid.SortDirection) {
    if (this.props.onColumnSortClick) {
      this.setState({ sortColumn: colName, sortDirection, willUpdate: true,  pageNum: 0 });
      // send pagination too
      this.props.onColumnSortClick(colName, sortDirection, {
        sortField: colName,
        sortOrder: sortDirection,
        filters: this.state.filters
      });
    } else {
      this.setState({ sortColumn: colName, sortDirection });
    }
  }

  onFilterChange(colName: string, filtertext: string) {
    const filters =  this.state.filters;
    let index = -1;
    _.forEach(filters, (filter, ind) => {
      if (filter.name === colName) {
        index = ind;
      }
    });
    if (index >= 0) {
      filters.splice(index, 1);
    }
    if (_.isNaN(filtertext)) {
      if (!filtertext) {
        filters.push({ name: colName, text: filtertext });
      }
    } else {
      filters.push({ name: colName, text: filtertext });
    }
    if (this.props.onColumnFilter) {
      this.setState({ filters, willUpdate: true,  pageNum: 0 });
      this.props.onColumnFilter(filters,
        {
          sortField: this.state.sortColumn,
          sortOrder: this.state.sortDirection,
          filters
        });
    }else{
      this.setState({ filters});
    }
  }

  getColumnOptions(colName: string) {
    const rows = this.props.rows;
    const column = _.filter(this.props.columns, (col) => {
      return col.fieldName === colName;
    });
    if (column.length > 0) {
      if (column[0].options) {
        return column[0].options;
      } else {
        const options = rows.map((obj) => obj[colName]);
        return options.filter((v, i) => options.indexOf(v) === i);
      }
    } else {
      return [];
    }
  }

  sortFilterRows() {
    const { sortColumn, sortDirection, filters } = this.state;
    let rows: any[] = [];
    rows = this.state.displayRows.length ? this.state.displayRows.slice(0) : this.getDisplayRows(this.props.rows);
    if (this.props.onColumnFilter) {
      return rows;
    } else if (filters.length > 0 && rows.length > 0) {
      rows.forEach((row) => {
        let flag = true;
        filters.forEach((filter) => {
          if (!_.includes(row[filter.name].toString(), filter.text)) {
            flag = false;
          }
        });
        row.filtered = flag;
      });
    }
    if (this.props.onColumnSortClick) {
      return rows;
    } else {
      if (sortDirection === 'ASC') {
        rows = rows.sort((a, b) => {
          const x = a[sortColumn];
          const y = b[sortColumn];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
      } else if (sortDirection === 'DESC') {
        rows = rows.sort((a, b) => {
          const x = a[sortColumn];
          const y = b[sortColumn];
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
      }
      return rows;
    }
  }

  showCheckBox() {
    const rowSelection: any = this.props.rowSelection || {};
    return rowSelection.showCheckBox && rowSelection.colKey;
  }
  onCheckBoxToggled(rowIds: any[], headerChecked?: boolean) {
    const displayRows = this.state.displayRows;
    if (this.props.rowSelection) {
      const colSlectionKey = this.props.rowSelection.colKey;
      if (headerChecked !== undefined) {
        displayRows.forEach((row) => {
          if (row.filtered) {
            row.checkBoxSelected = headerChecked;
          }
        });
      } else if (rowIds.length > 1) {
        if (colSlectionKey) {
          rowIds.forEach((rowId) => {
            const index = _.findIndex(displayRows, (row) => row[colSlectionKey] === rowId);
            displayRows[index].checkBoxSelected = true;
          });
        }
      } else {
        if (colSlectionKey) {
          rowIds.forEach((rowId) => {
            const index = _.findIndex(displayRows, (row) => row[colSlectionKey] === rowId);
            displayRows[index].checkBoxSelected = !displayRows[index].checkBoxSelected;
          });
        }
      }
      const selectedRowIds: any[] = [];
      displayRows.forEach((row) => { if (row.checkBoxSelected) { selectedRowIds.push(row.id); } });
      this.setState({ displayRows, willUpdate: false }, () => {
        if (this.props.rowSelection) {
          this.props.rowSelection.onSelectionToggle(selectedRowIds);
        }
      });
    }
  }
  getColumn(columns) {
    // const columns = this.props.columns || [];

    const totalWidth = this.container.offsetWidth;
    console.log(totalWidth);
    const rowSelection: IRowSelection = this.props.rowSelection || {} as IRowSelection;
    columns.forEach((column) => {
      if (!column.width) {
        if (rowSelection.colKey) {
          if (column.fieldName !== rowSelection.colKey) {
            column.width = 200;
          } else {
            column.width = 50;
          }
        } else {
          column.width = 200;
        }
      } else {
        if (rowSelection.colKey) {
          if (column.fieldName === rowSelection.colKey) {
            column.width = 50;
          }
        }
      }
    });
    return columns;
  }

  getDisplayRows(rows) {
    const displayRows = _.cloneDeep(rows);
    displayRows.forEach((row) => { row.checkBoxSelected = false; row.filtered = true; });
    return displayRows;
  }
  getPaginateNumbers(paginate: ReactDataGrid.IPaginated, length: number) {
    if (paginate.isPaginated) {
      const currentPage = this.state.pageNum;
      const pageNumber: number[] = [];
      if (length < 1000) {
        if (currentPage < 3) {
          for (let i = 1; i <= currentPage; i++) {
            pageNumber.push(i);
          }
        } else {
          for (let i = currentPage - 2; i <= currentPage; i++) {
            pageNumber.push(i);
          }
        }
      }
      return pageNumber;
    } else {
      return [];
    }
  }
  onPageClick(index) {
    return () => {
      this.setState({ pageNum: index });
      this.props.paginated.onPageClick(index, {
        sortField: this.state.sortColumn,
        sortOrder: this.state.sortDirection,
        filters: this.state.filters,
      });
    };
  }

  onColumnDrag(field: string, initWidth: number, grow: number) {
    const columns = this.props.columns;
    columns.forEach((column) => {
      if (column.fieldName === field) {
        column.width = (initWidth + grow) < 200 ? 200 : (initWidth + grow);
      }
    });
    this.setState({ columns });
  }
  componentDidMount() {
    const displayRows = this.getDisplayRows(this.props.rows);
    const columns = this.getColumn(this.props.columns);
    this.setState({ displayRows, columns });
  }


  // componentDidMount() {
  //   const displayRows = this.getDisplayRows(this.props.rows);
  //   this.setState({ displayRows });
  // }

  accessElement=(ele)=>{
    this.container =  ele;
  }

  componentWillReceiveProps(nextProps: IReactDataGridProps) {
    const length = this.state.displayRows.length;
    if (this.state.willUpdate || !length) {
      const displayRows = this.getDisplayRows(nextProps.rows);
      const columns = nextProps.columns ? this.getColumn(nextProps.columns) : this.getColumn(this.props.columns);
      this.setState({ displayRows, willUpdate: false, columns });
    }
  }

  render() {
    const { rowSelection = {} as IRowSelection, paginated = { isPaginated: false }, height } = this.props;
    const hasFilter = this.showFilter();
    const sortedFilteredRows = this.sortFilterRows().filter((row) => row.filtered);
    const showCheckBox = this.showCheckBox();
    const { columns } = this.state;
    const pageNum = this.getPaginateNumbers(paginated, sortedFilteredRows.length);
    const hasPagination = !(sortedFilteredRows.length < 1000 && this.state.pageNum === 1);
    return (<div className='data-grid-container'
      style={{ height: (this.props.height ? this.props.height + 'px' : '500px') }} ref={this.accessElement}>
        <Table columns={columns}
          hasFilter={hasFilter}
          rows={sortedFilteredRows}
          height={paginated.isPaginated ? (height - 50) : height}
          showCheckBox={showCheckBox}
          onFilterChange={this.onFilterChange}
          totalRows={sortedFilteredRows.length}
          checkBoxColumnKey={rowSelection.colKey}
          onColumnClick={this.onColumnClickToSort}
          getColumnOptions={this.getColumnOptions}
          checkBoxToggled={this.onCheckBoxToggled}
          onColumnDrag={this.onColumnDrag} 
          width={this.container ? `${this.container.offsetWidth}px`: "100%"}/>
      {paginated.isPaginated && hasPagination && <div className='paginate-container'>
        {pageNum[0] !== 1 && <button onClick={this.onPageClick(this.state.pageNum - 1)}>Prev</button>}
        {_.map(pageNum, (num) => {
          return <button onClick={this.onPageClick(num)} className={num === this.state.pageNum ? 'active' : ''}>
            {num}</button>;
        })}
        {sortedFilteredRows.length === 1000 && <button onClick={this.onPageClick(this.state.pageNum + 1)}>Next</button>}
      </div>}
    </div>);
  }
}
