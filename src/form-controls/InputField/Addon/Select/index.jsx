import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Select.scss';

const Select = ({ form, name, options, addonType }) => {
  const { register, setValue } = form;
  const selectedValue = form.watch(name);
  const selectedOption = options.find((x) => x.value === selectedValue) || options[0];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    register({ name });
    setValue(name, selectedValue);
  }, [register, setValue, name, selectedValue]);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const handleOptionChange = (option) => {
    setValue(name, option.value);
  };

  return (
    <InputGroupButtonDropdown className="dropdown" addonType={addonType} isOpen={dropdownOpen} toggle={toggleDropDown}>
      <DropdownToggle caret className="addon-button">
        {selectedOption.label}
      </DropdownToggle>

      <DropdownMenu>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            className={classnames({
              selected: option.value === selectedValue,
            })}
            onClick={() => handleOptionChange(option)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </InputGroupButtonDropdown>
  );
};

Select.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  addonType: PropTypes.string,
  options: PropTypes.array,
};

Select.defaultProps = {
  addonType: 'prepend',
  options: [],
};

export default Select;
