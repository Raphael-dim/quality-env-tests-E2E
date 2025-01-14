# Tests End-to-End (E2E)

## Table des matières
- [Login](#login)
- [Feedback](#feedback)
- [Contact](#contact)
- [Admin](#admin)
- [Géo](#geo)
- [Application globale](#application-globale)

---

## Login
### Scénario 1 : Authentification valide
- **Étapes :**
  1. Entrer un login valide.
  2. Entrer un mot de passe valide.
  3. Cliquer sur le bouton "Envoyer".
  4. Attendre le chargement de la page `/admin`.
- **Attendu :** La page `/admin` est affichée.

### Scénario 2 : Authentification invalide
- **Étapes :**
  1. Entrer un login incorrect.
  2. Entrer un mot de passe incorrect.
  3. Cliquer sur le bouton "Envoyer".
  4. Attendre l’erreur.
- **Attendu :** Affichage du message d'erreur "badddd".

### Scénario 3 : Champs vides
- **Étapes :**
  1. Laisser les champs "login" et/ou "mot de passe" vides.
  2. Cliquer sur le bouton "Envoyer".
- **Attendu :** Blocage de la soumission et affichage des messages d'erreur correspondants.

---

## Feedback
### Scénario 1 : Feedback valide
- **Étapes :**
  1. Remplir les champs "name" et "message".
  2. Cliquer sur "Envoyer".
  3. Vérifier l’affichage du feedback.
- **Attendu :** Feedback affiché et compteur incrémenté.

### Scénario 2 : Champs vides
- **Étapes :**
  1. Laisser le champ "name" vide.
  2. Remplir le champ "message".
  3. Cliquer sur "Envoyer".
- **Attendu :** Blocage de la soumission avec un message d'erreur.

### Scénario 3 : Récupération des feedbacks
- **Étapes :**
  1. Lancer une requête GET sur `/feedback`.
- **Attendu :** Les feedbacks sont affichés correctement.

### Scénario 4 : Liste vide
- **Étapes :**
  1. S'assurer qu'aucun feedback n'est disponible.
  2. Ouvrir la page feedback.
- **Attendu :** Section vide et compteur à zéro.

---

## Contact
### Scénario 1 : Formulaire valide
- **Étapes :**
  1. Remplir tous les champs requis.
  2. Cliquer sur "Envoyer".
- **Attendu :** Requête POST effectuée et visible sur `/admin`.

### Scénario 2 : Champs obligatoires vides
- **Étapes :**
  1. Laisser certains champs obligatoires vides.
  2. Cliquer sur "Envoyer".
- **Attendu :** Blocage avec des messages d'erreur.

### Scénario 3 : Email invalide
- **Étapes :**
  1. Saisir un email incorrect.
  2. Cliquer sur "Envoyer".
- **Attendu :** Message d'erreur près du champ email.

---

## Admin
### Scénario 1 : Liste des contacts
- **Étapes :**
  1. Se connecter comme administrateur.
  2. Accéder à `/admin`.
- **Attendu :** Liste triée par date de création.

### Scénario 2 : Suppression d’un contact
- **Étapes :**
  1. Cliquer sur "Supprimer" pour un contact.
  2. Confirmer l'action.
- **Attendu :** Contact supprimé.

### Scénario 3 : Déconnexion
- **Étapes :**
  1. Cliquer sur "Déconnexion".
- **Attendu :** Token supprimé et redirection vers `/login`.

---

## Géo
### Scénario 1 : Localisation
- **Étapes :**
  1. Naviguer vers `/geo`.
- **Attendu :** Carte fonctionnelle et informations visibles.

## Application globale
### Scénarios :
1. Navigation vers les pages "localisation", "tarifs", et "feedback".
2. Vérification des redirections et contenus.



# Rapport d'exécution des tests E2E

## Tests exécutés
- **Running** default: `test\admin.js`
- **Running** default: `test\app.js`
- **Running** default: `test\contact.js`
- **Running** default: `test\feedback.js`
- **Running** default: `test\login.js`

## DevTools
- DevTools listening on ws://127.0.0.1:51904/devtools/browser/500cf738-81ef-4784-ba23-f22e16a9c483
- DevTools listening on ws://127.0.0.1:51905/devtools/browser/5af40a4a-0168-49e7-8a05-4e24b63fe304
- DevTools listening on ws://127.0.0.1:51906/devtools/browser/7cbfc852-5c91-4659-a416-9890aa9cf6d6
- DevTools listening on ws://127.0.0.1:51907/devtools/browser/8944e56f-1a0e-4af5-bc35-d8cbafd66073
- DevTools listening on ws://127.0.0.1:51908/devtools/browser/c083f9ba-89b2-4ed1-a0f4-5a781e3efad2

## Résultats des Tests

### [Test\app] Vérification des liens de navigation
- **Navigating URL:** `http://127.0.0.1:9090`
  - Loaded in 1858ms
  - 6 assertions réussies (6.174s)
  - Les éléments `<body>` étaient visibles après des délais entre 48ms et 83ms.

### [Test\feedback] Scénario 1: Envoyer un feedback valide
- **Navigating URL:** `http://127.0.0.1:9090/feedback`
  - Loaded in 1365ms
  - 5 assertions réussies (7.233s)

### [Test\feedback] Scénario 2: Envoyer un feedback avec un champ vide
- **Navigating URL:** `http://127.0.0.1:9090/feedback`
  - Loaded in 455ms
  - 3 assertions réussies (3.863s)

### [Test\contact] Scénario 1: Soumission d'un formulaire de contact valide
- **Navigating URL:** `http://127.0.0.1:9090/contact`
  - Loaded in 1425ms
  - 7 assertions réussies (7.834s)

### [Test\contact] Scénario 2: Champs vides
- **Navigating URL:** `http://127.0.0.1:9090/contact`
  - Loaded in 377ms
  - 7 assertions réussies (3.928s)

### [Test\admin] Scénario 1: Affichage de la liste des contacts pour un administrateur authentifié
- **Navigating URL:** `http://127.0.0.1:9090/login`
  - Loaded in 1214ms
  - 6 assertions réussies (4.429s)

### [Test\admin] Scénario 3: Déconnexion de l’administrateur
- **Navigating URL:** `http://127.0.0.1:9090/login`
  - Loaded in 500ms
  - 3 assertions réussies (5.824s)

### [Test\admin] Scénario 4: Accès à la page admin sans authentification
- **Navigating URL:** `http://127.0.0.1:9090/admin`
  - Loaded in 451ms
  - 3 assertions réussies (2.668s)

### [Test\login] Scénario 1: Authentification valide et accès à /admin
- **Navigating URL:** `http://127.0.0.1:9090/login`
  - Loaded in 789ms
  - 3 assertions réussies (5.084s)

### [Test\login] Scénario 2: Authentification non valide (mauvais compte)
- **Navigating URL:** `http://127.0.0.1:9090/login`
  - Loaded in 516ms
  - 2 assertions réussies (5.548s)

### [Test\login] Scénario 3: Champs vides (login et mot de passe requis)
- **Navigating URL:** `http://127.0.0.1:9090/login`
  - Loaded in 413ms
  - 2 assertions réussies (3.233s)

## Résumé
- **Assertions réussies:** 46
- **Durée totale des tests:** 19.384s
- **Rapport HTML généré à l'adresse suivante:** `\Validation des logiciels\quality-env-tests-E2E\tests_output\nightwatch-html-report\index.html`
