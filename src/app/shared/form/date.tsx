import * as _ from 'lodash';
import * as React from 'react';
import { Field } from './field';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class DateTimePicker extends Field {

  handleChange(value: any) {
    const e: any = { target: { name: this.props.name, value } };
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.state.value);
    }
    this.context.onChange(e);
  }

  shouldComponentUpdate(nextProps: Form.IFieldProps, nextState: Form.IFieldState) {
    return (this.state.value !== nextState.value) || (this.state.error !== nextState.error);
  }

  render() {
    const { onFocus, onBlur } = this.context;
    const { name, type, placeholder, label, disabled, popuptext, className } = this.props;
    const { error, touched } = this.state;
    let { value } = this.state;
    const id = 'id_' + name;
    if (_.isString(value)) {
      value = null;
    }
    return (
      <div className={className + ' form-group ' + (touched && error && 'has-error')}>
        {label &&
          <label htmlFor={id}> {label}
          </label>
        }
        <DatePicker
          className='form-control'
          id={id}
          name={name}
          placeholderText={placeholder}
          onChange={this.handleChange.bind(this)}
          onFocus={onFocus}
          onBlur={onBlur}
          showTimeSelect={type === 'date' ? false : true}
          disabled={disabled}
          timeFormat='hh:mm A'
          dateFormat={type === 'date' ? 'LL' : 'LLL'}
          popperPlacement='bottom-start'
          selected={value as any} />
        {touched && error && <div className='text-danger'> {error} </div>}
      </div>
    );
  }
}
