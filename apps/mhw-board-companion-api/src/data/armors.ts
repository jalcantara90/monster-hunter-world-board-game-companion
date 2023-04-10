import { v4 as uuid } from 'uuid';
import { Element } from '../app/database/enums/ElementType';
import { CraftingBranch } from '../app/armors/domain/enum/CraftingBranch';
import { ArmorPiece } from '../app/armors/domain/enum/ArmorPiece';
import {
  anjanath,
  azureRathalos,
  barroth,
  blackDiablos,
  daora,
  diablos,
  greatJagrass,
  jyuratodus,
  kuluYaKu,
  nergigante,
  pukeiPukei,
  rathalos,
  teostra,
  tobiKadachi,
} from './monsters';

// Alloy
export const alloyHelm = {
  id: uuid(),
  name: 'Alloy Helm',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.HEAD,
};
export const alloyMail = {
  id: uuid(),
  name: 'Alloy Mail',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.CHEST,
};
export const alloyGreaves = {
  id: uuid(),
  name: 'Alloy Graves',
  defense: 0,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.GREAVES,
};

// Bone
export const boneHelm = {
  id: uuid(),
  name: 'Bone Helm',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.BONE,
  armorPiece: ArmorPiece.HEAD,
};
export const boneMall = {
  id: uuid(),
  name: 'Bone Mall',
  defense: 0,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.CHEST,
};
export const boneGreaves = {
  id: uuid(),
  name: 'Bone Greaves',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.GREAVES,
};

// Barroth
export const barrothHelm = {
  id: uuid(),
  name: 'Barroth Helm',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: barroth.id,
};
export const barrothMall = {
  id: uuid(),
  name: 'Barroth Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: barroth.id,
};
export const barrothGreaves = {
  id: uuid(),
  name: 'Barroth Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: barroth.id,
};

// Pukei Pukei
export const pukeyHood = {
  id: uuid(),
  name: 'Pukei Hood',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: pukeiPukei.id,
};
export const pukeiMall = {
  id: uuid(),
  name: 'Pukei Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: pukeiPukei.id,
};
export const pukeiGreaves = {
  id: uuid(),
  name: 'Pukei Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: pukeiPukei.id,
};

// Jyuratodus
export const jyuraHelm = {
  id: uuid(),
  name: 'Jyura Hood',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: jyuratodus.id,
};
export const jyuraMall = {
  id: uuid(),
  name: 'Jyura Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: jyuratodus.id,
};
export const jyuraGreaves = {
  id: uuid(),
  name: 'Jyura Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: jyuratodus.id,
};

// Diablos
export const diablosHelm = {
  id: uuid(),
  name: 'Diablos Hood',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: diablos.id,
};
export const diablosMall = {
  id: uuid(),
  name: 'Diablos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: diablos.id,
};
export const diablosGreaves = {
  id: uuid(),
  name: 'Diablos Greaves',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: diablos.id,
};

// Black Diablos
export const blackDiablosHelm = {
  id: uuid(),
  name: 'Black Diablos Hood',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: blackDiablos.id,
};
export const blackDiablosMall = {
  id: uuid(),
  name: 'Black Diablos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: blackDiablos.id,
};
export const blackDiablosGreaves = {
  id: uuid(),
  name: 'Black Diablos Greaves',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: blackDiablos.id,
};

// Jagrass
export const jagrassHelm = {
  id: uuid(),
  name: 'Jagras Hood',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: greatJagrass.id,
};
export const jagrassMall = {
  id: uuid(),
  name: 'Jagras Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: greatJagrass.id,
};
export const jagrassGreaves = {
  id: uuid(),
  name: 'Jagras Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: greatJagrass.id,
};

// Tobi-kadachi
export const kadachiHelm = {
  id: uuid(),
  name: 'Kadachi Hood',
  defense: 0,
  elementalDefenseType: Element.ELECTRIC,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: tobiKadachi.id,
};
export const kadachiMall = {
  id: uuid(),
  name: 'Kadachi Mall',
  defense: 1,
  elementalDefenseType: Element.ELECTRIC,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: tobiKadachi.id,
};
export const kadachiGreaves = {
  id: uuid(),
  name: 'Kadachi Greaves',
  defense: 0,
  elementalDefenseType: Element.ELECTRIC,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: tobiKadachi.id,
};

// Anjanath
export const anjanathHelm = {
  id: uuid(),
  name: 'Anjanath Hood',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: anjanath.id,
};
export const anjanathMall = {
  id: uuid(),
  name: 'Anjanath Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: anjanath.id,
};
export const anjanathGreaves = {
  id: uuid(),
  name: 'Anjanath Greaves',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: anjanath.id,
};

// Rathalos
export const rathalosHelm = {
  id: uuid(),
  name: 'Rathalos Hood',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: rathalos.id,
};
export const rathalosMall = {
  id: uuid(),
  name: 'Rathalos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: rathalos.id,
};
export const rathalosGreaves = {
  id: uuid(),
  name: 'Rathalos Greaves',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: rathalos.id,
};

// Azure Rathalos
export const azureRathalosHelm = {
  id: uuid(),
  name: 'Azure Rathalos Hood',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: azureRathalos.id,
};
export const azureRathalosMall = {
  id: uuid(),
  name: 'Azure Rathalos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: azureRathalos.id,
};
export const azureRathalosGreaves = {
  id: uuid(),
  name: 'Azure Rathalos Greaves',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: rathalos.id,
};

// Kushala Daora
export const kushalaGlare = {
  id: uuid(),
  name: 'Kushala Glare',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: daora.id,
};
export const kushalaCista = {
  id: uuid(),
  name: 'Kushala Cista',
  defense: 2,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: daora.id,
};
export const kushalaCrus = {
  id: uuid(),
  name: 'Kushala Crus',
  defense: 2,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: daora.id,
};

// Teostra
export const kaiserCrown = {
  id: uuid(),
  name: 'kaiser Crown',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: teostra.id,
};
export const KaiserMall = {
  id: uuid(),
  name: 'Kaiser Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: teostra.id,
};
export const KaiserGreaves = {
  id: uuid(),
  name: 'Kaiser Greaves',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: teostra.id,
};

// Nergigante
export const nergiganteHelm = {
  id: uuid(),
  name: 'Nergigante Helm',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: nergigante.id,
};
export const nergigganteMall = {
  id: uuid(),
  name: 'Nergigante Mall',
  defense: 2,
  elementalDefenseType: Element.ICE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: nergigante.id,
};
export const nergiganteGreaves = {
  id: uuid(),
  name: 'Nerggigante Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: nergigante.id,
};

// Kulu-Ya-Ku
export const kuluHeadPiece = {
  id: uuid(),
  name: 'Kulu Headpiece',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: kuluYaKu.id,
};
export const kuluMail = {
  id: uuid(),
  name: 'Kulu Mall',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: kuluYaKu.id,
};
export const kuluGreaves = {
  id: uuid(),
  name: 'Kulu Greaves',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: kuluYaKu.id,
};
