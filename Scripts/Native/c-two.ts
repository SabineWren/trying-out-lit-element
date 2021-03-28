import { Hello, SharedCss, RowFactory, ToViewMoney, ToViewBare } from "Lib/Lib.js"

const makeRows = RowFactory()
export class MyComponent2 extends HTMLElement {
	private rows: RowView[]
	constructor() {
		super()
		this.attachShadow({mode: "open"})
		this.onclick = (_e) => this.render()
		this.render()
	}
	connectedCallback() {
		Hello("NATIVE")
		this.render()
	}
	private render() {
		this.rows = makeRows().map(ToViewMoney)
		this.shadowRoot!.innerHTML = `
	<style>
${SharedCss}
h3 { margin: 0; }
td { padding: 1px; }
	</style>
<h3>Native Element</h3>
<table>
	<tr><th>header</th></tr>
	${this.rows.map(r => `
	<tr>
		<td>${r.Descriptor}</td>
		${r.Cells.map(c => `<td>${c}</td>`).join("")}
	</tr>`).join("")}
</table>`
	}
}
