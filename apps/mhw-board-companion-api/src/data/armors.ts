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
import { ancientBone, anjanathFang, anjanathNosebone, anjanathPelt, anjanathScale, anjanathTail, azureRathalosCarapace, azureRathalosMarrow, azureRathalosPlate, azureRathalosScale, azureRathalosTail, azureRathalosWing, azureRathalosWingtalon, barrothCarapace, barrothClaw, barrothRidge, barrothTail, birdWyvernGem, blackDiablosCarapace, blackDiablosRidge, blackSpiralHorn, blosMedulla, carbaliteOre, daoraCarapace, daoraClaw, daoraDragonScale, daoraGem, daoraHorn, daoraWebbing, diablosCarapace, diablosFang, diablosRidge, dragoniteOre, earthrystal, elderDragonBlood, elderDragonBone, electroSac, fertileMud, fireDragonScale, firecellStone, flameSac, gajauScale, greatJagrasClaw, greatJagrasHide, greatJagrasMane, greatJagrasScale, inmortalDragonScale, jyuratodusCarapace, jyuratodusFang, jyuratodusFin, jyuratodusScale, kuluYakuBeak, kuluYakuHide, kuluYakuPlume, kuluYakuScale, lightCrystal, machaliteOre, majesticHorn, monsterBoneSmall, monsterKeenbone, nergiganteCarapace, nergiganteGem, nergiganteHorn, nergiganteRegrowthPlate, nergiganteTalon, novaCrystal, poisonSac, pukeiPukeiCarapace, pukeiPukeiScale, pukeiPukeiTail, pukeiPukeiWing, qualityBone, rathalosMarrow, rathalosPlate, rathalosScale, rathalosShell, rathalosTail, rathalosWebing, rathalosWingtalon, teostraCarapace, teostraHorn, teostraMane, teostraPowder, teostraTail, teostraWebbing, tobiKadachiClaw, tobiKadachiElectrode, tobiKadachiMembrane, tobiKadachiPelt, tobiKadachiScale, torrentSac, warmPelt, wingdrakeHide, wyvernGem } from './materials';

type ArmorSeedData = {
  id: string;
  name: string;
  defense: number;
  elementalDefenseType: Element;
  elementalDefense: number,
  branch: CraftingBranch;
  armorPiece: ArmorPiece;
  monster?: string;
  materials?: Array<{ materialId: string; quantity: number }>;
}

// Alloy
export const alloyHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Alloy Helm',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.HEAD,
  materials: [
    { materialId: machaliteOre.id, quantity: 2 },
    { materialId: carbaliteOre.id, quantity: 1 },
    { materialId: dragoniteOre.id, quantity: 1 },
  ]
};
export const alloyMail: ArmorSeedData = {
  id: uuid(),
  name: 'Alloy Mail',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.CHEST,
  materials: [
    { materialId: machaliteOre.id, quantity: 1 },
    { materialId: carbaliteOre.id, quantity: 2 },
    { materialId: dragoniteOre.id, quantity: 1 },
  ]
};
export const alloyGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Alloy Graves',
  defense: 0,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.GREAVES,
  materials: [
    { materialId: machaliteOre.id, quantity: 1 },
    { materialId: carbaliteOre.id, quantity: 2 },
    { materialId: dragoniteOre.id, quantity: 1 },
  ]
};

// Bone
export const boneHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Bone Helm',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.BONE,
  armorPiece: ArmorPiece.HEAD,
  materials: [
    { materialId: monsterBoneSmall.id, quantity: 2 },
    { materialId: ancientBone.id, quantity: 2 },
  ]
};
export const boneMall: ArmorSeedData = {
  id: uuid(),
  name: 'Bone Mall',
  defense: 0,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.CHEST,
  materials: [
    { materialId: monsterBoneSmall.id, quantity: 1 },
    { materialId: ancientBone.id, quantity: 1 },
  ]
};
export const boneGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Bone Greaves',
  defense: 1,
  elementalDefenseType: Element.NONELEMENTAL,
  elementalDefense: 0,
  branch: CraftingBranch.ORE,
  armorPiece: ArmorPiece.GREAVES,
  materials: [
    { materialId: monsterBoneSmall.id, quantity: 1 },
    { materialId: ancientBone.id, quantity: 1 },
  ]
};

