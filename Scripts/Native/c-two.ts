import { Hello, SharedCss } from "Lib/Lib.js"
export class MyComponent2 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot!.innerHTML = `
	<style>
${SharedCss}
h3 { margin: 0; }
td { padding: 2px; }
	</style>
<h3>Native Element!</h3>`
		Hello("NATIVE")
	}
}

