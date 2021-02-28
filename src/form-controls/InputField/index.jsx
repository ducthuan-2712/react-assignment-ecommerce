import PropTypes from 'prop-types';
import React from 'react';
import { Controller, ErrorMessage } from 'react-hook-form';
import { FormFeedback, FormGroup, FormText, Input, Label, InputGroup } from 'reactstrap';
import PrependSelect from './Addon/Select';
import './InputField.scss';

function InputField(props) {
  const {
    hiddenField,
    form,
    name,
    label,
    placeholder,
    type,
    disabled,
    readOnly,
    helpText,
    prependSelectOptions,
  } = props;

  return (
    <FormGroup className="form-group" style={{ display: hiddenField ? 'none' : '' }}>
      {label && <Label>{label}</Label>}

      <InputGroup className={!!form.errors[name] ? 'is-invalid' : ''}>
        {prependSelectOptions.length > 0 && (
          <PrependSelect name={`${name}_option`} form={form} options={prependSelectOptions} addonType="prepend" />
        )}

        <Controller
          name={name}
          as={Input}
          control={form.control}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          invalid={!!form.errors[name]}
          readOnly={readOnly}
        />
      </InputGroup>

      {helpText && <FormText>{helpText}</FormText>}
      <ErrorMessage errors={form.errors} name={name} as={FormFeedback} />
    </FormGroup>
  );
}

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,

  type: PropTypes.string,
  parse: PropTypes.func,
  helpText: PropTypes.string,
  prependSelectOptions: PropTypes.array,
};

InputField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  readOnly: false,

  type: 'text',
  parse: null,
  helpText: '',
  prependSelectOptions: [],
};

export default InputField;
