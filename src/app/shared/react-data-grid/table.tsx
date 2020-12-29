import * as React from 'react';
import * as _ from 'lodash';
import { Row } from './row';
import { Column } from './columns';

interface ITableProps {
  columns: ReactDataGrid.IColumn[];
  onColumnClick: any;
  onFilterChange: any;
  hasFilter: boolean;
  rows: any[];
  getColumnOptions: any;
  totalRows: number;
  showCheckBox?: boolean;
  checkBoxColumnKey?: string;
  checkBoxToggled?: any;
  height: number;
  onColumnDrag: (fieldName: string, initWidth: number, grow: number) => void;
  width: string;
}

interface ITableState {
  sortKey?: string;
  sortDirec?: ReactDataGrid.SortDirection;
  xOffset: number;
  yOffset: number;
  startIndex: number;
  endIndex: number;
  isScrolling: boolean;
  isHeaderChecked?: boolean;
  previousRowId: string | number;
}
export class Table extends React.Component<ITableProps, ITableState> {
  viewPort: any;
  constructor(props: ITableProps) {
    super(props);
    this.state = {
      sortDirec: '',
      sortKey: '',
      xOffset: 0,
      yOffset: 0,
      startIndex: 0,
      endIndex: 0,
      isScrolling: false,
      isHeaderChecked: false,
      previousRowId: -1,
    };
    this.onTableClick = this.onTableClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onCustomFilterChange = this.onCustomFilterChange.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onCheckBoxToggled = this.onCheckBoxToggled.bind(this);
    this.scrollStep = this.scrollStep.bind(this);
    this.onHeaderCheckBoxToggled = this.onHeaderCheckBoxToggled.bind(this);
    // this.wheel = this.wheel.bind(this);
  }
  onFilterChange(colName: string) {
    return (e: any) => {
      this.viewPort.scrollTo({top:0,left:0, behavior: 'smooth' });
      const value = e.target.value;
      this.setState({ isHeaderChecked: false, yOffset: 0, previousRowId: -1 }, () => {
        this.props.onFilterChange(colName, value);
      });
    };
  }
  onCustomFilterChange(colName: string, filterText: string) {
    this.viewPort.scrollTo({top:0,left:0, behavior: 'smooth' });
    this.setState({ isHeaderChecked: false, yOffset: 0, previousRowId: -1 }, () => {
      this.props.onFilterChange(colName, filterText);
    });
  }


  onTableClick(sortKey: string) {
    return () => {
      let sortDirec = this.state.sortDirec || '' as ReactDataGrid.SortDirection;
      let tempSortKey = sortKey;
      const prevSortKey = this.state.sortKey || '';
      if (prevSortKey !== sortKey) {
        sortDirec = 'ASC';
      } else if (sortDirec === 'ASC') {
        sortDirec = 'DESC';
      } else if (sortDirec === 'DESC') {
        sortDirec = '';
        tempSortKey = '';
      }
      this.setState({ sortKey: tempSortKey, sortDirec, previousRowId: -1 });
      this.props.onColumnClick(tempSortKey, sortDirec);
    };
  }
  getDisplayColumns(columns: ReactDataGrid.IColumn[]) {
    const fixedColumns = columns.filter((column) => column.is_fixed);
    const freeColumns = columns.filter((column) => !column.is_fixed);
    // const dummyColumns = _.map(_.cloneDeep(fixedColumns),
    //   (col) => {
    //     col.is_fixed = false;
    //     col.sortable = false;
    //     col.filterable = false;
    //     return col;
    //   });
    const displayColumns = fixedColumns.concat(freeColumns);
    return displayColumns;

  }

  scrollStep(e: any) {
    const rowHeight = 34;
    const height = this.props.height - 90;
    const length = this.props.rows.length;
    let { startIndex, endIndex } = this.state;
    if (length * rowHeight < height) {
      startIndex = 0;
      endIndex = length;
    } else if (Math.ceil(e.currentTarget.scrollTop / rowHeight) < 5) {
      startIndex = 0;
      endIndex = Math.ceil(height / rowHeight + e.currentTarget.scrollTop / rowHeight) + 5;
    } else if (Math.ceil(e.currentTarget.scrollTop / rowHeight) > length - 2 * (Math.ceil(height / rowHeight)) - 5) {
      endIndex = length;
      startIndex = Math.ceil(e.currentTarget.scrollTop / rowHeight) - 5;
    } else {
      startIndex = Math.ceil(e.currentTarget.scrollTop / rowHeight) - 5;
      endIndex = Math.ceil(e.currentTarget.scrollTop / rowHeight) + 2 * Math.ceil(height / rowHeight) + 5;
    }
    this.setState({ yOffset: e.currentTarget.scrollTop, startIndex, endIndex });
  }

