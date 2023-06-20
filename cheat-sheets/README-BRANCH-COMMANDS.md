# Branch Befehle

## &copy; [Rami](https://github.com/rami-mohamad)

> Branch: Es wird nur vom anderen Branch erstellt, wenn neu Branch von main Branch erstellt hat, dann neu Branch hat das gleiche data vom main Branch.

## Wichtige Commands:

1. Neu Branch anliegen und direkt auf den Wechsel:

```bash
git checkout -b <branchname>
```

2. wechsel vom einen Branch zu anderem :

```bash
git checkout <branchname>
```

3. Die Branches listen in deinem Repo und zeigt auf welchem Branch bist du:

```bash
git branch
```

4. Löschen das feature Branch Local:

```bash
git branch -d <branchname>
```

5. Push ein Branch zum remote Repo, damit andere kann es sehen:

```bash
git push origin <branchname>
```

6. Löschen das feature Branch remote:

```bash
git push -d <branchname>
```

7. ein branch mit main mergen, muss man auf branch sein:

```bash
git merge <branchname>
```

#

## Remote Repo:

1. Wenn ein lokal Branch nicht mit einem Remote Repo verbunden, fügen das Server hinzu, um zu pushen.

```bash
git remote add origin <Repo Link>
```

2. Listen das gesamte remote Repos:

```bash
git remote -v
```
