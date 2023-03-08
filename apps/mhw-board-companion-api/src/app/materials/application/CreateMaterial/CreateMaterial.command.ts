import { CreateMaterialRequest } from "../../domain/requests/CreateMaterialRequest";

export class CreateMaterialCommand {
  constructor(public readonly request: CreateMaterialRequest) {}
}
