# 🚀 Déployer sur Vercel - Guide Rapide

## ✅ Prérequis Complétés

- ✅ Code sur GitHub: https://github.com/ElyxKik/mindeldef.git
- ✅ Configuration Vercel: `vercel.json` ajouté
- ✅ Build testé et fonctionnel
- ✅ Tous les fichiers synchronisés

## 📋 Étapes de Déploiement

### **Étape 1: Aller sur Vercel**

1. Ouvrir https://vercel.com
2. Se connecter avec GitHub (ou créer un compte)

### **Étape 2: Importer le Projet**

1. Cliquer sur **"Add New..."** → **"Project"**
2. Sélectionner **"mindeldef"** dans la liste des repositories
3. Cliquer sur **"Import"**

### **Étape 3: Configuration du Projet**

Vercel détecte automatiquement:
```
Framework: Next.js
Build Command: cd web && npm run build
Output Directory: web/.next
Install Command: cd web && npm install
```

**✅ Tout est pré-configuré dans `vercel.json`**

### **Étape 4: Variables d'Environnement**

Ajouter dans Vercel:
```
NEXT_PUBLIC_SITE_URL = https://mindeldef.vercel.app
```

(Ou votre domaine personnalisé)

### **Étape 5: Déployer**

1. Cliquer sur **"Deploy"**
2. Attendre 2-3 minutes
3. ✅ **Live!**

---

## 🎯 Résultat Attendu

Après le déploiement, vous aurez:

- **URL**: https://mindeldef.vercel.app
- **Pages**: 30+ pages fonctionnelles
- **Performance**: LCP < 2s, CLS < 0.05
- **SSL/HTTPS**: Automatique
- **CDN**: Global

---

## 📊 Contenu Déployé

✅ Accueil (2 slides hero)
✅ Ministère (6 sous-pages)
✅ FARDC
✅ Actualités + détails
✅ Documents + détails
✅ Programmes (6 programmes)
✅ Anciens Combattants (4 pages)
✅ Contact + formulaire
✅ Recrutement
✅ Recherche + FAQ

---

## 🔧 Configuration Vercel

### vercel.json
```json
{
  "buildCommand": "cd web && npm run build",
  "installCommand": "cd web && npm install",
  "outputDirectory": "web/.next",
  "framework": "nextjs",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "@next_public_site_url"
  }
}
```

### Pourquoi cette configuration?

- **buildCommand**: Vercel doit entrer dans le dossier `/web` avant de builder
- **installCommand**: Installer les dépendances du `/web`
- **outputDirectory**: Le dossier `.next` généré par Next.js
- **framework**: Vercel optimise pour Next.js

---

## ✅ Checklist Avant Déploiement

- [x] Code sur GitHub
- [x] vercel.json configuré
- [x] Build testé localement
- [x] Pas d'erreurs TypeScript
- [x] Images optimisées
- [x] Responsive design vérifié
- [x] Dark mode fonctionnel
- [x] Formulaires testés

---

## 🎉 Après le Déploiement

### 1. Vérifier le Site
- Aller sur https://mindeldef.vercel.app
- Tester toutes les pages
- Vérifier les formulaires

### 2. Configurer le Domaine Personnalisé (Optionnel)
```
Vercel Dashboard → Settings → Domains
Ajouter votre domaine
Configurer les DNS
```

### 3. Activer les Déploiements Automatiques
- Chaque push sur `main` déclenche un déploiement
- Voir l'historique dans Vercel Dashboard

### 4. Monitoring
- Vercel Analytics inclus
- Voir les performances en temps réel
- Alertes automatiques

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub**: https://github.com/ElyxKik/mindeldef

---

## ⏱️ Temps Estimé

- **Importer le projet**: 2 min
- **Configurer**: 2 min
- **Déployer**: 3 min
- **Vérifier**: 5 min

**Total: ~12 minutes pour être live! 🎉**

---

## 🚀 C'est Prêt!

Le projet est **100% prêt pour Vercel**.

Allez sur https://vercel.com et commencez le déploiement maintenant! 🚀
