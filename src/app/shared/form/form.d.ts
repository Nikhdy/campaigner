declare namespace Form {

  interface IFieldProps {
    name: string;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    initialValue?: any;
    className?: string;
    icon?: string;
    popuptext?: string;

    prepend?: string;

    // input field
    type?: 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'date' | 'datetime';

    // dropdown field
    options?: { id: string | number, name: string }[];
    onChange?: (fieldName: string, newValue: any, oldValue: any) => any;

  }

  interface IFieldState {
    value: string | boolean | number | any;
    error: string;
    touched: boolean;
  }

  interface IFormFieldState extends IFieldState {
    state_type: 'field';
  }

  interface IFormUpdateFieldState {
    value?: string;
    error?: string;
    touched?: boolean;
  }

  interface IFormProps {
    id?: string;
    inverted?: boolean;
    className?: string;
    validateDefs: (values: IFormValues) => IFormErrors;
    onSubmit: (values: IFormValues, resetFormFn: () => any, e: any) => any;

    initialValues?: {
      [fieldName: string]: any
    };
    
    onFormChange?: (values: IFormValues) => any;
  }

  interface IFormValues {
    [fieldName: string]: any;
  }

  interface IFormErrors {
    [fieldName: string]: string;
  }

  interface IFormFieldContextTypes {
    onFocus: Function;
    onChange: Function;
    onBlur: Function;
    fields: any;
    initializeFieldState: Function;
  }
}