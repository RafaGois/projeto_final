import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/firebase/db/colecaoCliente";
import { useEffect, useState } from "react";
import UsetabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const {formularioVisivel, tabelaVisivel, exibirFormulario, exibirTabela} = UsetabelaOuForm();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);


    useEffect(() => {
        obterTodos();
    }, [])

    function obterTodos() {
        repo.obterTodos().then((clientes) => {
            setClientes(clientes);
            exibirTabela();
        });
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos();
    }

    function novoCliente() {
        setCliente(Cliente.vazio());
        exibirFormulario();
    }

    return {
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        clientes,
        cliente,
        tabelaVisivel,
        exibirTabela,
    }
}