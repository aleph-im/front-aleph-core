import React, { ChangeEvent, useState } from 'react'
import { usePseudoRandomId } from '../../../hooks'
import FormError from '../FormError'
import { StyledFormLabel } from '../styles.forms'
import { RadioGroupContext } from './context'
import { StyledRadioGroupContainer, StyledRadioContainer } from './styles'
import { RadioGroupProps } from './types'

export const RadioGroup = ({
  name,
  value,
  defaultValue,
  onChange: groupOnChange,
  label,
  direction,
  children,
  error,
  ...rest
}: RadioGroupProps) => {
  const [groupValue, setGroupValue] = useState(defaultValue || value)

  const groupName = usePseudoRandomId(name, 'radio-group')

  const contextValue = React.useMemo(
    () => ({
      name: groupName,
      value: groupValue,
      onChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setGroupValue(value)
        groupOnChange && groupOnChange(e, value)
      },
    }),
    [groupName, groupValue, setGroupValue, groupOnChange],
  )

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <StyledRadioGroupContainer {...{ direction, ...rest }}>
        {label && <StyledFormLabel>{label}</StyledFormLabel>}
        <StyledRadioContainer direction={direction}>
          {children}
        </StyledRadioContainer>
        {error && <FormError error={error} />}
      </StyledRadioGroupContainer>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
