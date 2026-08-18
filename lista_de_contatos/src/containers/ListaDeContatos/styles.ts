import styled from 'styled-components'
import { colunas } from '../../styles/GlobalStyle'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.neutralPrimary};
  border: 1px solid #ECECEC;
  border-radius: 12px;
  overflow: hidden;
`

export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.lg};
  gap: 12px;
`

export const Titulo = styled.h1`
  font-family: ${({ theme }) => theme.font.title};
  font-size: ${({ theme }) => theme.font.fontSizeLarge};
  font-weight: 700;
  color: ${({ theme }) => theme.color.textPrimary};
`

export const CabecalhoTabela = styled.div`
  display: grid;
  ${colunas}
  padding: 12px ${({ theme }) => theme.padding.lg};
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
`

export const ColunaLabel = styled.span`
  font-family: ${({ theme }) => theme.font.text};
  font-size: ${({ theme }) => theme.font.fontSizeSmall};
  font-weight: 500;
  color: #9E9E9E;
  text-transform: none;
`

export const Corpo = styled.ul`
  list-style: none;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  accent-color: ${({ theme }) => theme.color.backgroundPrimary};
  cursor: pointer;
`

export const Vazio = styled.div`
  padding: ${({ theme }) => theme.padding.lg};
  text-align: center;
  font-family: ${({ theme }) => theme.font.title};
  font-size: ${({ theme }) => theme.font.fontSizeSmall};
  color: #9E9E9E;
`
