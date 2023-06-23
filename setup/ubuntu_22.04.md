# Update von Ubuntu 20.04 LTS auf 22.04 LTS

- natürlich alles im Terminal: `CTRL + SHIFT + t`. Darin:


## Welche Ubuntu - Version habt Ihr?

```bash
lsb_release -a
```

> sollte irgendwas mit 22.04 anzeigen. Falls nicht:

## Upgrade auf Ubuntu Version 22.04 LTS

```bash
sudo apt update && sudo apt upgrade -y

sudo apt --purge autoremove

sudo apt full-upgrade

sudo apt install update-manager-core

cat /etc/update-manager/release-upgrades

sudo do-release-upgrade
```

Das kann ein bisschen dauern. Aber danach habt Ihr alle 22.04 LTS, also die aktuelle Version als "Long Term Support".
