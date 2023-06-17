[Quelle: git-scm](https://git-scm.com/docs/gittutorial#_managing_branches)

# Managing Branches


A single Git repository can maintain multiple branches of development. To create a new branch named `experimental`, use

<br />
```
$ git branch experimental
```

If you now run

` git branch`

you’ll get a list of all existing branches:

<br />
```
  experimental
* master
```

The `experimental` branch is the one you just created, and the `master` branch is a default branch that was created for you automatically. The asterisk marks the branch you are currently on; type

<br />
```
$ git switch experimental
```


to switch to the `experimental` branch.
Now edit a file, commit the change, and switch back to the `master` branch:

<br />
```
(edit file)
$ git commit -a
$ git switch master
```
Check that the change you made is no longer visible, since it was made on the experimental branch and you’re back on the master branch.

You can make a different change on the master branch:

<br />
```
(edit file)
$ git commit -a
```

at this point the two branches have diverged, with different changes made in each. To merge the changes made in `experimental` into `master`, run

<br />
```
$ git merge experimental
```

If the changes don’t conflict, you’re done. If there are conflicts, markers will be left in the problematic files showing the conflict;

<br />
```
$ git diff
```

will show this. Once you’ve edited the files to resolve the conflicts,

<br />
```
$ git commit -a
```

<br />

will commit the result of the merge. Finally,

<br />

```
$ gitk
```

<br />

will show a nice graphical representation of the resulting history.

At this point you could delete the experimental branch with

<br />
```
$ git branch -d experimental
```

<br />

This command ensures that the changes in the experimental branch are already in the current branch.

If you develop on a branch crazy-idea, then regret it, you can always delete the branch with

<br />
```
$ git branch -D crazy-idea
```

<br />
