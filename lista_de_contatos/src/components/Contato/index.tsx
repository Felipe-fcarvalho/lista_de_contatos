import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import type { ChangeEvent, SubmitEvent } from 'react'
import { remover, editar } from '../../store/reducers/contatos'
import type ContatoModel from '../../models/Contato'

type Props = ContatoModel

export const Contato = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useAppDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [form, setForm] = useState({ nome, email, telefone })

  function atualizarCampo(campo: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [campo]: e.target.value })
    }
  }

  function salvar(e: SubmitEvent) {
    e.preventDefault()
    dispatch(editar({ id, ...form }))
    setEstaEditando(false)
  }

  return (
    <>
      {estaEditando ? (
        <form onSubmit={salvar}>
          <input
            value={nome}
            onChange={atualizarCampo('nome')}
            type="text" />
          <input
            value={email}
            onChange={atualizarCampo('email')}
            type="text" />
          <input
            value={telefone}
            onChange={atualizarCampo('telefone')}
            type="text"
          />
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEstaEditando(false)}>
            Cancelar
          </button>
        </form>
      ) : (
        <>
          {nome}
          <p>{email}</p>
          <p>{telefone}</p>
          <button onClick={() => setEstaEditando(true)}>Editar</button>
          <button onClick={() => dispatch(remover(id))}>Remover</button>
        </>
      )}
    </>
  )
}
