export class UpdateMonsterCommand {
  constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly difficulty?: number
  ) {}
}
