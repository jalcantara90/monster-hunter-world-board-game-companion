import { WeaponType } from '@mhwboard-companion/common-api';

import { BowIcon } from '../../icons/BowIcon';
import { DualBladeIcon } from '../../icons/DualBladeIcon';
import { GreatSwordIcon } from '../../icons/GreatSwordIcon';
import { GunlanceIcon } from '../../icons/GunlanceIcon';
import { InsectGlaiveIcon } from '../../icons/InsectGlaiveIcon';
import { HeavyBowgun } from '../../icons/HeavyBowgun';
import { LightBowgunIcon } from '../../icons/LightBowgunIcon';
import { LanceIcon } from '../../icons/LanceIcon';
import { LongSwordIcon } from '../../icons/LongSwordIcon';
import { SwitchAxeIcon } from '../../icons/SwitchAxeIcon';
import { SwordAndShieldIcon } from '../../icons/SwordAndShieldIcon';
import { HammerIcon } from '../../icons/HammerIcon';
import { HuntingHornIcon } from '../../icons/HuntingHornIcon';
import { ChargeBladeIcon } from '../../icons/ChargeBladeIcon';
import { IconProps } from '../../icons/types';

const weaponIconDictionary = {
  [WeaponType.GREAT_SWORD]: GreatSwordIcon,
  [WeaponType.SWORD_AND_SHIELD]: SwordAndShieldIcon,
  [WeaponType.DOUBLE_BLADES]: DualBladeIcon,
  [WeaponType.CHARGE_BLADE]: ChargeBladeIcon,
  [WeaponType.LANCE]: LanceIcon,
  [WeaponType.GUNLANCE]: GunlanceIcon,
  [WeaponType.BOW]: BowIcon,
  [WeaponType.HAMMER]: HammerIcon,
  [WeaponType.HUNTING_HORN]: HuntingHornIcon,
  [WeaponType.LIGHT_BOWGUN]: LightBowgunIcon,
  [WeaponType.HEAVY_BOWGUN]: HeavyBowgun,
  [WeaponType.SWITCH_AXE]: SwitchAxeIcon,
  [WeaponType.INSECT_GLAIVE]: InsectGlaiveIcon,
  [WeaponType.LONG_SWORD]: LongSwordIcon,
};

export type WeaponIconProps = IconProps & {
  weaponType: WeaponType;
};

export function WeaponIcon({ size = 'sm', weaponType }: WeaponIconProps) {
  const Icon = weaponIconDictionary[weaponType];

  return <Icon size={size} />;
}
