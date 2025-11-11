# Ministère délégué à la Défense - Portail Officiel

Portail officiel moderne du Ministère délégué à la Défense de la République du Congo.

## Technologies utilisées

- **Frontend** : Next.js 14 (App Router), Tailwind CSS
- **Animations** : Framer Motion (micro-animations), GSAP/ScrollTrigger (parallaxe/séquences de défilement)
- **CMS** : Préparé pour intégration avec Strapi/Directus
- **Recherche** : API de recherche unifiée (préparée pour Meilisearch/Algolia)
- **Multilinguisme** : Français (par défaut), préparé pour l'anglais et langues locales

## Fonctionnalités principales

- Design moderne et professionnel respectant l'identité institutionnelle
- Navigation intuitive avec menu responsive et sous-menus animés
- Pages structurées pour les différentes sections du ministère
- Optimisation SEO complète (métadonnées, sitemap, flux RSS)
- Sécurité renforcée avec en-têtes CSP/HSTS
- Accessibilité AA WCAG
- Performance optimisée (LCP <2s, CLS <0.05)

## Structure du projet

- `/web` : Application Next.js
  - `/src/app` : Routes et pages
  - `/src/components` : Composants réutilisables
  - `/src/lib` : Utilitaires et bibliothèques
  - `/public` : Ressources statiques

## Installation

```bash
# Installation des dépendances
cd web
npm install

# Démarrage du serveur de développement
npm run dev
```

## Déploiement

Le projet est configuré pour être déployé sur Vercel ou sur une infrastructure Kubernetes avec CDN.

## Licence

Tous droits réservés © Ministère délégué à la Défense, République du Congo
