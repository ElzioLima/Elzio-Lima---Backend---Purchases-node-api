import { HttpResponse } from "../protocols/http"

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
