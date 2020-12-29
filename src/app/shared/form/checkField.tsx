import * as React from 'react';
import { Field } from './field';

export class Check extends Field {
  
  handleChange(e: any) {
    if (this.props.onChange) {
      this.props.onChange(e.target.name, e.target.checked, this.state.value);
    }
    this.context.onChange(e);
  }
  shouldComponentUpdate(nextProps: Form.IFieldProps, nextState: Form.IFieldState) {
    return (this.state.value !== nextState.value) || (this.state.error !== nextState.error);
  }


  render() {
    const { onFocus, onBlur } = this.context;
    const { name, type, label, disabled, className } = this.props;
    const { value, error, touched } = this.state;
    const id = 'id_' + name;
    return (
      <div className='checkbox'>
        <label className={className}>
          <input
            type={type}
            id={id}
            name={name}
            checked={value as boolean}
            onChange={this.handleChange.bind(this)}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled} />
          <div className='slider round'></div>
          {label && <label htmlFor={id}> {label} </label>}
        </label>
        {touched && error && <span className='text-danger'>{error}</span>}
      </div>
    );
  }
}
