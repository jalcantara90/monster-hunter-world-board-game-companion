import ReactSelect, { Props } from 'react-select';
import { classNames } from '../../../shared/classNames';
import { FormControl } from '../FormControl';

import './Select.scss';

export type SelectProps = Props & { label: string; error: string };

export function Select({
  className,
  name,
  label,
  error,
  ...props
}: SelectProps) {
  return (
    <FormControl error={error}>
      <div className="select-container">
        <label htmlFor={`id-${name}`}>{label}</label>
        <ReactSelect
          className={classNames('select', className, error && 'select--error')}
          classNamePrefix="select"
          id={`id-${name}`}
          {...props}
        />
      </div>
    </FormControl>
  );
}
