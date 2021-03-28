import { LitElement, css, html } from "lit-element"
import { repeat } from "lit-html/directives/repeat.js"
import { Hello, SharedCss, RowFactory, ToViewMoney, ToViewBare } from "Lib/Lib.js"

const makeRows = RowFactory()
export class MyComponent extends LitElement {
	private rows: RowView[] = []
	connectedCallback() {
		Hello("Lit Element")
		this.onclick = (_e) => this.setView()
		this.setView()
		super.connectedCallback()
	}
	private setView() {
		this.rows = makeRows().map(ToViewMoney)
		this.requestUpdate()
	}
	render() {
		return html `
<style>${SharedCss}</style>
<h3>Lit Element</h3>
<table>
	<tr><th>header</th></tr>
	${repeat(this.rows, (r: RowView) => r.Id, (r, _i) => html `
	<tr>
		<td>${r.Descriptor}</td>
		${r.Cells.map(c => html`<td>${c}</td>`)}
	</tr>`)}
</table>`
	}

	static get styles() {
		return css `
		h3 { margin: 0; }
		td { padding: 1px; }
		`
	}
}
