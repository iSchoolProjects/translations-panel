export class PayloadError extends Error {
  private readonly requiredArguments: unknown;
  constructor(requiredArguments: unknown) {
    super();
    this.requiredArguments = requiredArguments;
    this.name = 'MissingArgument';
  }
}

export class InalidValueError extends Error {
  private readonly invalidValue: unknown;
  private readonly key: unknown;
  constructor(invalidValue: unknown, key: unknown) {
    super();
    this.invalidValue = invalidValue;
    this.key = key;
    this.name = 'InvalidValue';
  }
}
