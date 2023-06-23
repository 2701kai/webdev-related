# Zoom Stress

> einfrierende Bildschirme, *"kann nicht Teilen beenden"*, Kamera funktioniert nicht etc.

## zuerst: Update auf [Ubuntu 22.04 LTS](./ubuntu_22.04.md)

---


## X11 aktiv?

Rausfinden mit

```bash
echo $XDG_SESSION_TYPE
```

sollte anzeigen: **X11**

falls nicht:

```bash
sudo nano /etc/gdm3/custom.conf
```

entfernen von "#" vor 

```bash
WaylandEnable=false
```

Danach STRG + x, auf die Frage "Speichern?" mit y antworten, Schlepptop neu starten, fertig.

---

Dann aktuelle ZOOM - Version installieren (**Ubuntu 22.04, 64 bit, linux**):

### [Download Zoom (startet sofort)](https://zoom.us/client/5.15.0.4063/zoom_amd64.deb)

dann in "Download - Ordner" wechseln, diesen im TERMINAL öffnen, dann Folgendes eingeben:

```bash
sudo dpkg -i zoom_amd64.deb
```

Zickt Zoom rum, das Übliche:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt --purge autoremove
sudo apt full-upgrade
sudo apt --fix-broken install
```
