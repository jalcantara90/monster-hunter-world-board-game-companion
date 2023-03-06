import { CreateBrigadeRequest } from "@domain/brigades/requests/CreateBrigadeRequest";

export class CreateBrigadeCommand {
  constructor(
    public readonly request: CreateBrigadeRequest
  ) {}
}
