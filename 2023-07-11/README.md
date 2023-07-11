# Font Family

![Alt text](image.png)

## Google Fonts lokal installieren:

![Alt text](image-1.png)

```bash
cd /usr/share/fonts
sudo mkdir googlefonts
sudo unzip -d ./googlefonts ~/Downloads/"Deine Schrift".zip
cd ..
sudo chmod -R --reference=opentype googlefonts
# Schrift registrieren:
sudo fc-cache -fv
# ist sie installiert?
fc-match "Deine Schrift"
```

## Google Fonts zum Projekt hinzufügen:

![Alt text](image-2.png)

![Alt text](image-3.png)

![Alt text](image-4.png)

