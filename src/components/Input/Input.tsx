import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasRef, HasClassName, AlignTypes, StatusTypes } from '../../types/props';

export interface InputProps extends HasRef, HasClassName {
  alignment?: AlignTypes;
  defaultValue?: string;
  getRef?: (instance: HTMLInputElement) => void;
  onChange?: () => {};
  placeholder?: string;
  status?: StatusTypes;
  type?: string;
  value?: string;
}

const Input = ({ alignment, status, getRef, className, getRootRef, ...restProps }: InputProps) => {
  return (
    <FormField
      className={classNames('Input', className, {
        [`Input--${alignment}`]: alignment
      })}
      status={status}
      getRootRef={getRootRef}
    >
      <input {...restProps} className="Input__el" ref={getRef} />
    </FormField>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,

  /**
   * Значение `verified` устарело и будет удалено в 3.0.0. Используйте вместо него `valid`
   */
  status: PropTypes.oneOf(['default', 'error', 'verified', 'valid']),
  getRef: PropTypes.func,
  getRootRef: PropTypes.func,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;