import { GetMaterialsQuery } from '../../domain/requests/GetMaterialsQuery';

export class GetMaterialListCommand {
  constructor(public readonly query?: GetMaterialsQuery) {}
}
