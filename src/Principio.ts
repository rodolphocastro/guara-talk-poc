type NivelPrincipio = "S" | "A" | "B" | "C";

export interface Principio {
    identificador: number;
    conteudo: string;
    validacao: string;
    nivel: NivelPrincipio;
}