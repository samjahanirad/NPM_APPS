# NPM Apps

The official app catalog for [NPM Desktop](https://github.com/samjahanirad/NPM_Desktop).

NPM Desktop is a **manager** for npm apps. The apps live here. The manager reads
[`catalog.json`](catalog.json) (read-only), **clones** an app from GitHub when you
install it, runs `npm install`, then lets you **start/stop** it on a host:port you
choose and shows whether it's running.

## Apps

| App | Description |
| --- | --- |
| 🕐 **CEO Clock** | A 24-hour schedule clock that shows what you should be doing right now. Fully customizable time blocks. |

## App format

Each app is a normal npm project that **honours `PORT` and `HOST` env vars**:

```
apps/<id>/
  package.json     # must define a "start" script
  server.js        # read process.env.PORT / process.env.HOST
  ...
```

## Adding a new app

1. Create `apps/<your-app-id>/` as a runnable npm project (with a `start` script
   that binds to `process.env.PORT` / `process.env.HOST`).
2. Add an entry to `catalog.json`:
   ```json
   {
     "id": "your-app-id",
     "name": "Your App",
     "description": "What it does.",
     "icon": "🚀",
     "color": "#6965db",
     "repo": "https://github.com/samjahanirad/NPM_APPS.git",
     "subdir": "apps/your-app-id",
     "install": "npm install",
     "start": "npm start",
     "defaultPort": 5002
   }
   ```
3. Commit & push. It now shows up in the NPM Desktop store.
