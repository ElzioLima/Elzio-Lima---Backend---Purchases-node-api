import { Validation } from "../../../presentation/protocols"
import { RequiredFieldValidation, MinimalLengthFieldValidation, ValidationComposite } from "../../../validation/validators"

export const makeCadastrarCompraValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ["tipo_pagamento", "status", "produtos"]) {
        validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new MinimalLengthFieldValidation("produtos", 1))
    return new ValidationComposite(validations)
}