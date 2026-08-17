import styled from 'styled-components'

// export const Card = styled.div`
//   max-width: 900px;
//   width: 100%;
//   padding: 32px;
// `
// export const Nome = styled.h1`
//   font-family: ${({theme}) => theme.font.title};
//   color: ${({theme}) => theme.color.neutralSecondary};
//   font-weight: bold;

// `

const colunas = `
  grid-template-columns: 40px 2fr 2fr 1.5fr 90px;
  align-items: center;
`

export const Linha = styled.li`
  display: grid;
  ${colunas}
  padding: 16px ${({ theme }) => theme.padding.lg};
  transition: background-color 0.15s ease;

  &:nth-child(even) {
    background-color: #FAFAFA;
  }

  &:hover {
    background-color: #F2F0FC;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #F5F5F5;
  }
`

export const Checkbox = styled.input`
  margin-top: 12px;
`

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
`

export const InputMask = styled.input`
  width: 100%;
  padding: 10px;
`

export const Nome = styled.strong``

export const Texto = styled.p``

export const Erro = styled.small`
  color: ${({ theme }) => theme.color.danger};
  margin-top: 4px;
`

export const Acoes = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const BotaoIcone = styled.button`
  margin: 0;
`

export const BotaoTexto = styled.button`
  margin: 0;
`
