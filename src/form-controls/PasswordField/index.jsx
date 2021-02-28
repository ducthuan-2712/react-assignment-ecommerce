import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller, ErrorMessage } from 'react-hook-form';
import { Button, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import './PasswordField.scss';

function PasswordField(props) {
  const { form, name, label, placeholder, disabled, helpText } = props;
  const [type, setType] = useState('password');

  const toggleType = () => {
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <FormGroup className="password-field">
      <div className="password-field__label">{label && <Label>{label}</Label>}</div>

      <InputGroup className={`${!!form.errors[name] ? 'is-invalid' : ''}`}>
        <Controller
          name={name}
          as={Input}
          control={form.control}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          invalid={!!form.errors[name]}
        />
        <InputGroupAddon addonType="append">
          <Button color="light" onClick={toggleType}>
            <i className={`material-icons ${type === 'text' ? 'green' : ''}`}>visibility</i>
          </Button>
        </InputGroupAddon>
      </InputGroup>

      {helpText && <FormText>{helpText}</FormText>}
      <ErrorMessage errors={form.errors} name={name} as={FormFeedback} />
    </FormGroup>
  );
}

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,

  type: PropTypes.string,
  parse: PropTypes.func,
  helpText: PropTypes.string,

  showForgotLink: PropTypes.bool,
};

PasswordField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,

  type: 'text',
  parse: null,
  helpText: '',

  showForgotLink: false,
};

export default PasswordField;
