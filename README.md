# Démo CI — Le flux des tests

Petit projet React (Vite) pour **montrer en direct aux étudiants** comment,
à chaque `push`, GitHub lance automatiquement le linter et les tests.
C'est l'illustration de l'**Intégration Continue (CI)**.

## Lancer en local

```bash
npm install      # installe les dépendances
npm run dev      # lance l'application
npm run lint     # vérifie le code (ESLint)
npm run test     # lance les tests (Vitest) en mode surveillance
```

## Ce qu'il y a dans le projet

- Une petite app React avec un bouton compteur (`src/App.jsx`).
- Des tests automatiques (`src/App.test.jsx`) avec Vitest + Testing Library.
- ESLint + Prettier configurés.
- Un pipeline CI : `.github/workflows/ci.yml` — à chaque push et chaque
  pull request, GitHub installe le projet, lance le linter puis les tests.

## 🎬 Déroulé de la démo en cours (le flux vert / rouge)

1. **Montrer le vert.** Onglet **Actions** du dépôt → le dernier pipeline est
   vert : lint + tests OK.
2. **Casser un test.** Dans `src/App.jsx`, changer la logique du compteur
   (par ex. `count + 2` au lieu de `count + 1`), committer et pousser sur une
   branche.
3. **Montrer le rouge.** Dans l'onglet Actions (ou dans la pull request), le
   pipeline passe au rouge : GitHub a détecté la régression tout seul.
   Ouvrir le job en échec pour montrer le message « attendu / reçu ».
4. **Réparer.** Remettre `count + 1`, committer, pousser → le pipeline repasse
   au vert. 🎉
5. **(Bonus) La PR bloquée.** Avec une règle de protection de branche exigeant
   une CI verte, montrer qu'une pull request rouge ne peut pas être fusionnée.
