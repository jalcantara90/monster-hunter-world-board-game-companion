export class UpdateBrigadeByIdCommand {
  constructor(
    public readonly id: string,
    public readonly name: string
  ) {}
}
