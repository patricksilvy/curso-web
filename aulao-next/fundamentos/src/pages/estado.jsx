import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado() {
    const [numero, setNumero] = useState(0)
    // const state = useState(0)

    // let numero = state[0]
    // let alterarNumero = state[1]

    console.log(numero)

    function incrementar() {
        setNumero(numero + 1)
    }
    return (
        <Layout>
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}