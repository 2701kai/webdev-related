# Jest: Befehle und Optionen

[zurück](./jest_de.md)

Jest, ein beliebtes JavaScript-Test-Framework, bietet eine Vielzahl von Befehlen und Optionen, um Entwicklern ein anpassbares Testlauf-Erlebnis zu bieten. Hier ist ein Überblick über einige der häufig verwendeten Jest-Befehle.

## Häufige Jest-Befehle

1. **`jest`**:

   - Einfaches Ausführen von `jest` startet all Ihre Tests.

2. **`jest [testPath]`**:

   - Führt Tests in einer bestimmten Datei oder einem bestimmten Verzeichnis aus. Zum Beispiel würde `jest /tests/myTest.js` nur die Tests in der Datei `myTest.js` ausführen.

3. **`jest --watch`**:

   - Startet Jest im Überwachungsmodus. Führt Tests automatisch erneut aus, wenn Dateiänderungen erkannt werden.

4. **`jest --watchAll`**:

   - Führt alle Tests erneut aus, wenn irgendeine Datei geändert wird, anders als bei `--watch`.

5. **`jest --coverage`**:

   - Führt Tests aus und erstellt einen Abdeckungsbericht, der zeigt, welcher Teil Ihres Codes durch Tests abgedeckt wird.

6. **`jest --config=<path/to/json>`**:

   - Gibt eine benutzerdefinierte Konfigurationsdatei an, anstatt die Standard `jest.config.js` zu verwenden.

7. **`jest --testNamePattern=<regex>`**:

   - Führt Tests aus, deren Name dem angegebenen regulären Ausdruck entspricht.

8. **`jest --bail`**:

   - Stoppt die Testsuite sofort beim ersten fehlerhaften Test.

9. **`jest --onlyChanged`**:

   - Führt Tests aus, die sich auf durch Git erkannte geänderte Dateien beziehen.

10. **`jest --verbose`**:

    - Zeigt einzelne Testergebnisse mit der Hierarchie der Testsuite an.

11. **`jest --noStackTrace`**:

    - Deaktiviert die Ausgabe von Stapelverfolgungen für Testergebnisse.

12. **`jest --runInBand`**:

    - Führt alle Tests seriell im aktuellen Prozess aus.

13. **`jest --detectOpenHandles`**:
    - Erkennt möglicherweise auslaufende Handles, die verhindern, dass Jest sauber beendet wird.

Für eine umfassende Liste der Jest-Befehlszeilenoptionen verweisen Sie bitte auf die offizielle [Jest-Dokumentation](https://jestjs.io/docs/cli).
