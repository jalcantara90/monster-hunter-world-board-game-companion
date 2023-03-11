import { GetInventorieQuery } from '../../domain/requests/GetInventorieQuery';

export class GetInventorieListCommand {
  constructor(public readonly query?: GetInventorieQuery) {}
}
