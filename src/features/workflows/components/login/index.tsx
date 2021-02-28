import Joi from '@hapi/joi';
import InputField from 'form-controls/InputField';
import PasswordField from 'form-controls/PasswordField';
import useValidationResolver from 'hooks/useValidationResolver';
import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from 'react-hook-form-devtools';
import { Button, Form, FormGroup } from 'reactstrap';
import './style.scss';
import { TypeRouteList } from './login.d';

const LoginForm: React.FC<TypeRouteList> = ({ onSubmit }) => {
  const schemaKeys = {
    login: Joi.string().min(3).max(100).required().messages({
      'string.min': 'Username must be at least 3 characters.',
      'string.max': 'Username too long.',
    }),

    password: Joi.string().min(6).required().messages({
      'string.empty': 'Please enter a password.',
      'string.min': 'Password must be at least 6 characters.',
    }),

    rememberMe: Joi.bool().valid(true).messages({
      'any.only': 'This field is required.',
    }),
  };
  const { validationResolver, validationSchema } = useValidationResolver(schemaKeys);
  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      login: '',
      password: '',
      rememberMe: true,
      gender: 'male',
      city: null,
      birthday: null,
    },
    validationResolver,
    validationContext: { validationSchema },
  });

  const handleFormSubmit = (values: Object) => {
    if (onSubmit) onSubmit(values);
  };

  return (
    <div className="login-form">
      <div className="login-form__box">
        <Form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <InputField name="login" label="Email or Phone" form={form} />
          <PasswordField name="password" label="Password" form={form} />

          <FormGroup className="form__actions">
            <Button block color="primary">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>

      {/* Use true/false to show/hide devtool */}
      {false && <DevTool control={form.control} />}
    </div>
  );
}

export default LoginForm;
