# 🏠 Amani Home — Conciergerie Immobilière Maroc

> Service de conciergerie et gestion immobilière à distance au Maroc pour expatriés et MRE.  
> Site vitrine multilingue (FR / EN / ES / DE / IT / AR) déployé sur Vercel.

**🌐 Production :** [www.amani-services.com](https://www.amani-services.com)  
**📦 Framework :** Create React App  
**☁️ Hébergement :** Vercel  
**📊 Analytics :** Google Analytics 4 (`G-YP3VQ9XMC4`)  
**🍪 Cookies :** Cookiebot RGPD (`2bd9779a-7e72-4940-874c-512c0d0bdd3f`)

---

## 📋 Table des matières

- [Présentation](#-présentation)
- [Services proposés](#-services-proposés)
- [Stack technique](#-stack-technique)
- [Structure du projet](#-structure-du-projet)
- [Installation & développement](#-installation--développement)
- [Déploiement](#-déploiement)
- [SEO & Référencement](#-seo--référencement)
- [Multilinguisme](#-multilinguisme)
- [Variables & configuration](#-variables--configuration)
- [Contact](#-contact)

---

## 🎯 Présentation

**Amani Home** est une plateforme de conciergerie immobilière basée à **Casablanca, Maroc**, qui s'adresse aux **expatriés** et aux **MRE** (Marocains Résidant à l'Étranger) propriétaires d'un bien immobilier au Maroc.

Le site permet de présenter les offres, les formules d'abonnement (Silver / Gold / Platinum) et de générer des leads qualifiés depuis l'Europe et l'Amérique.

---

## 🛎️ Services proposés

| Service | Description |
|---|---|
| **Key Holding** | Gardiennage sécurisé de vos clés à Casablanca |
| **Visites mensuelles** | Rapport de contrôle complet après chaque visite |
| **Entretien saisonnier** | Aération, remise en état avant/après les saisons |
| **Welcome Home** | Préparation de votre logement avant votre arrivée |
| **ProAccess** | Accès ponctuel supervisé pour les professionnels |
| **Amani Works** | Supervision de travaux et rénovation à distance |

---

## 🛠️ Stack technique

| Élément | Technologie |
|---|---|
| Framework | React (Create React App) |
| Node.js | 22.x |
| Hébergement | Vercel |
| CI/CD | GitHub → Vercel (auto-deploy sur push `main`) |
| Analytics | Google Analytics 4 |
| Consentement | Cookiebot (RGPD) |
| Traduction | Google Translate API |
| Polices | Google Fonts (Lora, Playfair Display) |
| SEO | Schema.org, Open Graph, Twitter Card, hreflang |

---

## 📁 Structure du projet

```
Amani/
├── public/
│   ├── index.html          # Point d'entrée HTML — toutes les balises SEO sont ici
│   ├── sitemap.xml         # Sitemap multilingue avec hreflang
│   ├── robots.txt          # Directives pour les moteurs de recherche
│   ├── manifest.json       # PWA manifest
│   ├── favicon.ico
│   └── LogoAmaniFull.webp  # Logo utilisé dans les balises OG et Apple Touch
│
├── src/
│   ├── App.js              # Composant racine + routing
│   ├── components/         # Composants réutilisables
│   ├── pages/              # Pages du site
│   │   ├── Home/
│   │   ├── Plans/
│   │   ├── About/
│   │   ├── FAQ/
│   │   ├── Contact/
│   │   └── services/
│   │       ├── KeyHolding/
│   │       ├── MonthlyChecks/
│   │       ├── SeasonalCare/
│   │       ├── WelcomeHome/
│   │       ├── ProAccess/
│   │       └── AmaniWorks/
│   └── i18n/               # Fichiers de traduction (fr, en, es, de, it, ar)
│
└── README.md
```

---

## 💻 Installation & développement

### Prérequis

- Node.js **22.x** ou supérieur
- npm ou yarn

### Cloner le projet

```bash
git clone https://github.com/Soumayri/Amani.git
cd Amani
```

### Installer les dépendances

```bash
npm install
```

### Lancer en local

```bash
npm start
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `/build`.

---

## 🚀 Déploiement

Le déploiement est **entièrement automatisé** via l'intégration GitHub ↔ Vercel.

### Workflow

```
git push origin main  →  Vercel détecte le push  →  Build automatique  →  Déploiement en production
```

### Domaines configurés

| URL | Type |
|---|---|
| `https://www.amani-services.com` | Production (domaine principal) |
| `https://amani-services.com` | Redirect → www |
| `https://amani-ruby.vercel.app` | URL Vercel de secours |

### Déployer manuellement (si besoin)

```bash
npm run build
npx vercel --prod
```

---

## 🔍 SEO & Référencement

Toutes les optimisations SEO sont centralisées dans `public/index.html`.

### Ce qui est en place

#### Balises meta
- `<title>` — optimisé autour des mots-clés principaux
- `<meta name="description">` — 155 caractères, incluant les mots-clés cibles
- `<meta name="keywords">` — mots-clés FR et EN
- `<meta name="robots">` — `index, follow` avec directives snippet et image

#### Mots-clés ciblés
```
conciergerie maroc · conciergerie casablanca · gestion immobilière maroc
gardiennage propriété maroc · key holding maroc · expatriés maroc immobilier
MRE gestion bien · gestion bien à distance maroc · property management morocco
home care morocco · surveillance maison maroc · entretien villa maroc
coordination travaux maroc
```

#### Données structurées Schema.org
| Type | Description |
|---|---|
| `WebSite` | Site multilingue avec éditeur |
| `Organization` | Entité légale Amani Home |
| `LocalBusiness` | Fiche locale Casablanca + areaServed Maroc |
| `Service` ×6 | Une fiche par service proposé |
| `OfferCatalog` | Les 3 formules Silver / Gold / Platinum |
| `FAQPage` | 5 questions/réponses — éligibles aux featured snippets |

#### Balises hreflang (multilinguisme)
```html
<link rel="alternate" hreflang="fr"        href=".../?lang=fr" />
<link rel="alternate" hreflang="en"        href=".../?lang=en" />
<link rel="alternate" hreflang="es"        href=".../?lang=es" />
<link rel="alternate" hreflang="de"        href=".../?lang=de" />
<link rel="alternate" hreflang="it"        href=".../?lang=it" />
<link rel="alternate" hreflang="ar"        href=".../?lang=ar" />
<link rel="alternate" hreflang="x-default" href="..."          />
```

#### Open Graph & Twitter Card
Configurés pour un affichage optimal lors du partage sur LinkedIn, Facebook, WhatsApp, X (Twitter).

#### Géolocalisation
```html
<meta name="geo.region"   content="MA-05" />
<meta name="geo.placename" content="Casablanca, Maroc" />
<meta name="geo.position"  content="33.5731;-7.5898" />
```

### Sitemap

Fichier : `public/sitemap.xml`  
Soumis dans : **Google Search Console** → Sitemaps

Toutes les URLs incluent :
- `<lastmod>` — date de dernière modification
- `<changefreq>` et `<priority>` calibrés par type de page
- Balises `hreflang` pour chaque langue

### Outils de vérification SEO

| Outil | URL |
|---|---|
| Google Search Console | [search.google.com/search-console](https://search.google.com/search-console) |
| Rich Results Test | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| PageSpeed Insights | [pagespeed.web.dev](https://pagespeed.web.dev) |
| Schema Validator | [validator.schema.org](https://validator.schema.org) |

---

## 🌍 Multilinguisme

Le site est disponible en **6 langues** : Français, Anglais, Espagnol, Allemand, Italien, Arabe.

### Fonctionnement

- La langue est détectée automatiquement selon la **préférence du navigateur** de l'utilisateur
- L'utilisateur peut changer de langue manuellement via l'**icône de langue dans la navbar**
- Le moteur de traduction utilisé est **Google Translate API**

### Ajouter ou modifier une traduction

Les fichiers de traduction se trouvent dans `src/i18n/`.  
Chaque langue a son propre fichier JSON.

---

## ⚙️ Variables & configuration

### Google Analytics 4

**ID de mesure :** `G-YP3VQ9XMC4`  
Configuré dans `public/index.html`. Pour modifier, remplacer toutes les occurrences de l'ID.

> ℹ️ GA4 attend le consentement Cookiebot avant de se déclencher (conformité RGPD).

### Cookiebot (RGPD)

**CBID :** `2bd9779a-7e72-4940-874c-512c0d0bdd3f`  
Le script Cookiebot est chargé **avant** Google Analytics pour garantir la conformité.

### Contact

```
Email   : contact.amani.home@gmail.com
Tél     : +33 670 779 256
Adresse : 29 Bd Lalla Yacout, Casablanca 20000, Maroc
```

---

## 📬 Contact & liens utiles

| | |
|---|---|
| 🌐 Site | [www.amani-services.com](https://www.amani-services.com) |
| 📸 Instagram | [@amani.home.services](https://www.instagram.com/amani.home.services/) |
| 📧 Email | contact.amani.home@gmail.com |
| ☁️ Vercel | [vercel.com/soumayris-projects/amani](https://vercel.com/soumayris-projects/amani) |
| 📊 Analytics | [Google Analytics](https://analytics.google.com) |
| 🔍 Search Console | [Google Search Console](https://search.google.com/search-console) |

---

*© 2025 Amani Home — Tous droits réservés*
