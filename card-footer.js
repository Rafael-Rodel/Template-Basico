class CardFooter extends HTMLElement {
  connectedCallback() {
    const titulo = this.getAttribute("titulo");
    const conteudo = this.getAttribute("conteudo");
    const imagem = this.getAttribute("imagem");

    this.innerHTML = `
      <div class="card_footer">
        <h2>${titulo}</h2>
        <img src="${imagem}" alt="${titulo}" />
        <p>${conteudo}</p>
        <button>${titulo}</button>
      </div>
    `;
  }
}

customElements.define("card-footer", CardFooter);