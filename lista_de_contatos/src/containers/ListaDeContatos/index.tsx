import * as S from './styles'
import * as Icons from '../../assets/icons'
import { useAppSelector } from '../../store/hooks'
import { Contato } from '../../components/Contato'

const ListaDeContato = () => {
  const { itens } = useAppSelector((state) => state.contatos)

  return (
    <S.Wrapper>
      <S.Cabecalho>
        <img
          src={Icons.Contato}
          alt="Ícone de contato"
          width={40}
          height={40}
        />
        <S.Titulo>Lista de Contatos</S.Titulo>
      </S.Cabecalho>

      <S.CabecalhoTabela>
        <S.Checkbox disabled />
        <S.ColunaLabel>Nome completo</S.ColunaLabel>
        <S.ColunaLabel>E-mail</S.ColunaLabel>
        <S.ColunaLabel>Telefone</S.ColunaLabel>
        <span />
      </S.CabecalhoTabela>

      {itens.length === 0 ? (
        <S.Vazio>Nenhum contato cadastrado ainda.</S.Vazio>
      ) : (
        <S.Corpo>
          {itens.map((contato) => (
            <Contato
              key={contato.id}
              id={contato.id}
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          ))}
        </S.Corpo>
      )}
    </S.Wrapper>
  )
}

export default ListaDeContato
