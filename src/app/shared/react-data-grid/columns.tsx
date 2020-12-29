import * as React from 'react';

interface IColumnProps {
    col: ReactDataGrid.IColumn;
    divWidth: number;
    showCheckBox: boolean;
    checkBoxColumnKey: string;
    isHeaderChecked: boolean;
    sortKey: string;
    iconclass: string;
    onTableClick: (val: string) => any;
    onHeaderCheckBoxToggled: (e: any) => void;
    onDrag: (fieldName: string, initWidth: number, resize: number) => void;
}

export class Column extends React.PureComponent<IColumnProps, {}> {
    startX: number | null = null;
    startWidth: number | null = null;
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    onMouseDown(e: any) {
        e.stopPropagation();
        e.preventDefault();
        this.startX = e.clientX;
        this.startWidth = this.props.col.width || 200;
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }
    onMouseUp(e: any) {
        e.stopPropagation();
        e.preventDefault();
        this.startX = null;
        this.startWidth = null;
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
    onMouseMove(e: any) {
        e.stopPropagation();
        e.preventDefault();
        const extraWidth = e.clientX - this.startX;
        this.props.onDrag(this.props.col.fieldName, this.startWidth, extraWidth);
    }

    render() {
        const { col, divWidth, showCheckBox, checkBoxColumnKey,
            onTableClick, onHeaderCheckBoxToggled, isHeaderChecked,
            sortKey, iconclass } = this.props;
        return <div className={'header_cell' + (!col.is_fixed ? ' fixed_column' : '')}
            style={{
                minWidth: (col.width ? col.width : 'auto'), left: divWidth + 'px',
                zIndex: (col.is_fixed ? 16 : 14)
            }}
            onClick={col.sortable ? onTableClick(col.fieldName) : () => { /*do nothing*/ }}>
            {showCheckBox && checkBoxColumnKey && (checkBoxColumnKey === col.fieldName) ?
                <input type='checkbox' name='select_all'
                    onClick={onHeaderCheckBoxToggled} checked={isHeaderChecked} /> : col.displayName}
            <i className={sortKey === col.fieldName ? iconclass : ''}></i>
            {!(showCheckBox && checkBoxColumnKey && (checkBoxColumnKey === col.fieldName)) &&
            <span className='col-resize' onMouseDown={this.onMouseDown}></span>}
        </div>;
    }
}
