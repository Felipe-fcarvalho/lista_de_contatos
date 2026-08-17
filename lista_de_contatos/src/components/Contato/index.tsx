import { useState, useEffect, type ChangeEvent, type SubmitEvent } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { remover, editar } from '../../store/reducers/contatos'
import type ContatoModel from '../../models/Contato'
import * as Icons from '../../assets/icons'
import * as S from './styles'

type Props = ContatoModel

type FormState = {
  nome: string
  email: string
  telefone: string
}

const somenteNumeros = (valor: string) => valor.replace(/\D/g, '')

const validarNome = (nome: string) => {
  const nomeValidado = nome.trim()
  return nomeValidado.length >= 6 && nomeValidado.includes(' ')
}

const ValidarTelefone = (telefone: string) => {
  return somenteNumeros(telefone).length === 11
}

const ValidarEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const Contato = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useAppDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [estaSelecionado, setSelecionado] = useState(false)
  const [erros, setErros] = useState<Partial<FormState>>({})

  const [form, setForm] = useState<FormState>({ nome, email, telefone })

  useEffect(() => {
    setForm({ nome, email, telefone })
  }, [nome, email, telefone])

  function atualizarCampo(campo: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      let valor = e.target.value

      if (campo === 'nome') {
        valor = valor.replace(/[0-9]/g, '')
      }

      setForm((prev) => ({
        ...prev,
        [campo]: valor,
      }))
    }
  }

  function validarFormulario() {
    const novosErros: Partial<FormState> = {}

    if (!validarNome(form.nome)) {
      novosErros.email = 'Digite nome e sobrenome'
    }

    if (!ValidarEmail(form.email)) {
      novosErros.email = 'Digite um e-mail válido'
    }

    if (!ValidarTelefone(form.telefone)) {
      novosErros.telefone = 'Digite um telefone completo'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  function iniciarEdicao() {
    setForm({ nome, email, telefone })
    setErros({})
    setEstaEditando(true)
  }

  function cancelarEdicao() {
    setForm({ nome, email, telefone })
    setErros({})
    setEstaEditando(false)
  }

  function salvar(e: SubmitEvent) {
    e.preventDefault()

    if (!validarFormulario()) return

    dispatch(
      editar({
        id,
        nome: form.nome.trim(),
        email: form.email.trim(),
        telefone: form.telefone.trim(),
      }),
    )

    setEstaEditando(false)
  }

  return (
    <S.Linha as="form" onSubmit={salvar}>
      <S.Checkbox
        type="checkbox"
        checked={estaSelecionado}
        onChange={(e) => setSelecionado(e.target.checked)}
      />
      {estaEditando ? (
        <>
          <S.Campo>
            <S.Input
              value={nome}
              onChange={atualizarCampo('nome')}
              type="text"
            />
            {erros.nome && <S.Erro>{erros.nome}</S.Erro>}
            <S.Input
              value={email}
              onChange={atualizarCampo('email')}
              type="text"
            />
            {erros.email && <S.Erro>{erros.email}</S.Erro>}
            <S.Input
              value={telefone}
              onChange={atualizarCampo('telefone')}
              type="text"
            />
            {erros.telefone && <S.Erro>{erros.telefone}</S.Erro>}
          </S.Campo>
          <S.Acoes>
            <S.BotaoTexto type="submit">Salvar</S.BotaoTexto>
            <S.BotaoTexto type="button" onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoTexto>
          </S.Acoes>
        </>
      ) : (
        <>
          <S.Nome>{nome}</S.Nome>
          <S.Texto>{email}</S.Texto>
          <S.Texto>{telefone}</S.Texto>
          <S.Acoes>
            <S.BotaoIcone
              type="button"
              className="editar"
              onClick={iniciarEdicao}
            >
              <img
                src={Icons.Editar}
                alt="ícone editar contato"
                width={16}
                height={16}
              />
            </S.BotaoIcone>
            {estaSelecionado && (
              <S.BotaoIcone
                type="button"
                className="remover"
                onClick={() => dispatch(remover(id))}
              >
                <img
                  src={Icons.Lixeira}
                  alt="ícone de lixeira"
                  width={16}
                  height={16}
                />
              </S.BotaoIcone>
            )}
          </S.Acoes>
        </>
      )}
    </S.Linha>
  )
}
