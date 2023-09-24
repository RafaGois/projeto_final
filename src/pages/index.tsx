import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

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

  function clienteSelecionado (cliente: Cliente) {
    console.log(cliente);
  }

  function clienteExcluido (cliente: Cliente) {
    console.log(cliente + " excluido");
  }


  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-900">
      <Layout titulo="Cadastri Simples">
        <Botao>Novo Cliente</Botao>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
      
    </div>
  )
}
