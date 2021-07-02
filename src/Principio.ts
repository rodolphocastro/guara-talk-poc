import { firestore } from "./firebase";

type NivelPrincipio = "S" | "A" | "B" | "C";

export interface Principio {
    conteudo: string;
    validacao: string;
    nivel: NivelPrincipio;
}

const principiosCollection = 'principios';
export async function fetchFromFirebase(): Promise<Principio[]> {
    const snapshote = await firestore
        .collection(principiosCollection)
        .get();
    return snapshote.docs.map(d => d.data() as Principio);
}