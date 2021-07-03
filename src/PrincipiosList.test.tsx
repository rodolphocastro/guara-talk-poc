import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Principio } from "./Principio";
import * as principioDeps from "./Principio"
import PrincipiosList, { PrincipioListItem } from "./PrincipiosList";

describe('PrincipiosList', () => {
    it('should render a list of empty Principios', () => {
        jest
            .spyOn(principioDeps, "fetchFromFirebase")
            .mockResolvedValue([])
        const element = render(<PrincipiosList />)
        const principiosHeader = element.getByLabelText('QuantidadePrincipios');
        expect(principiosHeader).toBeInTheDocument();
        expect(principiosHeader.textContent).toContain('0 Princípios')
    })

    it('should render a list of many Principios', async () => {
        const somePrincipios: Principio[] = [
            {
                conteudo: "aaaaaa",
                nivel: "S",
                validacao: "bbbbb"
            },
            {
                conteudo: "cccccc",
                nivel: "B",
                validacao: ""
            }
        ]

        // SpyOn faz com que o Jest "observe" a chamada a alguma coisa
        // seguido do mock<algumacoisa> faz com que ele sequestre a execução e retorne o que vc deseja.
        jest
            .spyOn(principioDeps, "fetchFromFirebase")
            .mockResolvedValue(somePrincipios)

        act(() => { render(<PrincipiosList />) })
        const principiosHeader = screen.getByLabelText('QuantidadePrincipios');
        expect(principiosHeader).toBeInTheDocument();
        await waitFor(
            () => expect(principiosHeader.textContent).toContain(`${somePrincipios.length} Princípios`)
        )
    })
})

describe('PrincipioListItem', () => {
    const aPrincipio: Principio = {
        conteudo: "@CONTEUDO@",
        nivel: "S",
        validacao: ""
    }

    it('should always have a Principio', () => {
        const rendered = render(
            <PrincipioListItem
                conteudo={aPrincipio.conteudo}
                nivel={aPrincipio.nivel}
                validacao={aPrincipio.validacao} />
        )

        expect(rendered).not.toBe("")
    })

    it('should be a list item', () => {
        const rendered = render(
            <PrincipioListItem
                conteudo={aPrincipio.conteudo}
                nivel={aPrincipio.nivel}
                validacao={aPrincipio.validacao} />
        )

        expect(rendered.container.innerHTML).toContain("li");
    })

    it(`should contain the Principio's conteudo on its body`, () => {
        const rendered = render(
            <PrincipioListItem
                conteudo={aPrincipio.conteudo}
                nivel={aPrincipio.nivel}
                validacao={aPrincipio.validacao} />
        )

        expect(rendered.getByText(aPrincipio.conteudo)).not.toBeNull();
    })
})