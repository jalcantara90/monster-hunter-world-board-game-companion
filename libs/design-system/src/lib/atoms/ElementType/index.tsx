import { Elemental } from '@mhwboard-companion/common-api';
import { classNames } from '../../shared/classNames';

import styles from './ElementType.module.scss';

export type ElementTypeProps = {
  elementType: Elemental;
};

const elementDictionary = {
  [Elemental.DRAGON]: 'dragon',
  [Elemental.FIRE]: 'fire',
  [Elemental.ELECTRIC]: 'electric',
  [Elemental.ICE]: 'ice',
  [Elemental.WATER]: 'water',
  [Elemental.NONELEMENTAL]: 'non-elemental',
};

export function ElementType({ elementType }: ElementTypeProps) {
  return (
    <span
      className={classNames(
        styles.elementType,
        styles[`elementType--${elementDictionary[elementType]}`]
      )}
    >
      {elementDictionary[elementType]}
    </span>
  );
}
