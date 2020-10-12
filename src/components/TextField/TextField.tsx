import React from "react"
import { StyledTextField } from "./styled"

export interface Props {
  readonly value: string
  readonly handleChange: (value: any) => void
  readonly label: string
  readonly style: React.CSSProperties
}

const TextField = (props: Props): JSX.Element => {
  const { value = "", handleChange = () => {}, label = "" } = props
  return (
    <StyledTextField>
      <span>{label}</span>
      <input {...props} value={value} onChange={handleChange} />
    </StyledTextField>
  )
}

export default TextField
