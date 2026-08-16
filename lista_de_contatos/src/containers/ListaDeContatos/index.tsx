import { useAppSelector } from "../../store/hooks"
import { Contato } from '../../components/Contato'


const ListaDeContato = () => {
  const { itens } = useAppSelector((state) => state.contatos)

  return (
    <ul>
      {itens.map((c) => (
        <li key={c.id}>
          <Contato {...c} />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContato
