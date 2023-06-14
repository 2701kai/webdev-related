# Ich mag es zu bewegen

**Anweisungen: Erledige alle Aufgaben im Terminal**
* Erstelle ein Verzeichnis namens `move-it`.
* Erstelle in diesem Verzeichnis eine README-Datei und ein weiteres Verzeichnis mit dem Namen `target`.
* Verschiebe die README-Datei in das Zielverzeichnis.
* Erstelle innerhalb des Verzeichnisses `target` ein weiteres Verzeichnis namens `assets`.
* Benenne das Verzeichnis `assets` in `images` um.
* Entferne das Verzeichnis `move-it`.

<hr />

```bash
mkdir -p move-it/target/assets

touch move-it/ReadMe.md

mv move-it/ReadMe.md move-it/target

mv move-it/target/assets move-it/target/images

rm -r move-it
```

#### Quelle:

[mkdir](https://wiki.ubuntuusers.de/mkdir/)

[mv](https://wiki.ubuntuusers.de/mv/)
