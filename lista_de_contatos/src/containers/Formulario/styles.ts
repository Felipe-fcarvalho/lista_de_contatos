import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 32px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 6px;
  margin: 10px;
  border: 2px solid ${({theme}) => theme.color.neutralSecondary};
  background-color: white;
  box-shadow: 4px 4px 0;
  }

  input {
    padding: 8px;
    margin-block: 6px;
    width: 280px;
    border-radius: 4px;
    border: none;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.28);
    color: #8a8888;
  }
`

export const Label = styled.div`
  display: flex;
  align-itens: center;
  margin-block: 10px;

  img {
    max-width: 24px;
    margin-right: 8px;
  }
`

export const BtnCadastrar = styled.button`
  padding: 16px 24px;
  margin-top: 24px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${({theme}) => theme.color.success};
  color: ${({theme}) => theme.color.neutralPrimary};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    outline: 1px solid ${({theme}) => theme.color.neutralSecondary};
    box-shadow: 2px 2px 0 rgb(0, 0, 0);
  }
`
