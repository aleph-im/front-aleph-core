import Button from '../Button'

export type NavbarProps = {
    withLabel?: boolean
    withLogo?: boolean
    navLinks?: React.FC[]
    navButtons?: Array<typeof Button>
}

export type ResponsiveNavBarProps = {
    isOpen?: boolean
}

export type NavlinkProps = {
  withSlash?: boolean
}