// Barroth
export const barrothHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Barroth Helm',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: barroth.id,
  materials: [
    { materialId: barrothRidge.id, quantity: 1 },
    { materialId: barrothTail.id, quantity: 1 },
    { materialId: barrothClaw.id, quantity: 1 },
    { materialId: fertileMud.id, quantity: 1 },
  ]
};
export const barrothMall: ArmorSeedData = {
  id: uuid(),
  name: 'Barroth Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: barroth.id,
  materials: [
    { materialId: barrothRidge.id, quantity: 2 },
    { materialId: barrothCarapace.id, quantity: 1 },
    { materialId: barrothClaw.id, quantity: 1 },
    { materialId: qualityBone.id, quantity: 2 },
  ]
};
export const barrothGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Barroth Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: barroth.id,
  materials: [
    { materialId: barrothRidge.id, quantity: 1 },
    { materialId: barrothCarapace.id, quantity: 2 },
    { materialId: fertileMud.id, quantity: 1 },
    { materialId: monsterKeenbone.id, quantity: 1 },
  ]
};

// Pukei Pukei
export const pukeyHood: ArmorSeedData = {
  id: uuid(),
  name: 'Pukei Hood',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: pukeiPukei.id,
  materials: [
    { materialId: pukeiPukeiTail.id, quantity: 1 },
    { materialId: pukeiPukeiCarapace.id, quantity: 1 },
    { materialId: pukeiPukeiWing.id, quantity: 1 },
  ]
};
export const pukeiMall: ArmorSeedData = {
  id: uuid(),
  name: 'Pukei Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: pukeiPukei.id,
  materials: [
    { materialId: pukeiPukeiScale.id, quantity: 2 },
    { materialId: pukeiPukeiCarapace.id, quantity: 1 },
    { materialId: carbaliteOre.id, quantity: 3 },
  ]
};
export const pukeiGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Pukei Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: pukeiPukei.id,
  materials: [
    { materialId: pukeiPukeiScale.id, quantity: 1 },
    { materialId: poisonSac.id, quantity: 2 },
    { materialId: pukeiPukeiCarapace.id, quantity: 2 },
    { materialId: monsterKeenbone.id, quantity: 3 },
  ]
};

// Jyuratodus
export const jyuraHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Jyura Hood',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: jyuratodus.id,
  materials: [
    { materialId: jyuratodusScale.id, quantity: 1 },
    { materialId: jyuratodusCarapace.id, quantity: 1 },
    { materialId: jyuratodusFin.id, quantity: 1 },
    { materialId: gajauScale.id, quantity: 1 },
  ]
};
export const jyuraMall: ArmorSeedData = {
  id: uuid(),
  name: 'Jyura Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: jyuratodus.id,
  materials: [
    { materialId: jyuratodusScale.id, quantity: 1 },
    { materialId: jyuratodusFang.id, quantity: 1 },
    { materialId: jyuratodusFin.id, quantity: 1 },
    { materialId: torrentSac.id, quantity: 1 },
  ]
};
export const jyuraGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Jyura Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: jyuratodus.id,
  materials: [
    { materialId: jyuratodusCarapace.id, quantity: 1 },
    { materialId: jyuratodusFang.id, quantity: 1 },
    { materialId: jyuratodusFin.id, quantity: 1 },
    { materialId: wyvernGem.id, quantity: 1 },
  ]
};

// Diablos
export const diablosHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Diablos Hood',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: diablos.id,
  materials: [
    { materialId: diablosRidge.id, quantity: 1 },
    { materialId: diablosFang.id, quantity: 2 },
    { materialId: majesticHorn.id, quantity: 1 },
    { materialId: wyvernGem.id, quantity: 2 },
  ]
};
export const diablosMall: ArmorSeedData = {
  id: uuid(),
  name: 'Diablos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: diablos.id,
  materials: [
    { materialId: diablosCarapace.id, quantity: 2 },
    { materialId: diablosRidge.id, quantity: 1 },
    { materialId: majesticHorn.id, quantity: 1 },
    { materialId: lightCrystal.id, quantity: 2 },
  ]
};
export const diablosGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Diablos Greaves',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: diablos.id,
  materials: [
    { materialId: diablosCarapace.id, quantity: 1 },
    { materialId: diablosRidge.id, quantity: 1 },
    { materialId: blosMedulla.id, quantity: 1 },
  ]
};

