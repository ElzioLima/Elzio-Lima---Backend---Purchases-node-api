export const listarProdutoPath = {
  get: {
    tags: ["Produto"],
    summary: "API para listar produtos",
    description: "Essa rota não pode ser executada por **qualquer usuário**",
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/produtos"
            }
          }
        }
      },
      500: {
        $ref: "#/components/serverError"
      }
    }
  }
}
