import type ContatoModel from '../../models/Contato'

type Props = ContatoModel

export const Contato = ({id, nome, email, telefone}: Props) => {
  return (
    <>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type='submit'>Salvar</button>
        <button type='button'>Cancelar</button>
      </form>
    </>
  )
}
