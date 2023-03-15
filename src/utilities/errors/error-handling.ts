export class ErrorHandling {
  private readonly entity: any;

  constructor(entity: any) {
    this.entity = entity;
  }

  public getErrorType(error: Error, values?: unknown) {
    if (error.name === 'EntityNotFoundError') {
      return this.notFound(values);
    }
    if (error.name === 'QueryFailedError') {
      if (error.message.includes('ER_DUP_ENTRY')) {
        return this.duplicate(values);
      }
    }
    if (error.name === 'MissingArgument') {
      return this.missingArgument((error as unknown as any).requiredArguments);
    }
    if (error.name === 'InvalidValue') {
      const {invalidValue, key} = error as unknown as any;
      return this.invalidValue(key, invalidValue);
    }
    if (error.name === 'Common') {
      return this.common();
    }
  }

  private notFound(value: unknown) {
    return {
      message: `${this.entity.name} ${value} not found`,
      code: 404,
    };
  }

  private duplicate(values: unknown) {
    return {
      message: `Value ${JSON.stringify(values)} already exists`,
      code: 409,
    };
  }

  private missingArgument(values: unknown) {
    return {
      message: `Missing ${values} in the playload `,
      code: 400,
    };
  }
  private invalidValue(key: string, value: unknown) {
    return {
      message: `Invalid value ${value} as ${key}`,
      code: 400,
    };
  }
  private common() {
    return {
      message: 'There was an error, please try again later',
      code: 400,
    };
  }
}
