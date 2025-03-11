import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"

export default function HomePage(){
  
  return (
    <Layout>
      <h1 className="text-4xl text-center mt-6 text-white font-bold">Acesse dados econômicos de forma rápida e fácil no seu celular!</h1>
      <div className="ooverflow-hidden flex justify-center mt-6">
        <div className="flex space-x-4 transition-transform duration-500 ease-in-out">
          <StaticImage src="../images/app_ios_tela1.jpeg" className="w-64 h-auto rounded shadow-lg border-4 border-white"  alt="DadosEco - Dados Econômicos" />
          <StaticImage src="../images/app_ios_tela2.jpeg" className="w-64 h-auto rounded shadow-lg border-4 border-white"  alt="DadosEco - Dados Econômicos" />
          <StaticImage src="../images/app_ios_tela3.jpeg" className="w-64 h-auto rounded shadow-lg border-4 border-white"  alt="DadosEco - Dados Econômicos" />
        </div>
      </div>
      <div>
      <p className="text-xl mt-6 text-white">No aplicativo, estão disponíveis dados realizados no âmbito da agropecuária, crédito, dados monetários, política fiscal, índice de preços, 
      mercado de trabalho, setor externo e setor real. Além disso, há projeções de algumas séries econômicas selecionadas.</p>
      </div>
    </Layout>
  );
}

export const Head = () => <title>Home</title>