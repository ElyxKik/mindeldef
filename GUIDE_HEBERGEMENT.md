# Guide d'Hébergement - Ministère délégué à la Défense

## 🚀 Options d'Hébergement Recommandées

### 1. **VERCEL** (Recommandé - Plus facile)

#### Avantages
- ✅ Créateur de Next.js (optimisation native)
- ✅ Déploiement en 1 clic
- ✅ Gratuit pour les petits projets
- ✅ Domaine personnalisé gratuit
- ✅ SSL/HTTPS automatique
- ✅ CDN global inclus
- ✅ Environnement de production/staging
- ✅ Analytics et monitoring inclus

#### Étapes de Déploiement

**1. Créer un compte Vercel**
```bash
# Aller sur https://vercel.com
# S'inscrire avec GitHub/GitLab/Bitbucket
```

**2. Connecter le repository Git**
```bash
# Vercel détecte automatiquement Next.js
# Sélectionner le repository mindeldef
```

**3. Configuration du Projet**
```
Framework: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**4. Variables d'Environnement**
```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

**5. Déployer**
```bash
# Cliquer sur "Deploy"
# Vercel construit et déploie automatiquement
```

#### Coût
- **Gratuit**: Jusqu'à 100GB/mois de bande passante
- **Pro**: $20/mois (pour plus de ressources)
- **Enterprise**: Sur devis

#### URL de Déploiement
```
https://mindeldef.vercel.app (par défaut)
https://votre-domaine.com (domaine personnalisé)
```

---

### 2. **NETLIFY** (Alternative facile)

#### Avantages
- ✅ Déploiement simple
- ✅ Gratuit pour les petits projets
- ✅ Domaine gratuit
- ✅ SSL/HTTPS automatique
- ✅ Formulaires intégrés
- ✅ Fonctions serverless

#### Étapes de Déploiement

**1. Créer un compte Netlify**
```bash
# Aller sur https://netlify.com
# S'inscrire avec GitHub
```

**2. Connecter le repository**
```bash
# Netlify détecte Next.js
# Sélectionner mindeldef
```

**3. Configuration**
```
Build command: npm run build
Publish directory: .next
```

**4. Déployer**
```bash
# Cliquer sur "Deploy site"
```

#### Coût
- **Gratuit**: Illimité (avec limitations)
- **Pro**: $19/mois

---

### 3. **RAILWAY** (Facile + Backend)

#### Avantages
- ✅ Très simple
- ✅ Support PostgreSQL/MongoDB
- ✅ Gratuit ($5/mois de crédit)
- ✅ Parfait pour full-stack

#### Étapes de Déploiement

**1. Créer un compte Railway**
```bash
# Aller sur https://railway.app
# S'inscrire avec GitHub
```

**2. Créer un nouveau projet**
```bash
# Cliquer sur "New Project"
# Sélectionner "Deploy from GitHub"
# Choisir mindeldef
```

**3. Configuration automatique**
```
# Railway détecte Next.js
# Configure automatiquement
```

**4. Déployer**
```bash
# Cliquer sur "Deploy"
```

#### Coût
- **Gratuit**: $5/mois de crédit
- **Pay-as-you-go**: Après crédit gratuit

---

### 4. **HEROKU** (Classique)

#### Avantages
- ✅ Très populaire
- ✅ Support complet
- ✅ Facile à configurer

#### Étapes de Déploiement

**1. Installer Heroku CLI**
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Vérifier
heroku --version
```

**2. Se connecter à Heroku**
```bash
heroku login
```

**3. Créer une app Heroku**
```bash
cd /Users/elykik/Documents/mindeldef/web
heroku create mindeldef-app
```

**4. Déployer**
```bash
git push heroku main
```

#### Coût
- **Gratuit**: Limité (dynos gratuits supprimés)
- **Eco**: $5/mois
- **Standard**: $7/mois

---

### 5. **DOCKER + VPS** (Plus contrôle)

#### Avantages
- ✅ Contrôle total
- ✅ Moins cher à long terme
- ✅ Flexible

#### Fournisseurs VPS
- **DigitalOcean**: $4-6/mois
- **Linode**: $5/mois
- **Vultr**: $2.50/mois
- **AWS**: Variable

#### Étapes

**1. Créer un Dockerfile**
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**2. Créer docker-compose.yml**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

**3. Déployer sur VPS**
```bash
# SSH sur le VPS
ssh root@votre-vps

