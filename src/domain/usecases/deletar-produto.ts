export interface DeletarProduto {
    deleta (id: number): Promise<boolean>
}