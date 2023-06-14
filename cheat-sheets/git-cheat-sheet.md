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