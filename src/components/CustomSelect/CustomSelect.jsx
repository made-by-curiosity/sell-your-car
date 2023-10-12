import { useEffect, useRef, useState } from 'react';
import {
  Icon,
  Option,
  OptionsContainer,
  OptionsOverflowWrapper,
  OriginalRadioInput,
  PriceLabel,
  SelectContainer,
  SelectOptionsWrapper,
  SelectedItem,
  SelectedItemWrapper,
} from './CustomSelect.styled';
import {
  DEFAULT_ACTIVE_OPTION,
  KEY_CODES_FOR_OPTION_SELECT,
  KEY_CODES_FOR_SELECT_OPEN,
} from 'utils/constants';

import icon from 'assets/icons/svg-sprite.svg';
import { scrollOnFocus } from 'utils/scrollOnFocus';

export const CustomSelect = ({
  options = [],
  name,
  defaultText = DEFAULT_ACTIVE_OPTION,
  activeOption,
  setActiveOption,
  width,
  contentStyles = {},
  label,
  currency = '',
}) => {
  const [isActive, setIsActive] = useState(false);

  const selectedContainer = useRef();
  const optionsContainer = useRef();

  useEffect(() => {
    if (activeOption === '') {
      return;
    }

    selectedContainer.current.focus();
  }, [activeOption, defaultText]);

  const toggleOptionsContainer = () => {
    setIsActive(isActive => !isActive);
  };

  const handleSelectClose = e => {
    const isClickable = e.relatedTarget !== null;
    const isRadioInput = e.relatedTarget?.type === 'radio';
    const hasSameName = e.relatedTarget?.name === name;

    if (!isClickable || !isRadioInput || !hasSameName) {
      toggleOptionsContainer();
    }
  };

  const handleSelectClick = e => {
    if (KEY_CODES_FOR_SELECT_OPEN.includes(e.code) || e.type === 'mousedown') {
      e.preventDefault();
      toggleOptionsContainer();
    }
  };

  const handleOptionKeyboardSelect = e => {
    if (KEY_CODES_FOR_OPTION_SELECT.includes(e.code)) {
      e.preventDefault();
      setActiveOption(e.target.value);
      toggleOptionsContainer();
    }
  };

  const handleOptionMouseSelect = e => {
    setActiveOption(e.target.innerText);
    toggleOptionsContainer();
  };

  const handleOptionFocus = e => {
    scrollOnFocus(
      e.target.parentElement.parentElement,
      optionsContainer.current
    );
  };

  return (
    <SelectContainer width={width}>
      <SelectedItemWrapper onMouseDown={handleSelectClick}>
        {label && <PriceLabel>{label}</PriceLabel>}
        <SelectedItem
          type="text"
          value={
            !!activeOption ? activeOption + currency : defaultText + currency
          }
          readOnly
          ref={selectedContainer}
          onKeyDown={handleSelectClick}
          contentStyles={contentStyles}
        />
        <Icon isActive={isActive}>
          <use href={`${icon}#icon-down-arrow`} />
        </Icon>
      </SelectedItemWrapper>
      {isActive && (
        <SelectOptionsWrapper>
          <OptionsOverflowWrapper ref={optionsContainer}>
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
                      value={option.toString()}
                      id={option}
                      defaultChecked={
                        option.toString() === activeOption || idx === 0
                      }
                      autoFocus={
                        option.toString() === activeOption || idx === 0
                      }
                      onKeyDown={handleOptionKeyboardSelect}
                      onBlur={handleSelectClose}
                      onFocus={handleOptionFocus}
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
