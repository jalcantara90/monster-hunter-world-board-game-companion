export class CreateMonsterCommand {
  constructor(
    public readonly name: string,
    public readonly difficulty: number
  ) {}
}
