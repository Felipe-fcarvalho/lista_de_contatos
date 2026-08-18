import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${({theme}) => theme.color.success};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    outline: 1px solid ${({ theme }) => theme.color.neutralSecondary};
    box-shadow: 2px 2px 0 rgb(0, 0, 0);
  }
`
