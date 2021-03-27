import { Hello } from "Lib/Lib.js"
export class MyComponent2 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot!.innerHTML = `
<h3>Native Element!</h3>`
		Hello("NATIVE")
	}
}

