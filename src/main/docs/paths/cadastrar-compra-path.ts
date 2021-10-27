export const cadastrarCompraPath = {
  post: {
    tags: ["Compra"],
    summary: "API para cadastrar uma compra",
    description: "Essa rota não pode ser executada por **qualquer usuário**",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/cadastrarCompraParams"
          }
        }
      }
    },
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/result"
            }
          }
        }
      },
      400: {
        $ref: "#/components/badRequest"
      },
      500: {
        $ref: "#/components/serverError"
      }
    }
  }
}
