import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userRegister } from 'app/stores/account/account.action';

import { Form } from 'app/shared/form';
import { Input } from 'app/shared/form/field-types';


interface IRegisterProps {
  userRegister: (user: Account.IRegisterUser) => void;
}

class Register extends React.Component<IRegisterProps, {}> {
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(values: Form.IFormValues) {
    // api call to Server 
    this.props.userRegister({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      orgnization: values.organization,
      password: values.password,

    });
  }

  validateDefs(values: Form.IFormValues) {
    let errors: Form.IFormErrors = {};
    if (!values['email']) {
      errors['email'] = 'Email is required'
    }
    if (!values['password']) {
      errors['password'] = 'Password is required';
    }

    if (!values['confirmPassword']) {
      errors['confirmPassword'] = 'Please enter your password again';
    } else if (values['password'] && values['password'] != values['confirmPassword']) {
      errors['confirmPassword'] = 'The entered password does not match';
    }

    return errors;
  }

  render() {
    return <div className='auth-box-w wider'>
      <div className='logo-w'><img alt='' src={require('app/assets/img/logo-big.png')} />
      </div>
      <h4 className='auth-header'>Create new account</h4>
      <Form onSubmit={this.onRegister} validateDefs={this.validateDefs}>
        <Input name="email"
          placeholder='Enter your email'
          icon="pre-icon os-icon os-icon-email-2-at2"
          label="Email"
          type="text" />

        <Input name="organization"
          placeholder='Enter your organization name'
          icon="pre-icon fa fa-building-o"
          label="Organization"
          type="text" />

        <div className="row">
          <div className="col-sm-6">
            <Input name="firstName"
              placeholder='Enter your first name'
              icon="pre-icon os-icon os-icon-user"
              label="First Name"
              type="text" />
          </div>
          <div className="col-sm-6">
            <Input name="lastname"
              placeholder='Enter your last name'
              label="Last Name" type="text" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <Input name="password"
              placeholder='Enter your password'
              icon="pre-icon os-icon os-icon-fingerprint"
              label="Password"
              type="password" />
          </div>
          <div className="col-sm-6">
            <Input name="confirmPassword"
              placeholder='Enter your password again'
              label="Confirm Password" type="password" />
          </div>
        </div>

        <div className="buttons-w">
          <button className="btn btn-primary">Register Now</button>
          <div className="form-check-inline">
          <label className="form-check-label"> Already have an account ? <Link to="">Login Now!</Link></label>
          </div>
        </div>
      </Form>
    </div >
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userRegister: (user: Account.IRegisterUser) => dispatch(userRegister(user)),
  }
}

export const RegisterPage = connect(null, mapDispatchToProps)(Register)