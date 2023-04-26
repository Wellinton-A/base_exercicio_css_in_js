import { FormEvent, SetStateAction, useState } from 'react'

import { StyledButton, StyledForm, StyledInput } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <StyledButton type="submit">Pesquisar</StyledButton>
    </StyledForm>
  )
}
export default FormVagas
