import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

const clientes = [
  new Cliente("Ana", 30, '1'),
  new Cliente("Bia", 10, '2'),
  new Cliente("Patricia", 40, '3'),
  new Cliente("Joana", 40, '4'),
  new Cliente("Maria", 20, '5'),
  new Cliente("Betania", 60, '6'),
  new Cliente("Emily", 20, '7'),
]

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario")
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente + " excluido");
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel("tabela");
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("formulario");
  }


  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-900">
      <Layout titulo="Cadastri Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={() => setVisivel("tabela")} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}
