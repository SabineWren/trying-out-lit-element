export const Hello = function(text: string): void {
	console.log(`Hello ${text}!`)
}

export const Rows: Row[] = [
	{ Id: 1, Descriptor: "Row 1", Cat: Category.First, Cells: [1, 2, 3] },
	{ Id: 1, Descriptor: "Row 1", Cat: Category.First, Cells: [1, 2, 3] },
	{ Id: 1, Descriptor: "Row 1", Cat: Category.First, Cells: [1, 2, 3] },
]
const catToView = function(c: Category): string {
	switch(c) {
	case Category.First: return "First"
	case Category.Second: return "Second"
	case Category.Third: return "Third"
	}
}
const toView = (numToView: (n: number) => string) =>
	(r: Row): RowView =>
({
	Id: r.Id, Descriptor: r.Descriptor, Cat: catToView(r.Cat),
	Cells: r.Cells.map(numToView),
})
export const ToViewMoney = toView((n: number) => "$" + (n / 100.0).toFixed(0))
export const ToViewPercent = toView((n: number) => "%" + (n / 100.0).toFixed(2))

export const SharedCss = `
* { color: purple; }
`
