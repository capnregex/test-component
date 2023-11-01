import cssText from './test-component.scss'
  
class TestComponent extends HTMLElement {
  constructor() {
    super();
    this.name = 'World';
    this.shadow = this.attachShadow({mode: 'open'});
    this.sheet = new CSSStyleSheet();
    this.sheet.replaceSync(cssText);
    this.shadowRoot.adoptedStyleSheets = [this.sheet];
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

  connectedCallback() {
    this.shadow.innerHTML = `<span>Hello ${ this.name }!</span>`;
    // this.setAttribute('name', this.name);
  }

  disconnectedCallback() {
  }

  adoptedCallback() {
  }
}

window.customElements.define('test-component', TestComponent);
