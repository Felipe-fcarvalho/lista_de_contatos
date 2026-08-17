import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  padding: 32px 16px;
  position: relative;
`

export const Title = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font.title};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.fontSizeLarge};
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

export const Form = styled.form`
  display: block;
  width: 100%;
  padding: 32px;
  border-radius: 6px;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.color.neutralSecondary};
  background-color: white;
  box-shadow: 4px 4px 0;
  text-align: center;
`

export const Icone = styled.img`
  height: 24px;
  width: 24px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  margin-block: 8px;
  margin-left: 8px;
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  border: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.28);
  color: ${({ theme }) => theme.color.neutralSecondary};
`

export const Erro = styled.small`
  display: block;
  text-align: start;
  color: ${({ theme }) => theme.color.danger};
  margin: 0 0 12px 36px;
`

export const Botao = styled.button`
  padding: 12px 16px;
  margin-top: 24px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.fontSizeMedium};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    outline: 1px solid ${({ theme }) => theme.color.neutralSecondary};
    box-shadow: 2px 2px 0 rgb(0, 0, 0);
  }
`

export const BtnCadastrar = styled(Botao)`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.color.success};
  color: ${({ theme }) => theme.color.neutralPrimary};
`

export const BotaoVoltar = styled(Botao)`
  margin: 0;
  position: fixed;
  top: 8px;
  left: 10px;
  background-color: ${({ theme }) => theme.color.neutralTertiary};
`

export const Voltar = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`
