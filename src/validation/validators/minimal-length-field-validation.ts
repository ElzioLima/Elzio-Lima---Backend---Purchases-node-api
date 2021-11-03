import { Validation } from "../../presentation/protocols"
import { InvalidParamError } from "../../presentation/errors"

export class MinimalLengthFieldValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly length: number
  ) {}

  validate (input: any): Error {
    if (input[this.fieldName].length < this.length) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
