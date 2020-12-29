import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onResetPassword } from 'app/stores/account/account.action';


import { Form } from 'app/shared/form';
import { Loader } from 'app/shared/loader';
import { Input } from 'app/shared/form/field-types';

interface IResetPasswordProps {
  loading: boolean;
}

export class ResetPassword extends React.Component<IResetPasswordProps, {}> {

  onResetPassword(values: Form.IFormValues) { }

  validateDefs(values: Form.IFormValues) {
    let errors: Form.IFormErrors = {};
    if (!values['email']) {
      errors['email'] = 'Email is required'
    }
    if (!values['password']) {
      errors['password'] = 'Password is required';
    }
    return errors;
  }

  render() {
    const { loading } = this.props;
    return <div className='auth-box-w wide'>
      <div className='logo-w'>
        <img alt='' src={require('app/assets/img/logo-big.png')} />
      </div>
      <h4 className='auth-header'>Reset Password</h4>
      <Form onSubmit={this.onResetPassword} validateDefs={this.validateDefs}>
        <Input name="email"
          placeholder='Enter your Email'
          icon="pre-icon os-icon os-icon-user-male-circle"
          label="Email"
          type="text" />

        <div className='buttons-w'>
          <button className='btn btn-primary' disabled={loading}>
            {loading ? <Loader /> : 'Reset Password'}
          </button>
        </div>
      </Form>
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResetPassword: (email: string) => dispatch(onResetPassword(email)),
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.accountReducer.loading,
  };
};
export const ResetPasswordPage = connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
