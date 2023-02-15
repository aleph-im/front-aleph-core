type Column = {
  selector: <T>(row: T) => string | number
  label: string
  sortable?: boolean
  cell?: (row: object) => JSX.Element
}

export type TableProps = {
  columns: Column[]
  data: object[]
}
