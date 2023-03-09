import { GetWeaponQuery } from '../../domain/requests/GetWeaponQuery';

export class GetWeaponListCommand {
  constructor(public readonly query?: GetWeaponQuery) {}
}