// Black Diablos
export const blackDiablosHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Black Diablos Hood',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: blackDiablos.id,
  materials: [
    { materialId: blackDiablosRidge.id, quantity: 2 },
    { materialId: majesticHorn.id, quantity: 1 },
    { materialId: blackSpiralHorn.id, quantity: 1 },
    { materialId: novaCrystal.id, quantity: 2 },
  ]
};
export const blackDiablosMall: ArmorSeedData = {
  id: uuid(),
  name: 'Black Diablos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: blackDiablos.id,
  materials: [
    { materialId: blackDiablosCarapace.id, quantity: 1 },
    { materialId: blackSpiralHorn.id, quantity: 2 },
    { materialId: blosMedulla.id, quantity: 2 },
  ]
};
export const blackDiablosGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Black Diablos Greaves',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: blackDiablos.id,
  materials: [
    { materialId: blackDiablosRidge.id, quantity: 1 },
    { materialId: blackDiablosCarapace.id, quantity: 2 },
    { materialId: blackSpiralHorn.id, quantity: 1 },
    { materialId: wyvernGem.id, quantity: 1 },
  ]
};

// Jagrass
export const jagrassHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Jagras Hood',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: greatJagrass.id,
  materials: [
    { materialId: greatJagrasHide.id, quantity: 1 },
    { materialId: greatJagrasMane.id, quantity: 1 },
    { materialId: greatJagrasClaw.id, quantity: 2 },
    { materialId: ancientBone.id, quantity: 1 },
  ]
};
export const jagrassMall: ArmorSeedData = {
  id: uuid(),
  name: 'Jagras Mall',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: greatJagrass.id,
  materials: [
    { materialId: greatJagrasHide.id, quantity: 1 },
    { materialId: greatJagrasScale.id, quantity: 1 },
    { materialId: greatJagrasClaw.id, quantity: 2 },
    { materialId: monsterBoneSmall.id, quantity: 1 },
  ]
};
export const jagrassGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Jagras Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: greatJagrass.id,
  materials: [
    { materialId: greatJagrasHide.id, quantity: 1 },
    { materialId: greatJagrasMane.id, quantity: 1 },
    { materialId: greatJagrasScale.id, quantity: 2 },
  ]
};

// Tobi-kadachi
export const kadachiHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Kadachi Hood',
  defense: 0,
  elementalDefenseType: Element.ELECTRIC,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: tobiKadachi.id,
  materials: [
    { materialId: tobiKadachiPelt.id, quantity: 1 },
    { materialId: tobiKadachiClaw.id, quantity: 1 },
    { materialId: electroSac.id, quantity: 1 },
  ]
};
export const kadachiMall: ArmorSeedData = {
  id: uuid(),
  name: 'Kadachi Mall',
  defense: 1,
  elementalDefenseType: Element.ELECTRIC,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: tobiKadachi.id,
  materials: [
    { materialId: tobiKadachiPelt.id, quantity: 1 },
    { materialId: tobiKadachiElectrode.id, quantity: 1 },
    { materialId: tobiKadachiMembrane.id, quantity: 2 },
    { materialId: wingdrakeHide.id, quantity: 1 },
  ]
};
export const kadachiGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Kadachi Greaves',
  defense: 0,
  elementalDefenseType: Element.ELECTRIC,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: tobiKadachi.id,
  materials: [
    { materialId: tobiKadachiScale.id, quantity: 2 },
    { materialId: tobiKadachiPelt.id, quantity: 1 },
    { materialId: warmPelt.id, quantity: 1 },
  ]
};

