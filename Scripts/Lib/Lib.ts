export const Hello = function(text: string): void {
	console.log(`Hello ${text}!`)
}

export const RowFactory = function() {
	let number = 1
	return function() {
		number++
		const rows: Row[] = []
		for (let i = 1; i < 1000; i++) {
			rows.push({
				Id: number + i, Descriptor: `Row ${number + i}`, Cat: Category.Third,
				Cells: [i, number, number, number, number, number, number] })
		}
		return rows
	}	
}

const catToView = function(c: Category): string {
	switch(c) {
	case Category.First: return "First"
	case Category.Second: return "Second"
	case Category.Third: return "Third"
	}
}
const toView = (numToView: (_n: number) => string) =>
	(r: Row): RowView =>
({
	Id: r.Id, Descriptor: r.Descriptor, Cat: catToView(r.Cat),
	Cells: r.Cells.map(numToView),
})
export const ToViewMoney = toView((n: number) => "$" + n.toFixed(0))
export const ToViewBare = toView((n: number) => (n / 100.0).toFixed(0))

export const SharedCss = `
* { color: purple; }
`
