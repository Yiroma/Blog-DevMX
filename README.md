![DevMX](./frontend/src/assets/logo-devmx.svg)

# DevMX, le Blog

Application web fullstack de blog avec gestion d'articles, authentification et profils utilisateurs.

**Par Romaric YI**

[![LinkedIn Romaric YI](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yiromaric/)

---

## À propos du projet

**DevMX** est une application blog fullstack permettant de publier, éditer et lire des articles organisés par catégories. Les utilisateurs peuvent créer un compte, se connecter et gérer leurs articles via un éditeur rich text. Le projet suit une architecture **MVC** côté backend et une architecture **SPA** côté frontend.

### Fonctionnalités

- Authentification sécurisée (JWT + Argon2)
- Création, édition et suppression d'articles
- Éditeur rich text (WYSIWYG) via React Quill
- Upload d'images pour les articles et les profils
- Filtrage des articles par catégorie (`actu`, `event`, `tips`, `job`)
- Profils utilisateurs
- Routes protégées par middleware JWT
- Interface responsive (desktop & mobile)

---

## Stack technique

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

---

## Architecture

```
Blog-DevMX/
├── backend/        → API REST Express (MVC : controllers, models, services)
├── frontend/       → SPA React + Vite + SCSS
├── package.json    → Scripts racine (monorepo)
└── README.md
```

- **Backend** : Node.js, Express, MySQL 2, JWT, Argon2, Multer — port `6000`
- **Frontend** : React 18, Vite, React Router v6, Axios, React Quill, SCSS — port `3000`

---

## Prérequis

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 9
- [MySQL](https://www.mysql.com/) >= 8

---

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/Yiroma/Blog-DevMX.git
cd Blog-DevMX
```

### 2. Installer les dépendances

```bash
npm install
```

> Installe automatiquement les dépendances du frontend et du backend.

### 3. Configurer les variables d'environnement

Créer le fichier `backend/.env` à partir du template :

```bash
cp backend/.env.sample backend/.env
```

Puis renseigner les valeurs dans `backend/.env` :

```env
APP_PORT=6000
FRONTEND_URL=http://localhost:3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=ton_utilisateur_mysql
DB_PASSWORD=ton_mot_de_passe_mysql
DB_NAME=nom_de_ta_base
JWT_SECRET=une_chaine_secrete_longue_et_aleatoire
```

### 4. Créer et migrer la base de données

Créer la base de données dans MySQL, puis exécuter la migration :

```bash
npm run migrate
```

> Cela crée les tables et insère des données d'exemple (2 utilisateurs, 13 articles).

### 5. Lancer l'application

```bash
npm run dev
```

L'application est accessible sur :

- Frontend : [http://localhost:3000](http://localhost:3000)
- Backend : [http://localhost:6000](http://localhost:6000)

---

## Commandes disponibles

| Commande            | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `npm install`       | Installe toutes les dépendances (frontend + backend) |
| `npm run migrate`   | Exécute la migration de la base de données           |
| `npm run dev`       | Lance frontend et backend simultanément              |
| `npm run dev-front` | Lance uniquement le serveur frontend (Vite)          |
| `npm run dev-back`  | Lance uniquement le serveur backend (Nodemon)        |
| `npm run lint`      | Vérifie la qualité du code (ESLint + Prettier)       |
| `npm run fix`       | Corrige automatiquement les erreurs de lint          |

---

## Données de connexion (démonstration)

> Ces identifiants sont uniquement disponibles après avoir exécuté `npm run migrate`.

| Rôle  | Email             | Mot de passe |
| ----- | ----------------- | ------------ |
| Admin | admin@example.com | admin        |

---

## À propos des outils

- **Concurrently** : Permet de lancer plusieurs commandes en parallèle dans le même terminal (frontend + backend)
- **Husky** : Exécute des commandes automatiquement lors d'événements git (ex: vérification du lint avant chaque commit)
- **Vite** : Alternative moderne à Create React App, plus rapide et plus légère
- **ESLint** : Outil de qualité de code, garantit le respect des règles définies
- **Prettier** : Outil de formatage automatique du code
- **Airbnb Standard** : L'un des standards JavaScript les plus répandus
- **Nodemon** : Redémarre automatiquement le serveur à chaque modification de fichier `.js`

