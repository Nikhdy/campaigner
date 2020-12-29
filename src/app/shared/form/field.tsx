
import * as React from 'react';
import * as PropTypes from 'prop-types'

const formFieldContextTypes = {
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  fields: PropTypes.object,
  initializeFieldState: PropTypes.func
};

export class Field extends React.Component<Form.IFieldProps, Form.IFieldState> {
  
  static contextTypes = formFieldContextTypes;
  constructor(props: Form.IFieldProps, context: Form.IFormFieldContextTypes) {
    super(props, context);
    this.state = {
      value: '',
      error: '',
      touched: false,
    };
  }
  componentDidMount() {
    this.context.initializeFieldState(this.props.name, this.props.initialValue);
  }
  
  componentWillReceiveProps(nextProps: Form.IFieldProps, nextContext: Form.IFormFieldContextTypes) {
    const fieldObj = nextContext.fields[this.props.name];
    this.setState({
      value: fieldObj.value,
      error: fieldObj.error,
      touched: fieldObj.touched
    });
  }
}

