import { type SubmitEvent, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import { cadastrar } from '../../store/reducers/contatos'
import * as S from './styles'
import * as Icones from '../../assets/icons'
import { filtrarNome, validarEmail, validarNome, validarTelefone } from '../../utils/validacoes'

type Erros = {
  nome: string
  email: string
  telefone: string
}

const Formulario = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [erros, setErros] = useState<Erros>({
    nome: '',
    email: '',
    telefone: '',
  })

  function validar() {
    const inputErro: Erros = {
      nome: '',
      email: '',
      telefone: '',
    }

    if (!validarNome(nome)) {
      inputErro.nome = 'Digite seu nome completo.'
    }

    if (!validarEmail(email)) {
      inputErro.email = 'Digite um e-mail válido.'
    }

    if (!validarTelefone(telefone)) {
      inputErro.telefone = 'Digite um número de telefone válido.'
    }

    setErros(inputErro)
    return !inputErro.nome && !inputErro.email && !inputErro.telefone
  }

  function cadastrarContato(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validar()) return

    dispatch(
      cadastrar({
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim(),
      }),
    )
    navigate('/')
  }

  return (
    <S.Container>
      <S.BotaoVoltar type="button" onClick={() => navigate('/')}>
        <S.Voltar>
          <img src={Icones.Seta} alt="ícone de seta" />
          Voltar
        </S.Voltar>
      </S.BotaoVoltar>

      <S.Form onSubmit={cadastrarContato}>
        <S.Title>Novo Contato</S.Title>
        <S.Label>
          <S.Icone src={Icones.Contato} alt="ícone de contato" />
          <S.Input
            value={nome}
            onChange={({ target }) =>
              setNome(filtrarNome(target.value))
            }
            type="text"
            placeholder="Nome completo"
          />
        </S.Label>
        {erros.nome && <S.Erro>{erros.nome}</S.Erro>}

        <S.Label>
          <S.Icone src={Icones.Email} alt="ícone de email" />
          <S.Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Seu.email@email.com"
          />
        </S.Label>
        {erros.email && <S.Erro>{erros.email}</S.Erro>}

        <S.Label>
          <S.Icone src={Icones.Telefone} alt="ícone de telefone" />
          <S.Input
            as={IMaskInput}
            mask="(00) 00000-0000"
            value={telefone}
            onAccept={(value: string) => setTelefone(value)}
            type='tel'
            placeholder="(11) 91234-5678"
          />
        </S.Label>
        {erros.telefone && <S.Erro>{erros.telefone}</S.Erro>}

        <S.BtnCadastrar type="submit">Cadastrar</S.BtnCadastrar>
      </S.Form>
    </S.Container>
  )
}

export default Formulario
