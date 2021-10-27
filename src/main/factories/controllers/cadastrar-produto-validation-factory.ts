import { Validation } from "../../../presentation/protocols"
import { RequiredFieldValidation, ValidationComposite } from "../../../validation/validators"

export const makeCadastrarProdutoValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ["nome", "descricao", "preco"]) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}