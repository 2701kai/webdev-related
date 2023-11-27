# Async und Defer: Unterschiede

In JavaScript, wenn du externe Skripte in deine Webseite einbindest, kannst du die Attribute `async` und `defer` verwenden, um das Ladeverhalten der Skripte zu steuern. Beide Attribute beeinflussen, wie und wann ein Skript ausgeführt wird, ohne das Laden der restlichen Seite zu blockieren. Hier sind die grundlegenden Unterschiede:

### Async (`async`)

1. **Laden:** Das Skript wird asynchron geladen, d.h. das Herunterladen des Skripts erfolgt im Hintergrund, parallel zum Laden der restlichen Inhalte der Webseite.
2. **Ausführung:** Sobald das Skript heruntergeladen ist, wird es sofort ausgeführt. Dies kann zu einem beliebigen Zeitpunkt während des Ladens der Seite geschehen.
3. **Anwendungsfälle:** Ideal für Skripte, die unabhängig vom Rest der Seite sind, wie Analysetools oder Werbung.
4. **Kontrolle:** Weniger Kontrolle über die Reihenfolge der Skriptausführung, besonders wenn mehrere Skripte `async` nutzen.

### Defer (`defer`)

1. **Laden:** Ähnlich wie bei `async` wird das Skript im Hintergrund geladen, ohne das Laden der Seite zu blockieren.
2. **Ausführung:** Im Gegensatz zu `async` werden `defer`-Skripte erst ausgeführt, nachdem das gesamte HTML-Dokument geladen und geparst wurde (aber bevor das `DOMContentLoaded`-Ereignis ausgelöst wird).
3. **Anwendungsfälle:** Geeignet für Skripte, die auf das gesamte DOM zugreifen müssen und keine Priorität beim Laden haben.
4. **Kontrolle:** Bietet eine bessere Kontrolle über die Ausführungsreihenfolge; Skripte werden in der Reihenfolge ausgeführt, in der sie im HTML-Dokument erscheinen.

### Zusammenfassung

- **Async:** Für unabhängige Skripte, wird sofort nach dem Herunterladen ausgeführt, Reihenfolge nicht garantiert.
- **Defer:** Für DOM-abhängige Skripte, wird nach dem Parsen des HTML ausgeführt, Reihenfolge wird beibehalten.

Beide Optionen verbessern die Ladezeit der Webseite, indem sie verhindern, dass das Laden und Ausführen von Skripten den Rendering-Prozess der Seite blockiert.
