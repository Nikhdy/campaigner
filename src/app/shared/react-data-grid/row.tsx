import * as _ from 'lodash';
import * as React from 'react';

interface IRowProps {
  columns: ReactDataGrid.IColumn[];
  row: any;
  checkBoxColumnKey?: string;
  showCheckBox?: boolean;
  // this is only of the display rows
  rowIndex: number;
  onCheckBoxToggle?: any;
}
export class Row extends React.PureComponent<IRowProps, {}> {
  constructor(props: IRowProps) {
    super(props);
    this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    this.getFixedDivOffsetWidth = this.getFixedDivOffsetWidth.bind(this);
  }
  onCheckBoxClick(rowId: number | string, rowIndex: number) {
    return (e: any) => {
      if (this.props.onCheckBoxToggle) {
        this.props.onCheckBoxToggle(e, rowId, rowIndex);
      }
    };
  }
  getFixedDivOffsetWidth(columns: ReactDataGrid.IColumn[]) {
    //const xOffset = this.props.xoffset;
    // const fixedColumns = _.filter(columns, (column) => { return column.is_fixed; });
    const divWidths: number[] = [];
    let width = 0;
    _.forEach(columns, (column, index) => {
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
      if (column.is_fixed) {
        divWidths.push(width );
      } else {
        divWidths.push(width);
      }
    });
    return divWidths;
  }

  render() {
    const { columns, row, showCheckBox, checkBoxColumnKey, rowIndex } = this.props;
    const fixedDivWidth = this.getFixedDivOffsetWidth(columns);
    return (
      <div className='row' key={row.id} >
        {_.map(columns, (col, index) => {
          return<div className={'row_cell' + (col.is_fixed ? ' sticky_column' : '')}
            key={ col.fieldName + '_cell' + index}
            style={{
              minWidth: (col.width ? col.width : 'auto'), maxWidth: (col.width ? col.width : 'auto'),
              left: (col.is_fixed ? fixedDivWidth[index] + 'px' : '')
            }}>{showCheckBox && checkBoxColumnKey && (checkBoxColumnKey === col.fieldName) ?
              <input type='checkbox' name={'row_checkbox' + rowIndex} checked={row.checkBoxSelected}
                onClick={this.onCheckBoxClick(row[checkBoxColumnKey], rowIndex)} /> :
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                {col.formatter ? col.formatter({ value: row[col.fieldName], row }) :
                  row[col.fieldName]}</div>}</div>;
        })}
      </div>
    );
  }
}
