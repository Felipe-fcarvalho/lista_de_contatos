import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { editar, remover } from '../../store/reducers/contatos'
import type ContatoModel from '../../models/Contato'
import * as Icons from '../../assets/icons'
import * as S from './styles'
import { IMaskInput } from 'react-imask'
import {
  validarEmail,
  validarNome,
  validarTelefone,
} from '../../utils/validacoes'

type Props = ContatoModel

type FormState = {
  nome: string
  email: string
  telefone: string
}

export const Contato = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useAppDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [estaSelecionado, setSelecionado] = useState(false)
  const [erros, setErros] = useState<Partial<FormState>>({})

  const [form, setForm] = useState<FormState>({ nome, email, telefone })

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
      novosErros.nome = 'Digite nome e sobrenome'
    }

    if (!validarEmail(form.email)) {
      novosErros.email = 'Digite um e-mail válido'
    }

    if (!validarTelefone(form.telefone)) {
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
          <S.Celula>
            <S.Input
              value={form.nome}
              onChange={atualizarCampo('nome')}
              type="text"
              placeholder="Nome completo"
            />
            {erros.nome && <S.Erro>{erros.nome}</S.Erro>}
          </S.Celula>
          <S.Celula>
            <S.Input
              value={form.email}
              onChange={atualizarCampo('email')}
              type="email"
              placeholder="Seu.email@email.com"
            />
            {erros.email && <S.Erro>{erros.email}</S.Erro>}
          </S.Celula>
          <S.Celula>
            <S.Input
              as={IMaskInput}
              mask="(00) 00000-0000"
              value={form.telefone}
              onAccept={(value: string) =>
                setForm((prev) => ({ ...prev, telefone: value }))
              }
              type="tel"
              placeholder="(11) 91234-5678"
            />
            {erros.telefone && <S.Erro>{erros.telefone}</S.Erro>}
          </S.Celula>
          <S.Acoes>
            <S.BotaoSalvar type="submit" aria-label="Salvar edição">
              &#10003;
            </S.BotaoSalvar>
            <S.BotaoCancelar
              type="button"
              aria-label="Cancelar edição"
              onClick={cancelarEdicao}
            >
              &times;
            </S.BotaoCancelar>
          </S.Acoes>
        </>
      ) : (
        <>
          <S.Celula>{nome}</S.Celula>
          <S.Celula>{email}</S.Celula>
          <S.Celula>{telefone}</S.Celula>
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
