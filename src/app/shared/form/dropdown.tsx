import * as React from 'react';
import { Field } from './field';

export class Dropdown extends Field {

  handleChange(e: any) {
    if (this.props.onChange) {
      this.props.onChange(e.target.name, e.target.value, this.state.value);
    }
    this.context.onChange(e);
  }
  shouldComponentUpdate(nextProps: Form.IFieldProps, nextState: Form.IFieldState) {
    if (this.props.options && nextProps.options) {
      return (this.props.options.length !== nextProps.options.length) ||
        (this.state.value !== nextState.value) ||
        (this.state.error !== nextState.error);
    } else {
      return false;
    }
  }

  render() {
    const { name, label, placeholder, disabled, options = [], popuptext, className } = this.props;
    const { onFocus, onBlur } = this.context;
    const { value, error, touched } = this.state;
    const id = 'id_' + name;
    return (
      <div className={className + ' form-group ' + (touched && error && 'has-error')}>
        {label &&
          <label htmlFor={id}> {label}
          </label>
        }
        <select
          className='form-control'
          name={name}
          id={id}
          value={value as string}
          onChange={this.handleChange.bind(this)}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}>
          <option value='' disabled style={{ display: 'none' }}>{placeholder}</option>
          {
            options.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)
          }
        </select>
        {touched && error && <div className='text-danger'> {error} </div>}
      </div>
    );
  }
}
