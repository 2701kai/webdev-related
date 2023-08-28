# Tailwind, Bootstrap, flowbite

![Alt text](image.png)

![Alt text](image-1.png)

![Alt text](image-2.png)

## Tailwind

![Alt text](image-3.png)

### [avoid code duplication by creating reusable components](https://youtu.be/mr15Xzb1Ook?si=D4tbl-2Ix6DLSEar)

![Alt text](image-4.png)

![Alt text](image-5.png)

![Alt text](image-6.png)

![Alt text](image-7.png)

![Alt text](image-8.png)

```bash
# node version management installieren, falls nicht vorhanden:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# falls Curl nicht installiert:
sudo snap install curl
# danach
command -v nvm
# = ist nvm installiert?

nvm install 16.8.0

nvm use 16.8.0

#Tailwind installieren:
npm install -D tailwindcss
npx tailwindcss init

#package.json kreieren:
npm init






content: ["./src/**/*.{html,js}"],

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

```

![Alt text](image-9.png)

---

![Alt text](image-10.png)

![Alt text](image-11.png)

![Alt text](image-12.png)

### browser style sheet < @layer base < utilities < code aoutside layers

![Alt text](image-13.png)

mit erster Zeile wird importance
