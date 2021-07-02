import { Principio } from "./Principio";

test('should serialize nicely to a json', () => {
    const subject: Principio = {
        nivel: "S",
        conteudo: "bolinho de arroz",
        validacao: "aaaaaaaaa"
    };

    const result = JSON.stringify(subject);
    expect(result).not.toBe("");
})