  onScroll(e: any) {
    if (this.state.xOffset !== e.currentTarget.scrollLeft) {
      this.setState({ xOffset: e.currentTarget.scrollLeft });
    }

    if (this.state.yOffset !== e.currentTarget.scrollTop) {
      if (!this.state.isScrolling) {
        this.setState({ isScrolling: true }, () => {
          setTimeout(() => {
            // this.scrollStep(e);
            // e.currentTarget.scrollTop = this.state.yOffset;
            this.setState({ isScrolling: false }, this.forceUpdate);
          }, 500);
        });
      } else {
        this.scrollStep(e);
      }
    }
  }
  getTableWidth(columns: ReactDataGrid.IColumn[]) {
    let width = 0;
    columns.forEach((col) => {
      width += col.width || 0;
    });
    return width;
  }

  getFixedDivOffsetWidth(columns: ReactDataGrid.IColumn[]) {
    const xOffset = this.state.xOffset;
    // const fixedColumns = _.filter(columns, (column) => { return column.is_fixed; });
    const divWidths: number[] = [];
    let width = 0;
    columns.forEach((column, index) => {
      if (index === 0) {
        if (column.width) {
          width = 0;
        } else {
          // get width from div
        }
      } else {
        if (column.width) {
          width += columns[index - 1].width || 0;
        } else {
          // get width from div
        }
      }
      if (!column.is_fixed) {
        divWidths.push(width - xOffset);
      } else {
        divWidths.push(width);
      }
    });
    return divWidths;
  }

  getTopHeight() {
    const { yOffset } = this.state;
    return Math.ceil(yOffset / 34) * 34;
  }
  componentDidMount() {
    // height of row viewport
    const height = this.props.height;
    const rowHeight = 34;
    const endIndex = Math.ceil(height / rowHeight) + 5;
    this.setState({ endIndex });
    this.viewPort.addEventListener('DOMMouseScroll', this.wheel, false);
    this.viewPort.addEventListener('wheel', this.wheel, false);
    this.viewPort.addEventListener('mousewheel', this.wheel, false);
  }
  wheel(event: any) {
    const distance = 30;
    const delta = event.wheelDelta / 120;
    event.currentTarget.scrollTop -= distance * delta;
    // this.viewPort.scrollTo({top:event.currentTarget.scrollTop ,behavior: 'smooth' })
  }
  componentWillReceiveProps(nextProps: ITableProps) {
    const height = nextProps.height;
    const rowHeight = 34;
    const length = nextProps.rows.length;
    const yOffset = this.state.yOffset;
    let endIndex = 0;
    let startIndex = 0;
    if (length * rowHeight < height) {
      startIndex = 0;
      endIndex = length;
    } else if (Math.ceil(yOffset / rowHeight) < 5) {
      startIndex = 0;
      endIndex = Math.ceil(height / rowHeight + yOffset / rowHeight) + 5;
    } else if (Math.ceil(yOffset / rowHeight) > length - 2 * (Math.ceil(height / rowHeight)) - 5) {
      endIndex = length;
      startIndex = Math.ceil(yOffset / rowHeight) - 5;
    } else {
      startIndex = Math.ceil(yOffset / rowHeight) - 5;
      endIndex = Math.ceil(yOffset / rowHeight) + 2 * Math.ceil(height / rowHeight) + 5;
    }
    this.setState({ startIndex, endIndex });
  }
  getDisplayRows() {
    const rows = this.props.rows;
    const { startIndex, endIndex } = this.state;
    return rows.slice(startIndex, endIndex);
  }
  onCheckBoxToggled(e: any, rowId: string | number, rowIndex: number) {

    this.setState({ isHeaderChecked: false });
    if (e.shiftKey) {
      const id = this.state.previousRowId;
      const rows = this.props.rows;
      let flag = false;
      if (id !== -1) {
        let rowIds: any = [];
        if (rowId !== id) {
          rows.forEach((row) => {
            if (row.id === id || row.id === rowId) {
              flag = !flag;
            }
            if (flag || row.id === id || row.id === rowId) {
              rowIds.push(row.id);
            }
          });
        } else {
          rowIds = [rowId];
          this.setState({ previousRowId: rowId });
          if (this.props.checkBoxToggled) {
            this.props.checkBoxToggled(rowIds);
          }
        }
        this.props.checkBoxToggled(rowIds);
      } else {
        this.setState({ previousRowId: rowId });
        const rowIds = [rowId];
        if (this.props.checkBoxToggled) {
          this.props.checkBoxToggled(rowIds);
        }
      }
    } else {
      const rowIds = [rowId];
      this.setState({ previousRowId: rowId });
      if (this.props.checkBoxToggled) {
        this.props.checkBoxToggled(rowIds);
      }
    }
  }
  onHeaderCheckBoxToggled(e: any) {
    const isHeaderChecked = !this.state.isHeaderChecked;
    this.setState({ isHeaderChecked });
    if (this.props.checkBoxToggled) {
      this.props.checkBoxToggled([], isHeaderChecked);
    }
  }


