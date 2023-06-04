import Layout from "@/components/Layout"

const Jsx = () => {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito legal.".toUpperCase()}</h2>
    }

    return (
        <Layout>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
        </Layout>
    )
}

export default Jsx