
import * as _ from 'lodash';
import * as React from 'react';

interface ICustomDropDownFilterProps {
  options: string[];
  onFilterChange: any;
  colName: string;
}


export class CustomDropDownFilter extends React.Component<ICustomDropDownFilterProps, void>  {
  constructor(props: ICustomDropDownFilterProps) {
    super(props);
    this.onDropDownchange = this.onDropDownchange.bind(this);
  }
  onDropDownchange(e: any) {
    this.props.onFilterChange(this.props.colName, e.target.value);
  }
  render() {
    return (
      <select name={this.props.colName} onChange={this.onDropDownchange} >
        <option value=''>Select one</option>
        {
          _.map(this.props.options, (option: string) => {
            return <option key={option} value={option}>{option}</option>;
          })
        }
      </select>);
  }
}

