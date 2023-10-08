import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";

export default function Home() {

  const { selecionarCliente, novoCliente, excluirCliente, salvarCliente, cliente, clientes, tabelaVisivel, exibirTabela } = useClientes();

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-900">
      <Layout titulo="Cadastri Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={() => exibirTabela()} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}
