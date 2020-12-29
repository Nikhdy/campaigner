import * as React from 'react';
import { Field } from './field';
import * as _ from 'lodash';

export class AutoComplete extends Field {
  handleChange=(e: any)=> {
    if (this.props.onChange) {
      this.props.onChange(e.target.name, e.target.value, this.state.value);
    }
    this.context.onChange(e);
  }
  setValue=(value, name)=>{
    return ()=> {
        const e = {target:{name:name, value: value}}
        this.handleChange(e);
    }
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
  getOptions(){
    return _.filter(this.props.options,(option)=> _.includes(option.name, this.state.value));
  }
  render() {
    const { name, label, placeholder, disabled, options = [], popuptext, className } = this.props;
    const { onFocus, onBlur } = this.context;
    const { value, error, touched } = this.state;
    const filteredOptions = this.getOptions();
    const id = 'id_' + name;
    return <div className={className + ' form-group autocomplete ' + (touched && error && 'has-error')}>
      {label &&
        <label htmlFor={id}> {label}
        </label>
      }
      <input
        className='form-control'
        name={name}
        id={id}
        value={value as string}
        onChange={this.handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
      <div className="auto-dropdown">
          {_.map(filteredOptions, (opts)=><div className="auto-list-item" onClick={this.setValue(opts.name, name)}>{opts.name}</div>)}
      </div>
      {touched && error && <div className='text-danger'> {error} </div>}
    </div>
  }

}