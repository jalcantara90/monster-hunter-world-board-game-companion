import { GetMonsterQuery } from "../../domain/requests/GetMonsterQuery";

export class GetMonsterListCommand {
  constructor(public readonly query?: GetMonsterQuery) {}
}
