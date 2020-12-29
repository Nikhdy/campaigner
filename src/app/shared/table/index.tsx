import * as React from 'react';

interface IColumns {
    formatter?: (value: any, row: any) => any;
    displayName: string;
    name: string;
    showHeader: boolean;
    key: string
    className?: string;
    rowClass?: string;
}

interface IVisualTableProps {
    columns: IColumns[];
    rows: any[]; 
    onRowClick?:(row: any)=> ()=> void; 
}

export class VisualTable extends React.Component<IVisualTableProps, {}>{
    render() {
        const { columns, rows , onRowClick} = this.props;
        return <div className="table-responsive">
            <table className="table table-padded">
                <thead>
                    <tr>
                        {columns.map(col => <th key={col.name} className={col.className? col.className:''}>{col.showHeader ? col.displayName : ''}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => <tr onClick={onRowClick && onRowClick(row)}>
                        {columns.map(col => <td key={col.name+index} className={col.rowClass? col.rowClass:''}>{col.formatter ? col.formatter(row[col.key], row) : row[col.key]}</td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}