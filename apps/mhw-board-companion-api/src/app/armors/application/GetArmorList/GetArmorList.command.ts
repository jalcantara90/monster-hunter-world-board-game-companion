import { GetArmorQuery } from '../../domain/requests/GetArmorQuery';

export class GetArmorListCommand {
  constructor(public readonly query?: GetArmorQuery) {}
}
