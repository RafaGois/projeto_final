import Cliente from "@/core/Cliente"

import { MdEdit } from "react-icons/md";
import { TbTrashFilled } from "react-icons/tb";

interface TabelaProps {
    clientes: Cliente[],
    clienteSelecionado?: (cliente: Cliente) => void,
    clienteExcluido?: (cliente: Cliente) => void,
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes && <th className="text-left p-4">Acoes</th>}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 == 0 ? "bg-purple-200" : "bg-purple-100"}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    { exibirAcoes && renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center ">
                {props.clienteSelecionado && (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className="flex justify-center items-center text-green-600 hover:bg-white rounded-full p-2">
                        <MdEdit size={25} />
                    </button>
                )}
                {props.clienteSelecionado && (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className="flex justify-center items-center text-red-600 hover:bg-white rounded-full p-2">
                        <TbTrashFilled size={25} />
                    </button>
                )}
            </td>
        )
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}