# Cloner le repo
git clone https://github.com/votre-repo/mindeldef.git
cd mindeldef/web

# Démarrer avec Docker
docker-compose up -d
```

---

## 📊 Comparaison Rapide

| Plateforme | Facilité | Coût | Gratuit | Domaine | Recommandé |
|-----------|----------|------|--------|---------|-----------|
| **Vercel** | ⭐⭐⭐⭐⭐ | $0-20 | ✅ | ✅ | ✅✅✅ |
| **Netlify** | ⭐⭐⭐⭐⭐ | $0-19 | ✅ | ✅ | ✅✅ |
| **Railway** | ⭐⭐⭐⭐ | $0-5+ | ✅ | ❌ | ✅ |
| **Heroku** | ⭐⭐⭐⭐ | $5+ | ❌ | ❌ | ⭐ |
| **Docker+VPS** | ⭐⭐⭐ | $2-10 | ✅ | ✅ | ⭐ |

---

## 🎯 Recommandation Finale

### **Pour Démarrer Rapidement**: VERCEL ✅
```bash
# 1. Push sur GitHub
git push origin main

# 2. Aller sur https://vercel.com
# 3. Connecter le repo
# 4. Cliquer "Deploy"
# 5. ✅ Live en 2 minutes!
```

### **Avantages Vercel pour vous**
- Next.js optimisé nativement
- Déploiement automatique à chaque push
- Gratuit pour commencer
- Domaine personnalisé facile
- Support excellent

---

## 🔧 Configuration Avant Déploiement

### 1. Vérifier le package.json
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 2. Vérifier next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
```

### 3. Variables d'Environnement
```bash
# .env.local (local)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# .env.production (production)
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### 4. Vérifier la Build
```bash
cd /Users/elykik/Documents/mindeldef/web
npm run build
npm start
```

---

## 📝 Checklist Avant Déploiement

- [ ] Code pushé sur GitHub
- [ ] `npm run build` fonctionne localement
- [ ] Pas d'erreurs TypeScript
- [ ] Variables d'environnement configurées
- [ ] Images optimisées
- [ ] Métadonnées SEO complètes
- [ ] Formulaires testés
- [ ] Dark mode fonctionnel
- [ ] Responsive design vérifié
- [ ] Performance vérifiée (Lighthouse)

---

## 🚀 Déploiement Vercel (Pas à Pas)

### Étape 1: Préparer le Code
```bash
cd /Users/elykik/Documents/mindeldef
git add .
git commit -m "Prêt pour déploiement"
git push origin main
```

### Étape 2: Créer Compte Vercel
```
https://vercel.com/signup
→ S'inscrire avec GitHub
```

### Étape 3: Importer le Projet
```
1. Cliquer "Add New..." → "Project"
2. Sélectionner "mindeldef" repository
3. Cliquer "Import"
```

### Étape 4: Configuration
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Étape 5: Variables d'Environnement
```
NEXT_PUBLIC_SITE_URL = https://mindeldef.vercel.app
```

### Étape 6: Déployer
```
Cliquer "Deploy"
Attendre 2-3 minutes
✅ Live!
```

### Étape 7: Domaine Personnalisé (Optionnel)
```
Settings → Domains
Ajouter votre domaine
Configurer les DNS
```

---

## 📞 Support & Ressources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Netlify Docs**: https://docs.netlify.com
- **Railway Docs**: https://docs.railway.app

---

## ⚠️ Points Importants

1. **Domaine**: Vous pouvez utiliser le domaine gratuit Vercel ou acheter un domaine personnalisé
2. **SSL/HTTPS**: Automatique sur toutes les plateformes
3. **Email**: Configurer un email pour les formulaires (ex: SendGrid, Mailgun)
4. **Base de données**: Si besoin, ajouter PostgreSQL/MongoDB
5. **Monitoring**: Vercel inclut les analytics et monitoring

---

## 💡 Prochaines Étapes

1. **Créer un compte Vercel** (5 min)
2. **Déployer l'application** (2 min)
3. **Configurer le domaine** (10 min)
4. **Tester en production** (5 min)
5. **Configurer les emails** (15 min)

**Total: ~40 minutes pour être live! 🎉**