// Anjanath
export const anjanathHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Anjanath Hood',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: anjanath.id,
  materials: [
    { materialId: anjanathPelt.id, quantity: 1 },
    { materialId: anjanathScale.id, quantity: 1 },
    { materialId: anjanathTail.id, quantity: 1 },
  ]
};
export const anjanathMall: ArmorSeedData = {
  id: uuid(),
  name: 'Anjanath Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: anjanath.id,
  materials: [
    { materialId: anjanathPelt.id, quantity: 1 },
    { materialId: anjanathNosebone.id, quantity: 1 },
    { materialId: anjanathFang.id, quantity: 1 },
  ]
};
export const anjanathGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Anjanath Greaves',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: anjanath.id,
  materials: [
    { materialId: anjanathPelt.id, quantity: 1 },
    { materialId: anjanathScale.id, quantity: 1 },
    { materialId: flameSac.id, quantity: 1 },
    { materialId: machaliteOre.id, quantity: 1 },
  ]
};

// Rathalos
export const rathalosHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Rathalos Hood',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: rathalos.id,
  materials: [
    { materialId: rathalosScale.id, quantity: 1 },
    { materialId: rathalosShell.id, quantity: 1 },
    { materialId: rathalosMarrow.id, quantity: 1 },
  ]
};
export const rathalosMall: ArmorSeedData = {
  id: uuid(),
  name: 'Rathalos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: rathalos.id,
  materials: [
    { materialId: rathalosScale.id, quantity: 1 },
    { materialId: rathalosWebing.id, quantity: 1 },
    { materialId: rathalosPlate.id, quantity: 1 },
  ]
};
export const rathalosGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Rathalos Greaves',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: rathalos.id,
  materials: [
    { materialId: rathalosShell.id, quantity: 1 },
    { materialId: rathalosWingtalon.id, quantity: 1 },
    { materialId: rathalosTail.id, quantity: 1 },
  ]
};

// Azure Rathalos
export const azureRathalosHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Azure Rathalos Hood',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: azureRathalos.id,
  materials: [
    { materialId: azureRathalosScale.id, quantity: 1 },
    { materialId: azureRathalosCarapace.id, quantity: 1 },
    { materialId: azureRathalosMarrow.id, quantity: 1 },
  ]
};
export const azureRathalosMall: ArmorSeedData = {
  id: uuid(),
  name: 'Azure Rathalos Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: azureRathalos.id,
  materials: [
    { materialId: azureRathalosScale.id, quantity: 1 },
    { materialId: azureRathalosWing.id, quantity: 1 },
    { materialId: azureRathalosPlate.id, quantity: 1 },
  ]
};
export const azureRathalosGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Azure Rathalos Greaves',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: rathalos.id,
  materials: [
    { materialId: azureRathalosCarapace.id, quantity: 1 },
    { materialId: azureRathalosWingtalon.id, quantity: 2 },
    { materialId: azureRathalosTail.id, quantity: 1 },
  ]
};

// Kushala Daora
export const kushalaGlare: ArmorSeedData = {
  id: uuid(),
  name: 'Kushala Glare',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: daora.id,
  materials: [
    { materialId: daoraDragonScale.id, quantity: 2 },
    { materialId: daoraCarapace.id, quantity: 1 },
    { materialId: daoraWebbing.id, quantity: 1 },
    { materialId: elderDragonBone.id, quantity: 2 },
  ]
};
export const kushalaCista: ArmorSeedData = {
  id: uuid(),
  name: 'Kushala Cista',
  defense: 2,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: daora.id,
  materials: [
    { materialId: daoraHorn.id, quantity: 1 },
    { materialId: daoraCarapace.id, quantity: 1 },
    { materialId: daoraClaw.id, quantity: 1 },
    { materialId: daoraGem.id, quantity: 1 },
  ]
};
export const kushalaCrus: ArmorSeedData = {
  id: uuid(),
  name: 'Kushala Crus',
  defense: 2,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: daora.id,
  materials: [
    { materialId: daoraDragonScale.id, quantity: 1 },
    { materialId: daoraCarapace.id, quantity: 1 },
    { materialId: daoraWebbing.id, quantity: 2 },
    { materialId: elderDragonBone.id, quantity: 2 },
  ]
};

