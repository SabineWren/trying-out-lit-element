import { LitElement, html } from "lit-element"
import { Hello } from "Lib/Lib.js"

export class MyComponent extends LitElement {
	connectedCallback() {
		Hello("Lit Element")
		super.connectedCallback()
	}
	render() {
		return html `
			<h3>Hello From Lit Element</h3>
		`
	}
}

