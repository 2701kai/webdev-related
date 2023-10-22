![Alt text](image.png)

## PARENT relative, CHiLD absolute

![Alt text](image-1.png)

---

# Tables

tr = tablerow
td = table data
thead, th

![Alt text](image-2.png)

![Alt text](image-3.png)

![Alt text](image-4.png)

![Alt text](image-5.png)

![Alt text](image-6.png)

![Alt text](image-7.png)

![Alt text](image-8.png)

th colspan="2" scope="" (??)

![Alt text](image-9.png)

tr:nth

```css
/* Wähle jeden dritten Benutzer ab dem vierten Benutzer aus */
tr:nth-child(3n + 4) {
  /* Deine Stilregeln für die ausgewählten Benutzer hier einfügen */
}
```

![Alt text](image-10.png)

aus [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)

![Alt text](image-11.png)

```css
tbody > tr:nth-of-type(3) td:nth-child(2),
tr:nth-of-type(6) td:nth-child(2) {
  background-color: #ffbbbb;
}

/* Ramis Lösung, viel geiler:  */
tr:nth-child(3n + 1) + td:nth-child(2) {
  background-color: #ffbbbb;
}
```
