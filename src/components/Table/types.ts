export type SelectorFunction<T> = (row: T) => string | number

type Column = {
  selector: SelectorFunction<object>
  label: string
  sortable?: boolean
  cell?: (row: object) => JSX.Element
}

export type TableProps = {
  columns: Column[]
  data: object[]
}
