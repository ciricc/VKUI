import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasChildren, HasAlign } from '../../types/props';

const baseClassName = getClassName('CellButton');

export interface CellButtonProps extends HasStyleObject, HasChildren, HasAlign {
  before?: React.ReactNode;
  level?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce';
}

const CellButton = ({ className, align, level, before, children, ...restProps }: CellButtonProps) => (
  <Tappable
    {...restProps}
    className={classNames(baseClassName, className, {
      [`CellButton--lvl-${level}`]: level,
      [`CellButton--aln-${align}`]: align
    })}
    stopPropagation
  >
    <div className="CellButton__in">
      {before && <div className="CellButton__before">{before}</div>}
      {children && <div className="CellButton__content">{children}</div>}
    </div>
  </Tappable>
);

CellButton.propTypes = {
  level: PropTypes.oneOf(['primary', 'danger']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  before: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.any
};

CellButton.defaultProps = {
  level: 'primary',
  align: 'left'
};

export default CellButton;
