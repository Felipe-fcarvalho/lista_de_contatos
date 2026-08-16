import { type SubmitEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import * as S from './styles'
import * as Icones from '../../assets/icons'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  function cadastrarContato(e: SubmitEvent) {
    e.preventDefault()
    dispatch(cadastrar({nome, email, telefone}))
  }

  return (
    <S.Container>
      <S.Form onSubmit={cadastrarContato}>
        <h1>Lista de Contatos</h1>
        <S.Label>
          <img src={Icones.Contato} alt="ícone de contato" />
          <input
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            type="text"
            placeholder="Nome completo"
            required
          />
        </S.Label>
        <S.Label>
          <img src={Icones.Email} alt="ícone de email" />
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
        </S.Label>
        <S.Label>
          <img src={Icones.Telefone} alt="ícone de telefone" />
          <input
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
            type="tel"
            placeholder="Telefone"
            required
          />
        </S.Label>
        <S.BtnCadastrar type="submit">Cadastrar</S.BtnCadastrar>
      </S.Form>
    </S.Container>
  )
}

export default Formulario
