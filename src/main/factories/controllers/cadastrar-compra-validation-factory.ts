import { Validation } from "../../../presentation/protocols"
import { RequiredFieldValidation, ValidationComposite } from "../../../validation/validators"

export const makeCadastrarCompraValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ["tipo_pagamento", "status", "produtos"]) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}