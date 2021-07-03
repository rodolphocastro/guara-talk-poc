import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Principio } from "./Principio";
import PrincipiosList from "./PrincipiosList";

test('should render a list of empty Principios', () => {
    jest.mock("./Principio", () => ({
        fetchFromFirebase: jest.fn().mockResolvedValue([])
    }))
    const element = render(<PrincipiosList />)
    const principiosHeader = element.getByLabelText('QuantidadePrincipios');
    expect(principiosHeader).toBeInTheDocument();
    expect(principiosHeader.textContent).toContain('0 Princípios')
})

test('should render a list of many Principios', async () => {
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

    jest.mock("./Principio", () => ({
        fetchFromFirebase: jest.fn().mockResolvedValue(somePrincipios)
    }))

    act(() => { render(<PrincipiosList />) })
    const principiosHeader = screen.getByLabelText('QuantidadePrincipios');
    expect(principiosHeader).toBeInTheDocument();
    await waitFor(
        () => expect(principiosHeader.textContent).toContain(`${somePrincipios.length} Princípios`)
    )
})