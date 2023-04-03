import { ArmorPiece } from '@mhwboard-companion/common-api';

import { IconProps } from '../../icons/types';
import { HelmetIcon } from '../../icons/HelmetIcon';
import { GreavesIcon } from '../../icons/GreavesIcon';
import { ChestPlateIcon } from '../../icons/ChestPlateIcon';

export type ArmorIconProps = IconProps & {
  armorPiece: ArmorPiece;
};

const armorIconDictionary = {
  [ArmorPiece.HEAD]: HelmetIcon,
  [ArmorPiece.CHEST]: ChestPlateIcon,
  [ArmorPiece.GREAVES]: GreavesIcon,
};

export function ArmorIcon({ size = 'sm', armorPiece }: ArmorIconProps) {
  const Icon = armorIconDictionary[armorPiece];

  return <Icon size={size} />;
}
