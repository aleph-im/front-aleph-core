import React from 'react'
import Button from '../Button'
import Icon from '../Icon'
import ObjectImg from '../ObjectImg'
import { ObjectId } from '../ObjectImg/types'
import { StyledCardContentContainer, StyledCardFooterContainer, StyledCardHeader, StyledCardHeaderContainer, StyledCardContainer } from './styles'
import { CardProps } from './types'

export const Card = ({
  headerImg = 'Object1',
  variant = 'block',
  titleInfo,
  title,
  text,
  buttonLabel,
  buttonColor,
  buttonVariant,
  buttonOnClick,
  header,
  content,
  footer,
  ...rest
}: CardProps) => {

  return (
    <StyledCardContainer {...rest}>
      <StyledCardHeaderContainer>
        {header || (variant === 'block' ? <ObjectImg id={headerImg as ObjectId} /> : <img src={headerImg} />)}
      </StyledCardHeaderContainer>
      <StyledCardContentContainer {...{ variant }}>
        {content || (variant === 'block'
          ? (
            <>
              <StyledCardHeader className='tp-h7'>{title}</StyledCardHeader>
              <p className='m-0'>{text}</p>
            </>
          )
          : (
            <>
              <div className='my-xxs'>
                <span className='tp-info m-0'>{titleInfo}</span>
                <StyledCardHeader className='tp-h6'>{title}</StyledCardHeader>
              </div>
              <p className='m-0'>{text}</p>
            </>
          )
        )}
      </StyledCardContentContainer>
      <StyledCardFooterContainer {...{ buttonVariant }} >
        {footer || (
          <Button
            variant={buttonVariant}
            kind="neon"
            size="regular"
            color={buttonColor}
            onClick={buttonOnClick}
          >
            {buttonLabel}{buttonVariant === 'text-only' && <Icon name='arrow-right' className='ml-xs' />}
          </Button>
        )
        }
      </StyledCardFooterContainer>
    </StyledCardContainer>
  )
}

export default Card
