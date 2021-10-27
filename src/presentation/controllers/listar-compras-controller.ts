import { ListarCompras } from "../../domain/usecases"
import { ok, serverError } from "../helpers"
import { Controller } from "../protocols/controller"
import { HttpResponse } from "../protocols/http"

export class ListarComprasController implements Controller {
    constructor (
        private readonly listarCompras: ListarCompras,
    ) {}

    async handle (): Promise<HttpResponse> {
        try {
            const result = await this.listarCompras.lista()
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}