import { CreateHunterRequest } from "../../domain/requests/CreateHunterRequest";

export class CreateHunterCommand {
  constructor(public readonly request: CreateHunterRequest) {}
}
