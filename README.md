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
```bash
git clone <repository-url>
cd ghcopilotdemo
```

2. Installa le dipendenze e avvia l'applicazione:
```bash
npm run dev
```

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

- `GET /todos` - Recupera tutti i todo
- `POST /todos` - Crea un nuovo todo
- `PUT /todos/:id` - Aggiorna lo stato di un todo
- `DELETE /todos/:id` - Elimina un todo

## 💻 Sviluppo

- Frontend: http://localhost:4321
- Backend: http://localhost:3000

### Comandi Utili

- `npm run dev` - Avvia l'intero stack applicativo
- `npm run install-all` - Installa tutte le dipendenze
- `cd frontend && npm run dev` - Avvia solo il frontend
- `cd backend && npm run dev` - Avvia solo il backend

## 🔧 Configurazione

Il progetto utilizza le seguenti porte di default:
- Frontend: 4321
- Backend: 3000

## 📝 Note

- Il database SQLite viene creato automaticamente al primo avvio
- I todo vengono salvati nel file `todos.db` nella cartella backend
- L'applicazione utilizza CORS per permettere la comunicazione tra frontend e backend

## 🤝 Contributing

Le pull request sono benvenute. Per modifiche importanti, apri prima un issue per discutere cosa vorresti cambiare.

## 📄 Licenza

[MIT](https://choosealicense.com/licenses/mit/)

# Workshop GitHub Copilot

## Agenda della Demo

1. **Introduzione a GitHub Copilot**
   - Cos'è GitHub Copilot e come funziona.
   - Configurazione e attivazione in Visual Studio Code.

2. **Linee guida e best practices**
   - Utilizzo di Copilot per generare codice seguendo le best practices.
   - Prompt di esempio:
     - "Genera una funzione JavaScript che valida un indirizzo email seguendo le best practices di sicurezza."
     - "Scrivi una funzione che utilizza il pattern Singleton in TypeScript."

3. **Automazione di task**
   - Generazione automatica di documentazione:
     - Prompt: "Genera una documentazione Markdown per l'API REST definita nel file `backend/index.js`."
   - Creazione di unit test:
     - Prompt: "Genera unit test Jest per l'endpoint Express.js `POST /todos`."

4. **Migrazione di database**
   - Utilizzo di Copilot per semplificare la migrazione di database.
   - Prompt di esempio:
     - "Genera uno script Node.js per migrare i dati da SQLite a PostgreSQL mantenendo la struttura della tabella `todos`."
     - "Scrivi una query SQL per aggiungere una nuova colonna `priority` alla tabella `todos`."

5. **Debugging e refactoring**
   - Prompt di esempio:
     - "Refattorizza il codice nel file `TodoItem.astro` per ridurre la duplicazione."
     - "Trova e correggi eventuali problemi nel file `TodoItem.astro`."

6. **Integrazione con API esterne**
   - Prompt di esempio:
     - "Genera una funzione che sincronizza i todo con un servizio cloud come Azure Cosmos DB."

7. **Esercizi interattivi**
   - Genera la documentazione del componente `TodoItem`.
   - Automatizza la generazione di unit test per il backend Express.js.
   - Simula una migrazione del database SQLite verso PostgreSQL.

### **Prompt per migliorare il codice**

1. **Ottimizzazione delle performance:**
   - Prompt: "Suggerisci miglioramenti per ottimizzare le performance delle chiamate fetch nel file `TodoItem.astro`."

2. **Sicurezza:**
   - Prompt: "Suggerisci modifiche al codice per prevenire vulnerabilità come XSS o CSRF."

## Prompt per testare nuove funzionalità del componente `TodoItem`

1. **Ordinamento dei Todo:**
   - Prompt: "Scrivi una funzione che ordina i todo per stato (completati prima o incompleti prima)."

2. **Filtraggio dei Todo:**
   - Prompt: "Scrivi una funzione che filtra i todo in base a una parola chiave inserita dall'utente."

3. **Aggiunta di una Priorità ai Todo:**
   - Prompt: "Scrivi una funzione che permette di assegnare una priorità (alta, media, bassa) a ogni todo."

4. **Notifiche per Todo in Scadenza:**
   - Prompt: "Scrivi una funzione che invia una notifica se un todo è in scadenza entro 24 ore."

5. **Modalità Dark/Light:**
   - Prompt: "Aggiungi una funzionalità per alternare tra modalità dark e light nel componente `TodoItem`."

6. **Statistiche sui Todo:**
   - Prompt: "Scrivi una funzione che calcola e mostra il numero totale di todo, completati e non completati."

7. **Drag-and-Drop per Riordinare i Todo:**
   - Prompt: "Implementa una funzionalità di drag-and-drop per riordinare i todo nella lista."

8. **Condivisione dei Todo:**
   - Prompt: "Scrivi una funzione che genera un link condivisibile per un todo specifico."

9. **Backup e Ripristino dei Todo:**
   - Prompt: "Scrivi una funzione che permette di esportare e importare i todo in formato JSON."

10. **Cronologia delle Modifiche:**
    - Prompt: "Implementa una funzionalità che tiene traccia delle modifiche apportate a un todo (testo, stato, ecc.)."

## Prompt per il Deploy della Soluzione su Azure

1. **Creazione delle risorse su Azure:**
   - Prompt: "Genera uno script Azure CLI per creare un'App Service e un database PostgreSQL per ospitare il backend."

2. **Deploy del backend su Azure App Service:**
   - Prompt: "Scrivi i comandi Azure CLI per effettuare il deploy del backend su un'App Service esistente."

3. **Deploy del frontend su Azure Static Web Apps:**
   - Prompt: "Genera un file di configurazione YAML per il deploy del frontend su Azure Static Web Apps."

4. **Configurazione delle variabili d'ambiente:**
   - Prompt: "Scrivi uno script Azure CLI per configurare le variabili d'ambiente necessarie per il backend (es. connessione al database)."

5. **Monitoraggio delle risorse su Azure:**
   - Prompt: "Genera uno script Azure CLI per abilitare il monitoraggio delle risorse e configurare gli alert per il backend e il database."

## Prompt per il Deploy della Soluzione su Azure con azd o Terraform

### Utilizzo di Azure Developer CLI (azd)

1. **Creazione delle risorse su Azure:**
   - Prompt: "Genera un comando `azd` per creare un'App Service e un database PostgreSQL per ospitare il backend."

2. **Deploy del backend e frontend:**
   - Prompt: "Scrivi i comandi `azd` per effettuare il deploy del backend e del frontend su Azure."

3. **Configurazione delle variabili d'ambiente:**
   - Prompt: "Scrivi un file di configurazione `azd` per impostare le variabili d'ambiente necessarie per il backend."

### Utilizzo di Terraform

1. **Definizione dell'infrastruttura:**
   - Prompt: "Genera un file `main.tf` per creare un'App Service, un database PostgreSQL e una Static Web App su Azure."

2. **Deploy dell'infrastruttura:**
   - Prompt: "Scrivi i comandi Terraform per inizializzare, pianificare e applicare la configurazione."

3. **Gestione dello stato:**
   - Prompt: "Configura un backend remoto per Terraform per salvare lo stato su Azure Storage."

Questi strumenti ti permettono di seguire le best practices di Azure per il deploy e la gestione dell'infrastruttura, garantendo un processo ripetibile e scalabile.