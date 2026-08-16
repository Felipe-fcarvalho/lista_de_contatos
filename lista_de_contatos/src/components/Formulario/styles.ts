import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;

  input {
    padding: 4px;
    margin-block: 6px;
    border-radius: 4px;
    border: none;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.28);
    color: #8a8888;
  }
`
