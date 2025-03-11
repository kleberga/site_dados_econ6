import * as React from "react"
import Layout from "../components/layout"

export default function Contato(){
    return(
        <Layout lang="pt-br">
        <meta name="descricao" content="Página contendo o contato"></meta>
            <div className="ml-12 text-white">
                <h1 className="text-2xl font-bold">Contato</h1>
                <br/>
                <p className="text-xl">Em caso de críticas, dúvidas ou sugestões, entre em contato pelo e-mail:</p>
                <br/>
                <p className="text-xl font-bold">dados.economicos156@gmail.com</p>
                <br/>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Contato</title>