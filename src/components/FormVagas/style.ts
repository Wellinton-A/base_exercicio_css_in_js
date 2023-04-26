import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 767px) {
    display: block;
  }
`

export const StyledInput = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const StyledButton = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 16px;
  }
`
