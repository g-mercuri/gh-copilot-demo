# Todo List Application

Una moderna applicazione Todo List full-stack che utilizza le più recenti tecnologie web.

## 🚀 Stack Tecnologico

### Frontend
- **Astro** - Framework web moderno che offre ottime performance
- **Bootstrap** - Per un'interfaccia utente responsiva e moderna
- **TypeScript** - Per un codice più sicuro e manutenibile

### Backend
- **Express.js** - Framework Node.js per l'API RESTful
- **SQLite** - Database leggero e affidabile
- **CORS** - Per gestire le richieste cross-origin

## 📁 Struttura del Progetto

```
.
├── backend/                # Server Express
│   ├── index.js           # Entry point del server
│   └── package.json       # Dipendenze backend
├── frontend/              # Frontend Astro
│   ├── src/
│   │   ├── components/    # Componenti riutilizzabili
│   │   ├── layouts/       # Layout condivisi
│   │   └── pages/        # Pagine dell'applicazione
│   └── package.json       # Dipendenze frontend
└── package.json           # Script e dipendenze progetto root
```

## 🛠️ Installazione

1. Clona il repository:
\`\`\`bash
git clone <repository-url>
cd ghcopilotdemo
\`\`\`

2. Installa le dipendenze e avvia l'applicazione:
\`\`\`bash
npm run dev
\`\`\`

Questo comando:
- Installerà tutte le dipendenze necessarie (backend e frontend)
- Avvierà il server backend sulla porta 3000
- Avvierà il frontend sulla porta 4321

## 🔥 Funzionalità

- ✅ Creazione di nuovi todo
- ✅ Visualizzazione lista todo
- ✅ Marcatura todo come completati
- ✅ Eliminazione todo
- ✅ Interfaccia responsiva
- ✅ Persistenza dei dati con SQLite

## 🌐 Endpoint API

Il backend espone i seguenti endpoint:

- \`GET /todos\` - Recupera tutti i todo
- \`POST /todos\` - Crea un nuovo todo
- \`PUT /todos/:id\` - Aggiorna lo stato di un todo
- \`DELETE /todos/:id\` - Elimina un todo

## 💻 Sviluppo

- Frontend: http://localhost:4321
- Backend: http://localhost:3000

### Comandi Utili

- \`npm run dev\` - Avvia l'intero stack applicativo
- \`npm run install-all\` - Installa tutte le dipendenze
- \`cd frontend && npm run dev\` - Avvia solo il frontend
- \`cd backend && npm run dev\` - Avvia solo il backend

## 🔧 Configurazione

Il progetto utilizza le seguenti porte di default:
- Frontend: 4321
- Backend: 3000

## 📝 Note

- Il database SQLite viene creato automaticamente al primo avvio
- I todo vengono salvati nel file \`todos.db\` nella cartella backend
- L'applicazione utilizza CORS per permettere la comunicazione tra frontend e backend

## 🤝 Contributing

Le pull request sono benvenute. Per modifiche importanti, apri prima un issue per discutere cosa vorresti cambiare.

## 📄 Licenza

[MIT](https://choosealicense.com/licenses/mit/)