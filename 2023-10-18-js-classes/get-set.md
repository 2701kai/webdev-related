# GET und SET in der objektorientierten Programmierung

`GET` und `SET` sind spezielle Methoden in der objektorientierten Programmierung, mit denen man den Zugriff auf Objekteigenschaften steuern kann. Sie sind häufig in vielen Programmiersprachen wie JavaScript, C#, Java und anderen zu finden.

## GET (Getter)

Ein Getter ist eine Methode, die verwendet wird, um den Wert einer Eigenschaft eines Objekts abzurufen. Er dient dazu, den direkten Zugriff auf die interne Repräsentation einer Eigenschaft zu verbergen und ermöglicht es, zusätzliche Aktionen oder Validierungen durchzuführen, wenn ein Wert abgerufen wird.

### Beispiel in JavaScript

```javascript
class Person {
  constructor() {
    this._name = ""; // Das Unterstrich-Prefix ist eine gängige Konvention, um private Variablen darzustellen.
  }

  get name() {
    console.log("Name wird abgerufen");
    return this._name;
  }
}

const person = new Person();
console.log(person.name); // Ruft den Getter für 'name' auf und gibt "Name wird abgerufen" aus
```

## SET (Setter)

Ein Setter ist eine Methode, die verwendet wird, um den Wert einer Eigenschaft eines Objekts zu setzen. Er dient dazu, den direkten Zugriff auf die interne Repräsentation einer Eigenschaft zu verbergen und ermöglicht es, zusätzliche Aktionen oder Validierungen durchzuführen, bevor ein Wert gesetzt wird.

### Beispiel in JavaScript

```javascript
class Person {
  constructor() {
    this._name = "";
  }

  set name(value) {
    console.log("Name wird gesetzt");
    this._name = value;
  }
}

const person = new Person();
person.name = "Max"; // Ruft den Setter für 'name' auf und gibt "Name wird gesetzt" aus
```

## Warum sind sie nützlich?

1. **Kapselung**: Sie ermöglichen die Kapselung von Daten, was bedeutet, dass die interne Repräsentation von Daten verborgen und von der Art und Weise getrennt wird, wie die Daten nach außen präsentiert werden.
2. **Validierung**: Bevor Daten in einem Objekt gesetzt werden, kann man sie validieren.
3. **Zusätzliche Aktionen**: Man kann zusätzliche Aktionen durchführen, wenn Daten abgerufen oder gesetzt werden, z.B. das Protokollieren von Aktionen.
4. **Lazy Loading**: Beim Abrufen von Daten kann man die Daten "lazy" laden, d.h. nur dann Daten laden, wenn sie tatsächlich benötigt werden.
