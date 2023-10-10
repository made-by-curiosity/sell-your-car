import { useEffect, useRef, useState } from 'react';
import {
  Option,
  OptionsContainer,
  OptionsOverflowWrapper,
  OriginalRadioInput,
  SelectContainer,
  SelectOptionsWrapper,
  SelectedItem,
} from './CustomSelect.styled';
import { carBrands } from 'utils/carBrands';
import {
  DEFAULT_ACTIVE_OPTION,
  KEY_CODES_FOR_OPTION_SELECT,
  KEY_CODES_FOR_SELECT_OPEN,
} from 'utils/constants';

export const CustomSelect = ({ options = carBrands, name = 'car-brands' }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeOption, setActiveOption] = useState(DEFAULT_ACTIVE_OPTION);

  const selectedContainer = useRef();

  useEffect(() => {
    if (activeOption === DEFAULT_ACTIVE_OPTION) {
      return;
    }

    selectedContainer.current.focus();
  }, [activeOption]);

  const handleSelectClose = e => {
    const isClickable = e.relatedTarget !== null;
    const isRadioInput = e.relatedTarget?.type === 'radio';
    const hasSameName = e.relatedTarget?.name === name;

    if (!isClickable || !isRadioInput || !hasSameName) {
      setIsActive(isActive => !isActive);
    }
  };

  const handleSelectClick = e => {
    if (KEY_CODES_FOR_SELECT_OPEN.includes(e.code) || e.type === 'mousedown') {
      e.preventDefault();
      setIsActive(isActive => !isActive);
    }
  };

  const handleOptionKeyboardSelect = e => {
    if (KEY_CODES_FOR_OPTION_SELECT.includes(e.code)) {
      setActiveOption(e.target.value);
      setIsActive(isActive => !isActive);
    }
  };

  const handleOptionMouseSelect = e => {
    setActiveOption(e.target.innerText);
    setIsActive(isActive => !isActive);
  };

  return (
    <SelectContainer>
      <SelectedItem
        type="text"
        value={activeOption}
        readOnly
        ref={selectedContainer}
        onKeyDown={handleSelectClick}
        onMouseDown={handleSelectClick}
      />
      {isActive && (
        <SelectOptionsWrapper>
          <OptionsOverflowWrapper>
            <OptionsContainer>
              {options.map((option, idx) => (
                <li key={option}>
                  <Option
                    htmlFor={option}
                    onMouseDown={handleOptionMouseSelect}
                  >
                    <OriginalRadioInput
                      type="radio"
                      name={name}
                      value={option}
                      id={option}
                      defaultChecked={option === activeOption || idx === 0}
                      autoFocus={option === activeOption || idx === 0}
                      onKeyDown={handleOptionKeyboardSelect}
                      onBlur={handleSelectClose}
                    />
                    <div>{option}</div>
                  </Option>
                </li>
              ))}
            </OptionsContainer>
          </OptionsOverflowWrapper>
        </SelectOptionsWrapper>
      )}
    </SelectContainer>
  );
};
