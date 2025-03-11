import * as React from "react"
import Layout from "../components/layout"

export default function PoliticaPrivacidade(){
    return(
        <Layout lang="pt-br">
            <meta name="descricao" content="Página contendo a política de privacidade da aplicação."></meta>
            <div className="ml-12 text-white">
                <h1 className="text-2xl font-bold">Política de Privacidade</h1>
                <br/>
                <p className="text-xl">Esta Política de Privacidade descreve como tratamos as informações relacionadas ao uso do nosso aplicativo "DadosEco - Dados Econômicos" (doravante denominado de “Aplicativo”), disponível na Apple Store e Google Store. Nosso compromisso é proteger a privacidade de nossos usuários e operar de forma transparente, respeitando a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
                <br/>
                <h1 className="text-xl font-bold">1. Coleta de Dados Pessoais</h1>
                <br/>
                <p className="text-xl">Nosso Aplicativo coleta os seguintes dados pessoais, fornecidos de forma voluntária pelo usuário:</p>
                <br/>
                <ul className="text-xl list-disc ml-6">
                    <li>E-mail: Fornecido ao reportar um erro através do Aplicativo.</li>
                </ul>
                <br/>
                <p className="text-xl">Essas informações são essenciais para a funcionalidade de reportar problemas e possibilitam a comunicação, caso necessário, para resolução de erros.</p>
                <br/>
                <h1 className="text-xl font-bold">2. Armazenamento de Dados</h1>
                <br/>
                <p className="text-xl">Os dados fornecidos serão armazenados no banco de dados Google Firestore, um serviço em conformidade com os padrões de segurança e privacidade aplicáveis.</p>
                <br/>
                <h1 className="text-xl font-bold">3. Uso dos Dados</h1>
                <br/>
                <p className="text-xl">Os dados coletados serão utilizados exclusivamente para:</p>
                <br/>
                <ul className="text-xl list-disc ml-6">
                    <li>Registrar e tratar erros reportados.</li>
                    <li>Comunicar-se com o usuário, caso necessário, para esclarecimentos ou atualizações relacionadas ao problema relatado.</li>
                </ul>
                <br/>
                <h1 className="text-xl font-bold">4. Compartilhamento de Dados</h1>
                <br/>
                <p className="text-xl">Os dados não serão compartilhados com terceiros, salvo quando exigido por lei ou por ordem judicial.</p>
                <br/>
                <h1 className="text-xl font-bold">5. Direitos dos Usuários</h1>
                <br/>
                <p className="text-xl">Em conformidade com a LGPD, garantimos aos usuários os seguintes direitos:</p>
                <br/>
                <ul className="text-xl list-disc ml-6">
                    <li>Corrigir seus dados pessoais, mediante solicitação através do e-mail fornecido abaixo.</li>
                    <li>Solicitar a exclusão de seus dados pessoais, mediante solicitação através do e-mail fornecido abaixo.</li>
                </ul>
                <br/>
                <h1 className="text-xl font-bold">6. Segurança das Informações</h1>
                <br/>
                <p className="text-xl">Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso não autorizado, perda ou alteração.</p>
                <br/>
                <h1 className="text-xl font-bold">7. Contato</h1>
                <br/>
                <p className="text-xl">Caso tenha dúvidas ou questões relacionadas a esta Política de Privacidade, entre em contato conosco pelo e-mail: dados.economicos156@gmail.com.</p>
                <br/>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Política de Privacidade</title>