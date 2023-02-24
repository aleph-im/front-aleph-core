export type Tab = {
  name: string
  component: JSX.Element
  disabled?: boolean
  label?: string
}

export type TabsProps = {
  tabs: Tab[]
  onTabChange?: (fromIndex: number, toIndex: number) => void
  defaultSelected?: number
}

export type StyledTabItemProps = {
  isSelected?: boolean
  isDisabled?: boolean
}