// Teostra
export const kaiserCrown: ArmorSeedData = {
  id: uuid(),
  name: 'kaiser Crown',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: teostra.id,
  materials: [
    { materialId: teostraCarapace.id, quantity: 1 },
    { materialId: teostraHorn.id, quantity: 1 },
    { materialId: teostraTail.id, quantity: 1 },
    { materialId: firecellStone.id, quantity: 2 },
  ]
};
export const KaiserMall: ArmorSeedData = {
  id: uuid(),
  name: 'Kaiser Mall',
  defense: 1,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: teostra.id,
  materials: [
    { materialId: teostraWebbing.id, quantity: 2 },
    { materialId: teostraPowder.id, quantity: 2 },
    { materialId: rathalosPlate.id, quantity: 1 },
  ]
};
export const KaiserGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Kaiser Greaves',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: teostra.id,
  materials: [
    { materialId: fireDragonScale.id, quantity: 2 },
    { materialId: teostraMane.id, quantity: 1 },
  ]
};

// Nergigante
export const nergiganteHelm: ArmorSeedData = {
  id: uuid(),
  name: 'Nergigante Helm',
  defense: 2,
  elementalDefenseType: Element.FIRE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: nergigante.id,
  materials: [
    { materialId: nergiganteHorn.id, quantity: 1 },
    { materialId: nergiganteCarapace.id, quantity: 1 },
    { materialId: inmortalDragonScale.id, quantity: 2 },
    { materialId: nergiganteGem.id, quantity: 1 },
  ]
};
export const nergigganteMall: ArmorSeedData = {
  id: uuid(),
  name: 'Nergigante Mall',
  defense: 2,
  elementalDefenseType: Element.ICE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: nergigante.id,
  materials: [
    { materialId: nergiganteTalon.id, quantity: 2 },
    { materialId: inmortalDragonScale.id, quantity: 2 },
    { materialId: elderDragonBone.id, quantity: 2 },
  ]
};
export const nergiganteGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Nerggigante Greaves',
  defense: 1,
  elementalDefenseType: Element.WATER,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: nergigante.id,
  materials: [
    { materialId: nergiganteCarapace.id, quantity: 1 },
    { materialId: nergiganteCarapace.id, quantity: 1 },
    { materialId: nergiganteRegrowthPlate.id, quantity: 2 },
    { materialId: elderDragonBlood.id, quantity: 1 },
  ]
};

// Kulu-Ya-Ku
export const kuluHeadPiece: ArmorSeedData = {
  id: uuid(),
  name: 'Kulu Headpiece',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.HEAD,
  monster: kuluYaKu.id,
  materials: [
    { materialId: kuluYakuScale.id, quantity: 1 },
    { materialId: kuluYakuHide.id, quantity: 1 },
    { materialId: kuluYakuPlume.id, quantity: 1 },
  ]
};
export const kuluMail: ArmorSeedData = {
  id: uuid(),
  name: 'Kulu Mall',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 1,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.CHEST,
  monster: kuluYaKu.id,
  materials: [
    { materialId: kuluYakuHide.id, quantity: 2 },
    { materialId: birdWyvernGem.id, quantity: 1 },
    { materialId: kuluYakuBeak.id, quantity: 1 },
    { materialId: kuluYakuPlume.id, quantity: 1 },
  ]
};
export const kuluGreaves: ArmorSeedData = {
  id: uuid(),
  name: 'Kulu Greaves',
  defense: 1,
  elementalDefenseType: Element.ICE,
  elementalDefense: 2,
  branch: CraftingBranch.MONSTER,
  armorPiece: ArmorPiece.GREAVES,
  monster: kuluYaKu.id,
  materials: [
    { materialId: kuluYakuHide.id, quantity: 1 },
    { materialId: kuluYakuScale.id, quantity: 2 },
    { materialId: kuluYakuHide.id, quantity: 3 },
    { materialId: earthrystal.id, quantity: 1 },
  ]
};
