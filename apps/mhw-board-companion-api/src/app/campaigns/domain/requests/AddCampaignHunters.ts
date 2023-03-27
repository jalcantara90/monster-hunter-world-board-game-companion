import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsUUID } from 'class-validator';
import { WeaponType } from '../../../weapons/domain/enum/WeaponType';

export class AddCampaignHuntersRequest {
  @ApiProperty()
  @IsArray()
  huntersCampaign: HuntersCampaign[];
}

export class HuntersCampaign {
  @ApiProperty()
  @IsUUID()
  hunterId: string;

  @ApiProperty()
  @IsEnum(WeaponType)
  weaponType: WeaponType;
}
