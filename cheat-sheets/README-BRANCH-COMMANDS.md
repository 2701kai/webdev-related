# Branch Befehle

## &copy; [Rami](https://github.com/rami-mohamad)

> Branch: Es wird nur vom anderen Branch erstellt, wenn neu Branch von main Branch erstellt hat, dann neu Branch hat das gleiche data vom main Branch.

## Wichtige Commands:

1. Neuen Branch anliegen und direkt auf den Zweig wechseln:

```bash
git checkout -b <branchname>
```

2. Wechsel vom einem Branch zu einem anderen :

```bash
git checkout <branchname>
```

3. Die Branches listen in deinem Repo und zeigen, auf welchem Branch Du bist:

```bash
git branch
```

4. Löschen des feature Branch Local:

```bash
git branch -d <branchname>
```

5. Push ein Branch zum remote Repo, damit andere es sehen können:

```bash
git push origin <branchname>
```

6. Löschen des feature Branch remote:

```bash
git push origin -d <branchname>
```

7. um ein branch mit main zu mergen, muss man auf branch sein:

```bash
git merge <branchname>
```

#

## Remote Repo:

1. Wenn ein lokaler Branch nicht mit einem Remote Repo verbunden ist, fügt man remote Server hinzu, um zu pushen.

```bash
git remote add origin <Repo Link>
```

2. Listen des gesamten remote Repos:

```bash
git remote -v
```
