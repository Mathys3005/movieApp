# Movie App

## Installation et Configuration

### 1 - Cloner le projet

```bash
git clone https://github.com/Mathys3005/movieApp.git movie-app
cd movie-app
````

---

### 2️ - Installer les dépendances

```bash
npm install

```

---

### 3 - Obtenir une clé TMDB

1. Créez un compte sur [TMDB](https://www.themoviedb.org/).
2. Allez dans **Settings → API** et créez une clé
3. Copiez votre clé API.

---

### 4️ - Configurer la clé dans l’application

1. À la racine du projet, copiez le fichier `example.env` :

```bash
cp example.env .env
```

2. Ouvrez `.env` et complétez `VITE_API_KEY=` avec votre clé TMDB :

```
VITE_API_KEY=VOTRE_CLE_API
```

---

### 5️ - Lancer l’application

```bash
npm run dev

```

L’application sera disponible sur : le lien disponible en console 

