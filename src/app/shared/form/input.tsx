import * as React from 'react';
import { Field } from './field';

export class Input extends Field {

  handleChange(e: any) {
    if (this.props.onChange) {
      this.props.onChange(e.target.name, e.target.value, this.state.value);
    }
    this.context.onChange(e);
  }

  shouldComponentUpdate(nextProps: Form.IFieldProps, nextState: Form.IFieldState) {
    return (this.state.value !== nextState.value) || (this.state.error !== nextState.error);
  }

  render() {
    const { onFocus, onBlur } = this.context;
    const { name, type, placeholder, label, disabled, popuptext, className, icon, prepend } = this.props;
    const { value, error, touched } = this.state;
    const id = 'id_' + name;

    return (
      <div className={className + ' form-group ' + (touched && error && 'has-error')}>
        {label &&
          <label htmlFor={id}> {label}
          </label>
        }
        {prepend && <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">{prepend}</div>
          </div>
          <input
            id={id}
            name={name}
            type={type}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value as any}
            className='form-control'
            placeholder={placeholder}
            onChange={this.handleChange.bind(this)}
            disabled={disabled} />
        </div>}
        {!prepend && <input
          id={id}
          name={name}
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value as any}
          className='form-control'
          placeholder={placeholder}
          onChange={this.handleChange.bind(this)}
          disabled={disabled} />}
        {icon && <div className={icon + ' ' + (touched && error && 'bot-165')} ></div>}
        {touched && error && <div className='text-danger'> {error} </div>}
      </div>
    );
  }
}

