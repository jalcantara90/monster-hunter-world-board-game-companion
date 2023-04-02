import { useState } from 'react';
import ReactSelect, { Props } from 'react-select';

import { FormControl } from '../FormControl';
import { classNames } from '../../../shared/classNames';

import './Select.scss';

export type SelectProps = Props & { label: string; error?: string };

export function Select({
  className,
  name,
  label,
  options,
  error = '',
  ...props
}: SelectProps) {
  const [value, setValue] = useState<string>('');
  return (
    <FormControl error={error}>
      <div className="select-container">
        <label htmlFor={`id-${name}`}>{label}</label>
        <ReactSelect
          {...props}
          className={classNames('select', className, error && 'select--error')}
          classNamePrefix="select"
          id={`id-${name}`}
          options={options}
          value={options?.find((option) => {
            return (option as { value: string })?.value === value;
          })}
          onChange={(option, actionMeta) => {
            setValue((option as { value: string })?.value);
            if (props.onChange) {
              props?.onChange(option, actionMeta);
            }
          }}
        />
      </div>
    </FormControl>
  );
}
