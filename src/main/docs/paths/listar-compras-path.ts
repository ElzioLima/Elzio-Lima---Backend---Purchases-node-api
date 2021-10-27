export const listarComprasPath = {
  post: {
    tags: ["Compra"],
    summary: "API para listar compras",
    description: "Essa rota não pode ser executada por **qualquer usuário**",
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/compras"
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
