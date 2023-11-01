# Lassen wir Mario laufen - DOM-Tastaturereignisse

Wir wollen Mario mit Hilfe der Tastatur laufen lassen.

![Mario Walk](assets/mario-walk.gif)

## Aufgabe 1

- Erstelle eine Datei `script.js` und verknüpfe sie mit der mitgelieferten Datei `index.html`.

## Aufgabe 2

- Innerhalb der Datei `script.js`:

  - Erstelle eine Variable namens `mario`, die das HTML-Element mit der ID `mario` enthält,
  - Erstelle eine Variable namens `imgMario`, die das HTML-Element `img` enthält,
  - Setze die Quelle des Bildes auf `mario-stand.git` - um diese `imgMario`-Variable zu erstellen.
    > Tipp: Du kannst das `src`-Attribut ändern, indem du `myImage.src = "newSource.png"` verwendest.

## Aufgabe 3

- Erstelle eine Funktion `stopMario`, die Mario anhält, wenn sie aufgerufen wird.
  > Tipp: Verwende das `src`-Attribut, um .gif zu ändern.

## Aufgabe 4

- Erstelle eine Funktion `moveMario`, die auf Tastaturereignisse reagiert;
  - Du kannst auch Stile global/außerhalb der Funktion auf Mario anwenden, wenn du sie brauchst,
- Prüfe, ob das `src`-Attribut auf `mario-walk.gif` gesetzt ist, wenn nicht, setze es auf `mario-walk.gif`,
- Prüfe, welche Pfeiltaste gedrückt wurde (Pfeil links oder Pfeil rechts) und wende die richtigen Stile aus der Beschreibung unten an:

#### Gehen

- Wenn die rechte Pfeiltaste gedrückt wurde, sollte Mario 10 Pixel nach rechts bewegt werden.
- Wenn die linke Pfeiltaste gedrückt wurde, sollte Mario 10 Pixel nach links bewegt werden.

#### Halte die Taste gedrückt

- Mario sollte sich so lange bewegen, wie eine Taste gedrückt wird.

#### Drehen

- Du willst, dass Mario sich in die Richtung dreht, in die er geht.
  > Tipp: Ein Bild kann mit `scale: -1 1;` gespiegelt werden - [siehe MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scale).

#### Stillstehen

- Wenn keine Taste gedrückt wird, soll Mario sich nicht bewegen, sondern das Standbild `assets/mario-stand.gif` anzeigen.

## Schritt 5

- Füge einen Ereignislistener (engl. "event listener") hinzu, der auf ein Ereignis wartet, wenn du eine Taste auf deiner Tastatur drückst. Verwende die Funktion `moveMario` als Callback.
- Füge einen Ereignis-Listener hinzu, der auf ein Ereignis wartet, wenn du eine Taste auf deiner Tastatur loslässt. Verwende die Funktion `stopMario` als Callback.
