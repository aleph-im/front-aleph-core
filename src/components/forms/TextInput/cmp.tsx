import React, { ForwardedRef, forwardRef, useCallback, useMemo, useState } from 'react'
import FormError from '../FormError'
import { StyledFormLabel, StyledTextInputWrapper } from '../styles.forms'
import { StyledTextInputField, StyledTextInputContainer as StyledTextInputContainer } from './styles'
import { TextInputProps } from './types'

export const TextInput = forwardRef(({
  name,
  label,
  className,
  focus,
  error,
  button,
  buttonStyle = 'wrapped',
  placeholder = name,
  ...rest
}: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [isFocus, setIsFocus] = useState(focus)
  const handleFocus = useCallback(() => setIsFocus(true), [setIsFocus])
  const handleBlur = useCallback(() => setIsFocus(false), [setIsFocus])

  const isFocusClass = useMemo(() => isFocus || focus ? '_focus' : '', [isFocus, focus])

  // @note: Storybook testing purposes
  const classes = useMemo(() => isFocusClass + (className || ''), [isFocusClass, className])

  return (
    <StyledTextInputWrapper>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledTextInputContainer {...{ button, buttonStyle, className: isFocusClass }}>
        <StyledTextInputField
          {...{
            ref,
            button,
            buttonStyle,
            placeholder,
            className: classes,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...rest,
          }} />
        {button}
      </StyledTextInputContainer>
      {error && <FormError error={error} />}
    </StyledTextInputWrapper>
  )
})

TextInput.displayName = 'TextInput'

export default TextInput
