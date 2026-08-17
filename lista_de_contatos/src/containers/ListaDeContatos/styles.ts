import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.neutralPrimary};
  border: 1px solid #ECECEC;
  border-radius: 12px;
  overflow: hidden;
`

export const Cabecalho = styled.header`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.lg} ${({ theme }) => theme.padding.lg};
`

export const Titulo = styled.h1`
  font-family: ${({ theme }) => theme.font.title};
  font-size: ${({ theme }) => theme.font.fontSizeLarge};
  font-weight: 700;
  color: ${({ theme }) => theme.color.textPrimary};
`

const colunas = `
  grid-template-columns: 40px 2fr 2fr 1.5fr 90px;
  align-items: center;
`

export const CabecalhoTabela = styled.div`
  display: grid;
  ${colunas}
  padding: 12px ${({ theme }) => theme.padding.lg};
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
`

export const ColunaLabel = styled.span`
  font-family: ${({ theme }) => theme.font.title};
  font-size: 13px;
  font-weight: 500;
  color: #9E9E9E;
  text-transform: none;
`

export const Corpo = styled.ul`
  list-style: none;
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

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  accent-color: ${({ theme }) => theme.color.backgroundPrimary};
  cursor: pointer;
`

export const Nome = styled.span`
  font-family: ${({ theme }) => theme.font.title};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textPrimary};
`

export const Texto = styled.span`
  font-family: ${({ theme }) => theme.font.title};
  font-size: 14px;
  color: #616161;
`

export const Acoes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
`

export const BotaoIcone = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: #9E9E9E;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: #ECECEC;
    color: ${({ theme }) => theme.color.textPrimary};
  }

  &.remover:hover {
    background-color: #FDECEC;
    color: ${({ theme }) => theme.color.danger};
  }
`

export const Vazio = styled.div`
  padding: ${({ theme }) => theme.padding.lg};
  text-align: center;
  font-family: ${({ theme }) => theme.font.title};
  font-size: 14px;
  color: #9E9E9E;
`
