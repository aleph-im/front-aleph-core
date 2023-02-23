export type Tab = {
  name: string
  component: JSX.Element
}

export type TabsProps = {
  tabs: Tab[]
  onTabChange?: (fromIndex: number, toIndex: number) => void
  defaultSelected?: number
}

export type StyledTabItemProps = {
  isSelected: boolean
}