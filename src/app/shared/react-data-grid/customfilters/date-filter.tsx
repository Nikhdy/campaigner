import * as React from 'react';
// import * as _ from 'lodash';

interface IDateFilterProps {
  onFilterChange: any;
  colName: string;
}
export class CustomDateFilter extends React.Component<IDateFilterProps, void>  {
  constructor(props: IDateFilterProps) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
  }
  // add date component
  onDateChange(e: any) {
    this.props.onFilterChange(this.props.colName, e.target.value);
  }
  render() {
    return (
      <select  name='gender' onChange={this.onDateChange} >
        <option value=''>Select one</option>
      </select>);
  }
}