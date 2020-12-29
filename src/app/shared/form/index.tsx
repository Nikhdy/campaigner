import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types'

const formFieldContextTypes = {
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  fields: PropTypes.object,
  initializeFieldState: PropTypes.func
};


export class Form extends React.Component<Form.IFormProps, any> {

  static childContextTypes = formFieldContextTypes;

  constructor(props: Form.IFormProps) {
    super(props);
    
    this.state = {
      formInitialized: false
    };
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.getFormValues = this.getFormValues.bind(this);
    this.initializeFieldState = this.initializeFieldState.bind(this);
    this.updateFieldState = this.updateFieldState.bind(this);
    this.getFields = this.getFields.bind(this);
    this.markAllFieldsAsTouched = this.markAllFieldsAsTouched.bind(this);
    this.validateField = this.validateField.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  getChildContext(): Form.IFormFieldContextTypes {
    return {
      onFocus: this.onFocus,
      onChange: this.onChange,
      onBlur: this.onBlur,
      fields: this.getFields(),
      initializeFieldState: this.initializeFieldState
    };
  }

  getFields(): { [fieldName: string]: Form.IFormFieldState; } {
    const fields: { [fieldName: string]: Form.IFormFieldState; } = {};
    _.forEach(this.state, (val: any, name) => {
      if (name && _.isObject(val) && (val.state_type === 'field')) {
        fields[name] = val;
      }
    });
    return fields;
  }

  updateFieldState(fieldName: string, updateFieldProps: Form.IFormUpdateFieldState, callback?: () => any) {
    const fields = this.getFields();
    const fieldObj = fields[fieldName];
    this.setState(
      {
        [fieldName]: {
          ...fieldObj,
          ...updateFieldProps
        }
      },
      callback
    );
  }

  initializeFieldState(fieldName: string, fieldInitialValue?: any) {
    const fieldObj: Form.IFormFieldState = {
      state_type: 'field',
      value: _.isUndefined(fieldInitialValue) ? '' : fieldInitialValue,
      error: '',
      touched: false,
    };
    this.setState({ [fieldName]: fieldObj },
      () => {
        if (this.props.onFormChange) {
          this.props.onFormChange(this.getFields());
        }
      });
  }

  // when submitting form, unless fields are 'touched', errors won't show up;
  // to prevent this, we should markAllFieldsAsTouched
  markAllFieldsAsTouched(callback: () => any) {
    const fields = this.getFields();
    _.forEach(fields, (fieldObj, fieldName) => {
      if (fieldName) {
        fields[fieldName] = { ...fieldObj, touched: true };
      }
    });
    this.setState(fields, callback);
  }

  markFieldAsTouched(fieldName: string, callback?: () => any) {
    const fields = this.getFields();
    const fieldObj = fields[fieldName];
    if (!fieldObj.touched) {
      this.updateFieldState(fieldName, { touched: true }, callback);
    }
  }

  resetForm() {
    const fields = this.getFields();
    _.forEach(fields, (fieldObj, fieldName) => {
      if (fieldName) {
        this.initializeFieldState(fieldName);
      }
    });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.markAllFieldsAsTouched(() => {
      const isValid = this.validateForm();
      if (isValid) {
        this.props.onSubmit(this.getFormValues(), this.resetForm, e);
      }
    });
  }


  getFormValues(): Form.IFormValues {
    const fields = this.getFields();
    const values: Form.IFormValues = {};
    _.forEach(fields, (fieldObj, fieldName) => {
      if (fieldName) {
        values[fieldName] = fieldObj.value;
      }
    });
    return values;
  }


  validateField(fieldName: string) {
    const values = this.getFormValues();
    const errors = this.props.validateDefs(values);
    const fieldError = errors[fieldName];
    if (fieldError) {
      this.updateFieldState(fieldName, {
        error: fieldError
      });
    }
  }

  validateForm() {
    const fields = this.getFields();
    const values = this.getFormValues();
    let formHasError = false;
    const errors = this.props.validateDefs(values);
    _.forEach(errors, (fieldError, fieldName) => {
      if (fieldName && fields[fieldName]) {
        if (fieldError) {
          formHasError = true;
        }
        this.updateFieldState(fieldName, {
          error: fieldError
        });
      }
    });
    return !formHasError;
  }

  getValueFromEvent(e: any) {
    switch (e.target.type) {
      case 'checkbox':
        return e.target.checked;
      case 'number':
        const floatVal = parseFloat(e.target.value);
        return floatVal;
      default:
        return e.target.value;
    }
  }

  onChange(e: any) {
    const fieldName = e.target.name;
    const newValue = this.getValueFromEvent(e);
    this.updateFieldState(fieldName, {
        value: newValue,
        error: ''
      }, () => {
        this.validateField(fieldName);

        if (this.props.onFormChange) {
          this.props.onFormChange(this.getFormValues());
        }
      });
  }

  onBlur(e: any) {
    const fieldName = e.target.name;
    this.markFieldAsTouched(fieldName);
    this.validateField(fieldName);
  }

  onFocus(e: any) {
    const fieldName = e.target.name;
    this.markFieldAsTouched(fieldName);
  }

  componentWillReceiveProps(nextProps: Form.IFormProps) {
    const initialValues = nextProps.initialValues;
    if (!this.state.formInitialized && initialValues && _.isObject(initialValues) && !_.isEmpty(initialValues)) {
      const fields = this.getFields();
      _.forEach(initialValues, (val, fieldName) => {
        if (fieldName && fields[fieldName]) {
          this.updateFieldState(fieldName,
            {
              value: val,
              error: ''
            },
            () => {
              this.validateField(fieldName);
            });
        }
      });
      this.setState({ formInitialized: true });
    }
  }

  render() {
    const {className = ''} = this.props;
    return (
      <form id={this.props.id} className={className} onSubmit={this.handleSubmit} noValidate>
        {this.props.children}
      </form>
    );
  }
}
