import styled from 'styled-components'
import { colunas } from '../../styles/GlobalStyle'

export const Linha = styled.li`
  display: grid;
  ${colunas}
  gap: 12px;
  padding: 16px ${({ theme }) => theme.padding.lg};
  transition: background-color 0.15s ease;

  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: #f2f0fc;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  accent-color: ${({ theme }) => theme.color.backgroundPrimary};
  cursor: pointer;
`

export const Celula = styled.div`
  width: 100%;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 8px;
  border: none;
  border-bottom: 1px solid transparent;
  font-family: ${({ theme }) => theme.font.text};
  font-size: ${({ theme }) => theme.font.fontSizeSmall};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.neutralTertiary};
  }
`

export const Texto = styled.p`
  font-family: ${({ theme }) => theme.font.title};
  font-size: ${({ theme }) => theme.font.fontSizeSmall};
  color: ${({ theme }) => theme.color.neutralSecondary};
`

export const Erro = styled.small`
  color: ${({ theme }) => theme.color.danger};
  width: 100%;
  padding: 0 8px;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
`

export const Acoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

export const BotaoIcone = styled.button`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: #9e9e9e;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: #ececec;
    color: ${({ theme }) => theme.color.textPrimary};
  }

  &.remover:hover {
    background-color: #fdecec;
    color: ${({ theme }) => theme.color.danger};
  }
`

export const BotaoTexto = styled.button`
  margin: 0;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.fontSizeMedium};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    outline: 1px solid ${({ theme }) => theme.color.neutralSecondary};
    box-shadow: 2px 2px 0 rgb(0, 0, 0);
  }
`

export const BotaoSalvar = styled(BotaoTexto)`
  background-color: ${({ theme }) => theme.color.success};
  color: ${({ theme }) => theme.color.neutralPrimary};
`

export const BotaoCancelar = styled(BotaoTexto)`
  background-color: ${({ theme }) => theme.color.danger};
  color: ${({ theme }) => theme.color.neutralPrimary};
`
