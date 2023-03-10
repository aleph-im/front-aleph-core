import React from 'react'
import { BulletListProps, BulletItemProps } from './types'
import { StyledBulletList, StyledBulletItemIcon, StyledBulletItem, StyledBulletItemIconContainer } from './styles'

export const BulletItem = ({ kind, size, title, text, ...rest }: BulletItemProps) => {
  return (
    <StyledBulletItem {...rest}>
      <StyledBulletItemIconContainer {...{ kind, size }}>
        <StyledBulletItemIcon  {...{ kind, $size: size }} />
      </StyledBulletItemIconContainer>
      <div>
        <span className='tp-h7 m-0'>{title}</span>
        {text && (<p className='m-0'>{text}</p>)}
      </div>
    </StyledBulletItem>
  )
}

export const BulletList = ({
  size = 'big',
  items,
  children,
  ...rest
}: BulletListProps) => {
  return (
    <StyledBulletList {...rest}>
      {(children ? children : (
        items.map((item, i) => <BulletItem key={i} {...item} size={size} />)
      ))}
    </StyledBulletList>
  )
}
