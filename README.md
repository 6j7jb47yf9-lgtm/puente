# 🌉 Puente — Apprendre l'espagnol de zéro, par la logique

Une application web d'apprentissage de l'espagnol pour **francophones débutants**, fondée sur la **méthode des patterns** : plutôt que mémoriser des listes, on apprend des règles de conversion qui débloquent des milliers de mots d'un coup (ex. `-tion → -ción` ≈ 1 250 mots).

Le tout tient dans **un seul fichier `index.html`** — aucune installation, aucune dépendance, fonctionne hors ligne.

## ✨ Fonctionnalités

- **🔊 Audio partout** — clique sur n'importe quel mot ou phrase espagnole pour l'entendre (synthèse vocale du navigateur), avec choix de la voix et réglage de la vitesse.
- **🗺️ Parcours guidé** — 6 niveaux qui se déverrouillent l'un après l'autre (survie → nombres → patterns → genre → conjugaison → examen), 70 % requis pour passer au suivant.
- **📖 Leçons** — kit de survie, nombres 0–100, les grandes clés de conversion, le genre (el/la), SER/ESTAR/TENER, faux amis et prononciation.
- **🎮 9 jeux** — quiz, compréhension orale, dictée, flashcards à révision espacée (Leitner), conjugaison en deux étapes, etc.
- **💬 3 dialogues à trous** — café, hôtel, rencontre.
- **📅 Phrase du jour**, **🔥 série quotidienne**, **🏅 12 badges**, **fiches imprimables**.
- **Progression sauvegardée** localement (localStorage).

## 🚀 Lancer en local

Ouvre simplement `index.html` dans un navigateur (Chrome recommandé pour la meilleure voix « Google español »).

## 🌐 Déployer gratuitement

### Option A — GitHub Pages
1. Pousse ce dépôt sur GitHub.
2. Dans le dépôt : **Settings → Pages**.
3. **Source** : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
4. Attends une minute : ton app est en ligne sur `https://<ton-pseudo>.github.io/<nom-du-repo>/`.

### Option B — Netlify
Glisse le dossier sur [netlify.com/drop](https://app.netlify.com/drop) → lien instantané.

> Sur mobile, « Ajouter à l'écran d'accueil » depuis le lien donne une icône comme une vraie appli.

## 🛠️ Technique

- HTML / CSS / JavaScript purs, **zéro build, zéro dépendance runtime**.
- Polices via Google Fonts (Archivo + Space Mono).
- Audio via l'API `SpeechSynthesis` du navigateur (qualité selon les voix installées sur l'appareil).
- Stockage via `localStorage`.

## 📄 Licence

Projet personnel — libre de le réutiliser et de le modifier.
