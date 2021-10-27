export interface DeletarProdutoRepositorio {
    deleta (id: number): Promise<boolean>
}