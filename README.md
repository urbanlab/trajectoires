# 📘 Projet Trajectoires
A React application using Vite, Ant Design, React Router, and a domain-based architecture.
The project interacts with the Grist API via a reverse proxy, both locally (Vite) and in production (Nginx in Docker).

# 🚀 Description
This project is a modern front-end application built with React 18 and Vite, with a business folder structure using :
```
- A local Vite proxy to communicate with the Grist API
- An Nginx reverse proxy in production (Docker)
- Environment variables injected at build time to configure:
- GRIST API : Proxy URL & Token
```

The entire system is packaged in a Docker image (Node → Nginx).

# 🛠️ Technologies
```
- Node (22.20.0)
- Npm (10.9.3)
- React 18
- Vite
- Ant Design
- TypeScript
- Nginx
```

# Node & npm
Install "nvm" to prepare a flexible development environment

# 🔐 Env
Generate file ".env" in the root directory and set up credentials, refer to ".env.sample".
```
VITE_API_GRIST_URL=https://grist.projets.erasme.org/api/docs/htNCkDbWWD8xq8bWhHabME/tables/
VITE_API_GRIST_TOKEN=
```

# 📦 Installation & Développement
| mode | commands | URL |
| ---- | -------- | --- |
| **npm / Vite** | `npm install`<br>`npm run dev` | [http://localhost:5173](http://localhost:5173) |
| **Docker / Nginx** | `docker compose up --build` | [http://localhost:8080](http://localhost:8080) |


# 📁 Development architecture
```
src/
├── _commons       → various reusable resources
├── _components    → reusable UI components
├── _domains       → business logic (types, APIs, components)
├── _hooks         → custom hooks (e.g., useModal)
├── _pages         → application pages
├── _providers     → global context/providers (e.g., modalProvider)
├── _router        → main router
├── _styles        → global styles definitions
├── _types         → global .d.ts files
```
