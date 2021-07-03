import { useState, useEffect } from "react";
import { Principio, fetchFromFirebase } from "./Principio";

function PrincipiosList() {
    const [principios, setPrincipios] = useState<Principio[]>([])

    useEffect(() => {
        const loadFromFirebase = async () => {
            const result = await fetchFromFirebase();
            setPrincipios(result);
        }
        loadFromFirebase();
    }, [])

    return (
        <div>
            <p aria-label="QuantidadePrincipios">{principios.length} Princípios</p>
            <ul>
                {principios.map(p => (
                    <li>{p.conteudo}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default PrincipiosList;