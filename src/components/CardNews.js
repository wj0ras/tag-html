class Cardnews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymus");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")
        
        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__Right");

        const newsImg = document.createElement("img");
        newsImg.src = "angular.png";
        cardRight.appendChild(newsImg);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {} 
}

customElements.define("card-news", Cardnews);