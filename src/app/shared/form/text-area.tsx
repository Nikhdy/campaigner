import * as React from 'react';
import { Field } from './field';

export class TextArea extends Field {
  
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
      const { name, type, placeholder, label, disabled, popuptext } = this.props;
      const { value, error, touched } = this.state;
      const id = 'id_' + name;
  
      return (
        <div className={'field ' + (touched && error && 'error')}>
          { label && 
            <label htmlFor={id}> {label}  
             
            </label>
          }
          <textarea
            id={id}
            rows={5}
            placeholder={placeholder}
            name={name}
            value={value as any}
            onChange={this.handleChange.bind(this)}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled} />
          {touched && error && <div className='ui pointing red label'> {error} </div>}
        </div>
      );
    }
  }
