let mobile = "funktioniert";
let Wecker = "klingelt";

mobile = "Schrott";

function sonoStanco() {
  console.log(
    `Mist, Handy ist ${mobile} also kein Wecker + kein Ende, 4 im Bett.`
  );
}

if (mobile === "Schrott" && Wecker !== "funktioniert") {
  sonoStanco();
}
