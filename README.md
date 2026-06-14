# NPM Apps

The official app catalog for [NPM Desktop](https://github.com/samjahanirad/NPM_Desktop).

NPM Desktop is just a **core** launcher. The apps live here. The core reads
[`catalog.json`](catalog.json) (read-only), and lets you **add** an app (installed
to your machine so it works offline) or **remove** it.

## Apps

| App | Description |
| --- | --- |
| 🕐 **CEO Clock** | A 24-hour schedule clock that shows what you should be doing right now. Fully customizable time blocks. |

## Adding a new app

1. Create `apps/<your-app-id>/index.html` — a self-contained HTML file (inline CSS/JS).
2. Add an entry to `catalog.json`:
   ```json
   {
     "id": "your-app-id",
     "name": "Your App",
     "description": "What it does.",
     "icon": "🚀",
     "color": "#6965db",
     "entry": "apps/your-app-id/index.html"
   }
   ```
3. Commit & push. It now shows up in the NPM Desktop store.
