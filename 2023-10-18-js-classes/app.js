class SambaDoEnredo {
  constructor(ano, escola, compositor, youTube, enredo) {
    this.ano = ano;
    this.escola = escola;
    this.youTube = "";
    this.compositor = compositor;
    // this.enredo = enredo;
  }
  //display enredo
  displayEnredo() {
    console.log(
      `O enredo da escola ${this.escola} para o ano de ${this.ano} é: ${this.enredo}`
    );
  }
}

const enredo = new SambaDoEnredo(
  2021,
  "Mocidade Independente de Padre Miguel",
  "André Diniz"
);
enredo.enredo = "A Sinfonia Insana de um Vila-Lobos Suburbano";
enredo.displayEnredo();
console.log(enredo);

const enredo2 = new SambaDoEnredo(1999, "Mocidade", "..no lo so..");
enredo2.youTube = "https://youtu.be/2PLUkOMJ7do?si=vgu__rvq4M-oq-L5";
enredo2.enredo = "Villa-Lobos e a Apoteose Brasileira";
enredo2.displayEnredo();
console.log(enredo2);

// Child Method: displaySamba

enredo2.letras =
  "https://www.letras.mus.br/mocidade-independente-de-padre-miguel/473682/";

class SambaDoEnredoLetras extends SambaDoEnredo {
  constructor(ano, escola, compositor, youTube, enredo, letras) {
    // super(ano, escola, compositor, youTube, enredo);
    super(ano, escola, compositor, youTube);
    this.enredo = enredo;
    this.letras = letras;
  }
  displaySamba() {
    console.log(
      `O samba da escola ${this.escola} para o ano de ${this.ano} é: ${this.letras}`
    );
  }
}

console.log(enredo2);
