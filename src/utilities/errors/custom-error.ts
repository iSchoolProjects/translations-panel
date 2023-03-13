export class PayloadError extends Error {
  private readonly requiredArguments: unknown;
  constructor(requiredArguments: unknown) {
    super();
    this.requiredArguments = requiredArguments;
    this.name = 'MissingArgument';
  }
}
