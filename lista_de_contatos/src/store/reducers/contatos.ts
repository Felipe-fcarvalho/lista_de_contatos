import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    { id: 1, nome: 'Maria Silva', email: 'maria@email.com', telefone: '11 91234-5678' }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const jaExisteContato = state.itens.find(
        (c) => c.email.toLowerCase() === action.payload.email.toLowerCase()
      )
      if (jaExisteContato) {
        alert('Já existe um contato com esse e-mail')
        return
      }
      const ultimo = state.itens[state.itens.length - 1]
      const novo = {...action.payload, id: ultimo ? ultimo.id + 1 : 1}
      state.itens.push(novo)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index >= 0 ) {
        state.itens[index] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    }
  }
})

export const { cadastrar, editar, remover } = contatoSlice.actions
export default contatoSlice.reducer
