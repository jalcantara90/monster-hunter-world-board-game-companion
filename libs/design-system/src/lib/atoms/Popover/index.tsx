import { Popover as HeadlessUIPopover } from '@headlessui/react';
import { ReactNode } from 'react';

import styles from './Popover.module.scss';

export type PopoverProps = {
  children: ReactNode | ReactNode[];
  actions: PopoverAction[];
};

type PopoverAction = {
  label: string;
  action: () => void;
};

export function Popover({ children, actions = [] }: PopoverProps) {
  return (
    <HeadlessUIPopover className={styles.popover}>
      <HeadlessUIPopover.Button className={styles.popover__action}>
        {children}
      </HeadlessUIPopover.Button>

      <HeadlessUIPopover.Panel className={styles.popover__panel}>
        {Boolean(actions.length) && (
          <ul className={styles.popover__list}>
            {actions.map(({ action, label }) => (
              <li className={styles.popover__listItem} key={label}>
                <button className={styles.popover__action} onClick={action}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </HeadlessUIPopover.Panel>
    </HeadlessUIPopover>
  );
}
