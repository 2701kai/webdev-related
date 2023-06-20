# github cheat sheet


> [playlist youtube: about github](https://www.youtube.com/playlist?list=PLEECHwYvRwF_lt89ZNWPERDw_t0nqkQIt)

### Setup

```bash
git config --global user.email "deine-mail@xy.com"
​
git config --global user.name "username"
```

### Lokales Repository erzeugen
> any folder, darin

```bash
git init
```

</br>

### Bin ich in einem git repository?

```bash
git status
```

</br>

### Womit bin ich verbunden?


```bash
git remote -v
```

</br>

### view comments


```bash
git log
```
</br>

### Zurückgehen zu previous version / back to master (= main branch)

```bash
git checkout <hash> / git checkout master
```

</br>

### Lokale Datei auf github pushen:

```bash
git add .
git commit -m update
git push
```

</br>

### Neuen Zweig anlegen / dahin wechseln:


```bash
git branch -b karl-heinz
# = create branch and switch to newly created branch
# shorthand for
# git branch karl-heinz
# git checkout karl-heinz
```

</br>

### Zweige anzeigen / wo bin ich?

```bash
git branch
# lokal
git branch --remote
# remote
```

</br>

### Zweig löschen:

```bash
git branch -D oops-aus-versehen-angelegt
# switch -D: delete immediately
git branch -d oops-aus-versehen-angelegt
# nicht probiert, prüft, glabe ich, vor dem Löschen, ob alles 
# committed wurde vor dem Löschen

```

</br>

### My Commits pushen:

```bash
git checkout karl-heinz
git push
# funktioniert nicht, deshalb
git push --set-upstream origin karl-heinz
# push local (karl-heinz) to remote
#
git commit -am update
# ah, untracked files.. therefor

git add .
git commit -m update
git push
```

</br>

### Merge Branches / Commits zu main hinzufügen:

```bash
git checkout main
# switch to main

git merge karl-heinz
# to merge karl-heinz contibution into main
```

</br>

### Branching:

### [GitHub Branching](./cheat-sheets/branching.md)

### [Branch Commands (&copy; Rami)](./README-BRANCH-COMMANDS.md)

### [Conflicts Local (&copy; Rami)](./README-CONFLICTS-LOCAL.md)

</br>

### y:

```bash
```

</br>

### z:

```bash
```

</br>

### y:

```bash
```

</br>

### z:

```bash
```

### y:

```bash
```

</br>

### z:

```bash
```

### y:

```bash
```

</br>

### z:

```bash
```

