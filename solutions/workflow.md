# Workflow

#### Aufgabe 14.6.2023

**Anweisungen**
* Erstelle einen Ordner.
* Erstelle ein Git Repo in diesem Ordner.
* Erstelle eine Readme-Datei in dem Ordner.
* Nimm Änderungen an der Readme-Datei vor.
* Füge die Änderungen in die Readme-Datei ein. Überprüfe den Status des Repositorys. Hinterlasse dann eine Commit-Nachricht und überprüfe den Status noch einmal.
* Welchen Befehl solltest du verwenden, um den Status des Repositorys zu überprüfen? Schreibe deine Antwort in dieses Readme.
* Nimm weitere Änderungen an der Readme-Datei vor. Verwende den Kurzbefehl zum Hinzufügen und Übertragen von Änderungen.
* Überprüfe die Historie des Repositorys.
* Welchen Befehl solltest du verwenden, um die Historie des Repositorys zu überprüfen? Schreibe deine Antwort in diese Readme-Datei.

**Solution**

```bash
mkdir code
cd code
git init
touch ReadMe.md
nano ReadMe.md 
# oder natürlich besser in vs-code editieren..
```
> darin rumtippen, z.B. "I do adore my teachers for their incredible patience", STRG + X, Änderungen speichern, back to CLI:

```bash
git status
git commit -m update
git status
```
> git status sollte verwandt werden, es gibt den Status des Arbeitsverzeichnisses und der Staging-Umgebung zurück

> weitere Veränderungen:

```bash
code .
# öffnet vs-code im jeweiligen Ordner, dort Datei bearbeiten, speichern mit STRG S, dann im Terminal:
git add .
git commit -m update
git push
```

> Historie überprüfen
```bash
git log
# Syntax: git checkout <hash> 
# (also z.B. git checkout b64f3ded18518117afe82d05012104fc3c4f96b1)
# kehrt zu einem
# früheren Bearbeitungszustand / snapshot der Datei zurück.
# best practices: https://www.ionos.com/digitalguide/websites/web-development/git-log/
# log beenden mit 
q
```

#### oh, das hatte ich nicht:

```bash
git commit -am "mein Kommentar"
# (c) Melisa
```