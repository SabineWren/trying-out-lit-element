declare const enum Category {
	First=1,
	Second=2,
	Third=3
}
type Row = {
	Id: number; Descriptor: string; Cat: Category
	Cells: number[]
}
type RowView = {
	Id: number; Descriptor: string; Cat: string
	Cells: string[]
}
