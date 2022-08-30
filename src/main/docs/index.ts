import paths from "./paths"
import schemas from "./schemas"
import components from "./components"

export default {
  openapi: "3.0.0",
  info: {
    title: "Purchase-Node-API",
    description: "Teste de competência referente à vaga de Desenvolvedor Fullstack",
    version: "1.0.0",
    contact: {
      name: "Elzio Lima",
      email: "elziolimach@gmail.com",
    },
    license: {
      name: "GPL-3.0-or-later",
      url: "https://spdx.org/licenses/GPL-3.0-or-later.html"
    }
  },
  servers: [{
    url: "/api",
    description: "Servidor Principal"
  }],
  tags: [{
    name: "Produto",
    description: "APIs relacionadas a Produtos"
  }, {
    name: "Compra",
    description: "APIs relacionadas a Compras"
  }],
  paths,
  schemas,
  components
}
