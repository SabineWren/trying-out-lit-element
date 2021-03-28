import { LitElement, css, html } from "lit-element"
import { repeat } from "lit-html/directives/repeat.js"
import { Hello, SharedCss, Rows, ToViewMoney, ToViewPercent } from "Lib/Lib.js"

export class MyComponent extends LitElement {
	private rows: RowView[] = []
	connectedCallback() {
		Hello("Lit Element")
		this.rows = Rows.map(ToViewMoney)
		super.connectedCallback()
	}
	render() {
		return html `
<style>${SharedCss}</style>
<h3>Hello From Lit Element</h3>
<table>
	<tr><td>TEST</td></tr>
	${repeat(this.rows, (r: RowView) => r.Id, (r, _i) => html `
	<tr>
		<td>${r.Descriptor}</td>
		${r.Cells.map(c => `<td>${c}</td>`)}
	</tr>`)}
</table>`
	}

	static get styles() {
		return css `
		h3 { margin: 0; }
		td { padding: 2px; }
		`
	}
}
