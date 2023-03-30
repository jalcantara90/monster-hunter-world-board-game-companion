import ReactSelect, { Props } from 'react-select';
import { classNames } from '../../../shared/classNames';

import './Select.scss';

export type SelectProps = Props & { label: string };

export function Select({ className, name, label, ...props }: SelectProps) {
  return (
    <div className="select-container">
      <label htmlFor={`id-${name}`}>
        {label}
      </label>
      <ReactSelect
        className={classNames('select', className)}
        classNamePrefix="select"
        id={`id-${name}`}
        {...props}
      />
    </div>
  );
}
