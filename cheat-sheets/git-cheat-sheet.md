# github cheat sheet


> [playlist youtube: about github](https://www.youtube.com/playlist?list=PLEECHwYvRwF_lt89ZNWPERDw_t0nqkQIt)

### Setup

```git
git config --global user.email "deine-mail@xy.com"
​
git config --global user.name "username"
```

### Lokales Repository erzeugen
> any folder, darin
```git
git init
```



### Bin ich in einem git repository?
```git
git status
```

### Womit bin ich verbunden?

```git
git remote -v
```
#### view comments
```git
git log
```

#### Zurückgehen zu previous version / Back to master (= main branch)
```git
git checkout <hash> / git checkout master
```

#### Lokale Datei auf github pushen:
```git
git add .
git commit -m update
git push
```

</br>

#### Neuen Zweig anlegen / dahin wechseln:

```bash
git branch -b karl-heinz
# = create branch and switch to newly created branch
# shorthand for
# git branch karl-heinz
# git checkout karl-heinz
```

</br>

#### Zweige anzeigen / wo bin ich?

```bash
git branch
# lokal
git branch --remote
# remote
```

</br>

#### Zweig löschen:

```bash
git branch -D oops-aus-versehen-angelegt
# switch -D: delete immediately
git branch -d oops-aus-versehen-angelegt
# nicht probiert, prüft, glabe ich, vor dem Löschen, ob alles 
# committed wurde vor dem Löschen

```

</br>

#### My Commits pushen:

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

#### Merge Branches / Commits zu main hinzufügen:
</br>

```bash
git checkout main
# switch to main

git merge karl-heinz
# to merge karl-heinz contibution into main
```

</br>

#### x:
</br>

```bash
```

</br>

#### y:
</br>

```bash
```

</br>

#### z:
</br>

```bash
```

