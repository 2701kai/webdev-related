[Quelle: git-scm](https://git-scm.com/docs/gittutorial#_managing_branches)

# Managing Branches


A single Git repository can maintain multiple branches of development. To create a new branch named `experimental`, use

<br />
```bash
git branch experimental
```

If you now run

`git branch`

you’ll get a list of all existing branches:

<br />
```bash
  experimental
* master
```

The `experimental` branch is the one you just created, and the `master` branch is a default branch that was created for you automatically. The asterisk marks the branch you are currently on; type

<br />
```bash
git switch experimental
```


to switch to the `experimental` branch.
Now edit a file, commit the change, and switch back to the `master` branch:

<br />
```bash
# edit file, then..
git commit -a
git switch master
```
Check that the change you made is no longer visible, since it was made on the experimental branch and you’re back on the master branch.

You can make a different change on the master branch:

<br />
```bash
# (edit file)
git commit -a
```

at this point the two branches have diverged, with different changes made in each. To merge the changes made in `experimental` into `master`, run

<br />
```bash
git merge experimental
```

If the changes don’t conflict, you’re done. If there are conflicts, markers will be left in the problematic files showing the conflict;

<br />
```bash
git diff
```

will show this. Once you’ve edited the files to resolve the conflicts,

<br />
```bash
git commit -a
```

<br />

will commit the result of the merge. Finally,

<br />

```bash
gitk
```

<br />

will show a nice graphical representation of the resulting history.

At this point you could delete the experimental branch with

<br />
```bash
git branch -d experimental
```

<br />

This command ensures that the changes in the experimental branch are already in the current branch.

If you develop on a branch crazy-idea, then regret it, you can always delete the branch with

<br />
```bash
git branch -D crazy-idea
```

<br />

---

> VSCode Terminal:

<br />
```bash
mkdir branch-out
cd branch-out
# in meinem "code" Ordner erstellt, git init also nicht nötig..
touch README.md
git branch content
git checkout content
```

<br /> 
oder 
</br>

<br />

```bash
git checkout -b content
# shorthand, thanx Gaël!
```
</br>

> das hier bisher auf "main" erstellt.. - jetzt also switch to content by:

<br />

```bash
git checkout content
```
</br>
