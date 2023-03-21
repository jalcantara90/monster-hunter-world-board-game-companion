import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class AddWeaponRequest {
  @ApiProperty()
  @IsUUID()
  weaponId: string;
}
