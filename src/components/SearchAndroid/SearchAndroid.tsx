import React from 'react';
import PropTypes from 'prop-types';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import HeaderButton from '../HeaderButton/HeaderButton';
import { HasClassName } from '../../types/props';

const baseClassName = getClassName('Search');

export interface SearchIOSProps extends HasClassName {
  after?: React.ReactNode;
  autoComplete?: string;
  autoFocus?: boolean;
  before?: React.ReactNode;
  theme?: 'header' | 'default';
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  getRef?: (instance: HTMLInputElement) => void;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

type State = {
  value?: string;
};

export default class SearchAndroid extends React.Component<SearchIOSProps> {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    placeholder: PropTypes.node,
    theme: PropTypes.oneOf(['header', 'default']),
    getRef: PropTypes.func,
    autoFocus: PropTypes.bool
  };

  static defaultProps = {
    placeholder: 'Поиск',
    theme: 'default',
    autoFocus: true
  };

  static contextTypes = {
    webviewType: PropTypes.oneOf(['vkapps', 'internal'])
  };

  inputEl: HTMLInputElement;

  isControlledOutside: boolean = this.props.hasOwnProperty('value');

  state: State = {
    value: this.props.hasOwnProperty('value') ? this.props.defaultValue || '' : undefined
  };

  onCancel = () => {
    if (!this.isControlledOutside) {
      this.setState({ value: '' });
    }

    if (this.props.onChange) {
      // FIXME: What did you wanna do?
      // this.props.onChange('');
    }

    this.inputEl.focus();
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e.target.value, e);
    }
  };

  componentDidMount () {
    if (this.props.theme === 'header' && this.props.autoFocus) {
      this.inputEl.focus();
    }
  }

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  inputRef = el => {
    this.inputEl = el;
    this.props.getRef && this.props.getRef(el);
  };

  render () {
    const { getRef, value, defaultValue, onChange, onClose, theme, autoFocus, ...inputProps } = this.props;
    const hasValue = !!this.value;

    const className = classNames(
      baseClassName,
      `Search--${theme}`,
      {
        'Search--has-value': hasValue,
        'Search--vkapps': this.context.webviewType === 'vkapps'
      },
      this.props.className
    );

    return (
      <div className={className}>
        <div className="Search__container">
          <div className="Search__before">
            {theme === 'default' && <Icon24Search />}
            {theme === 'header' && (
              <HeaderButton onClick={onClose}>
                <Icon24Back />
              </HeaderButton>
            )}
          </div>
          <div className="Search__control">
            <input
              {...inputProps}
              className="Search__input"
              ref={this.inputRef}
              value={this.value}
              onChange={this.onChange}
            />
          </div>
          {hasValue && (
            <div className="Search__after">
              {theme === 'default' && <Icon24Cancel onClick={this.onCancel} />}
              {theme === 'header' && (
                <HeaderButton onClick={this.onCancel}>
                  <Icon24Cancel />
                </HeaderButton>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}