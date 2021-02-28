import PropTypes from 'prop-types';
import React from 'react';
import { Controller, ErrorMessage } from 'react-hook-form';
import { CustomInput, FormFeedback, FormGroup } from 'reactstrap';

function CheckboxField(props) {
  const { form, name, label, disabled } = props;
  const hasError = !!form.errors[name];

  return (
    <FormGroup>
      <Controller
        name={name}
        as={CustomInput}
        control={form.control}
        onChange={([e]) => e.target.checked}
        id={name}
        type="checkbox"
        label={label}
        disabled={disabled}
        invalid={hasError}
        className={hasError ? 'is-invalid' : ''}
      />

      <ErrorMessage errors={form.errors} name={name} as={FormFeedback} />
    </FormGroup>
  );
}

CheckboxField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  disabled: PropTypes.bool,
};

CheckboxField.defaultProps = {
  label: '',
  disabled: false,
};

export default CheckboxField;
