import * as React from 'react';
import { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from 'app/stores/account/account.action';

import { Form } from 'app/shared/form';
import { Loader } from 'app/shared/loader';
import { Input } from 'app/shared/form/field-types';

interface ILoginProps {
  userLogin: (user: Account.ILoginUser) => void;
  loading: boolean;
}

const Login: FC<ILoginProps> = (props) => {

  const onLogin = (values: Form.IFormValues) => {
    // api call to Server 
    props.userLogin({
      email: values.email,
      password: values.password,
    });
  }

  const validateDefs = (values: Form.IFormValues) => {
    let errors: Form.IFormErrors = {};
    if (!values['email']) {
      errors['email'] = 'Email is required'
    }
    if (!values['password']) {
      errors['password'] = 'Password is required';
    }
    return errors;
  };

  // const { loading } = props;
  const loading = false;
  return <div className='auth-box-w wide'>
    <div className='logo-w'>
      <img alt='' src={require('app/assets/img/logo-big.png')} />
    </div>
    <h4 className='auth-header'>Login Form</h4>
    <Form onSubmit={onLogin} validateDefs={validateDefs}>
      <Input name="email"
        placeholder='Enter your Email'
        icon="pre-icon os-icon os-icon-user-male-circle"
        label="Email"
        type="text" />

      <Input name="password"
        placeholder='Enter your password'
        icon="pre-icon os-icon os-icon-fingerprint"
        label="Password"
        type="password" />

      <div className='buttons-w'>
        <button className='btn btn-primary' disabled={loading}>{loading ? <Loader /> : 'Log me in'}</button>
        <div className="form-check-inline">
          <label className="form-check-label"><Link to="/forgotPassword">Forgot Password ?</Link></label>
        </div>
      </div>
    </Form>
  </div>
}

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (user: Account.ILoginUser) => dispatch(userLogin(user))
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.accountReducer.loading,
  };
};
export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)