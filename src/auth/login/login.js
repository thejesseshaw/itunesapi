import React from 'react';
import './login.css';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Redirect} from 'react-router-dom';

export class Login extends React.Component {

    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        if (this.props.submitSucceeded === true) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <section>
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username" className="form-label">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password" className="form-label">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
            <section className="demo-credentials">
                <p>If you would like to demo this application, login with the following credentials</p>
                <p className="demo-username"><span className="credentials-label">Username:</span> demo</p>
                <p className="demo-password"><span className="credentials-label">Password: </span> passw0rd2018</p>
            </section>
            </section>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);