  render() {
    const { columns = [], showCheckBox, checkBoxColumnKey, height, rows, onColumnDrag } = this.props;
    const { sortKey = '', sortDirec = '', xOffset, startIndex, endIndex, isHeaderChecked } = this.state;
    const iconclass = (sortDirec === 'ASC' ? 'os-icon os-icon-arrow-down float-right' : (sortDirec === 'DESC' ? 'os-icon os-icon-arrow-up2 float-right' : ''));
    const displayColumns = this.getDisplayColumns(columns);
    const divWidth = this.getFixedDivOffsetWidth(displayColumns);
    const tableWidth = this.getTableWidth(displayColumns);
    const bodyHeight = height - 90;
    const displayRows = this.getDisplayRows();
    const rowHeight = 34;
    const topHeight = (startIndex) * rowHeight;
    const bottomHeight = (rows.length - endIndex) * rowHeight + 1;
    return (
      <div className='data-grid ui celled selectable table' style={{maxWidth: this.props.width}}>
        <div className='header-row row'>
          {_.map(displayColumns, (col, index) => {
            return <Column
              key={col.fieldName + '_header' + index} col={col} divWidth={divWidth[index]}
              showCheckBox={showCheckBox} onHeaderCheckBoxToggled={this.onHeaderCheckBoxToggled}
              isHeaderChecked={isHeaderChecked} sortKey={sortKey} onTableClick={this.onTableClick}
              onDrag={onColumnDrag} iconclass={iconclass} checkBoxColumnKey={checkBoxColumnKey} />
          })}
        </div>
        <div className='filter-row row'>
          {this.props.hasFilter && _.map(displayColumns, (col, index) => {
            return <div className={'filter_cell' + ' fixed_column'}
              key={col.fieldName + '_filter' + index}
              style={{
                minWidth: (col.width ? col.width : 'auto'),
                left: divWidth[index] + 'px',
                zIndex: (col.is_fixed ? 14 : 12),
                top: 46 + 'px'
              }}>
              {col.filterable ? (col.filter ? <col.filter options={this.props.getColumnOptions(col.fieldName)}
                onFilterChange={this.onCustomFilterChange} colName={col.fieldName} /> :
                <div className="filter-cell">
                  <input className="form-control" type={col.type} onChange={this.onFilterChange(col.fieldName)} /></div>) : ''}</div>;
          })}
        </div>
        <div className='top-div' style={{ height: '90px' }} ></div>

        <div ref={(elem) => { this.viewPort = elem; }} onScroll={this.onScroll} className='data-grid-body'
          style={{ height: bodyHeight + 'px' }}>
          <div style={{ minWidth: tableWidth + 'px' }}>
            <div style={{ height: topHeight + 'px' }}></div>
            {_.map(displayRows, (row: any, index) => {
              return <Row key={'row_' + index} columns={displayColumns} row={row} 
                checkBoxColumnKey={checkBoxColumnKey} showCheckBox={showCheckBox} rowIndex={index}
                onCheckBoxToggle={this.onCheckBoxToggled} />;
            })}

            <div style={{ height: bottomHeight + 'px' }}></div>
          </div>
        </div>
      </div>
    );
  }
}
