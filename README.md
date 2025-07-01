# 💍 Jonny & Lisa Wedding Site

A Vue 3 single-page application (SPA) for Jonny & Lisa’s wedding, featuring multiple views, responsive design, and an RSVP form.

---

## Project Setup

1. **Clone the repo**  
   ```bash
   git clone <gh repo clone Carla-Lourens/vue-html-assignment>
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start development server**  
   ```bash
   npm run serve
   ```

4. **Build for production**  
   ```bash
   npm run build
   ```

5. **Lint and fix files**  
   ```bash
   npm run lint
   ```

---

## Vue Router Implementation

We use **Vue Router 4** to manage client-side navigation in this SPA.

### Router Setup

Routes are configured in `/src/router/index.js`

```js
import { createRouter, createWebHistory } from 'vue-router'
import HommePageView from '@/views/HommePageView.vue'
import RSVPView from '@/views/RSVPView.vue'
import NotFound from '../views/NotFound.vue'
import VenuePage from '@/components/VenuePage.vue'

const routes = [
    { path: '/', name: 'HomePageView', component: HommePageView },
    { path: '/rsvp', name: 'RSVPView', component: RSVPView },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
    { path: '/details/venue', name: 'VenuePage', component: VenuePage }
]

export default createRouter({
    history: createWebHistory(),
    routes
})

```

### How It Works

- Navigation uses `<router-link>` in `NavBar.vue`.  
- Views are rendered inside `<router-view>` in `App.vue`.  

---

## App Initialization

The Vue app integrates the router and mounts to the DOM:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

---

## Pages & Structure

| Route            | Component       | Description                                                          |
|------------------|-----------------|----------------------------------------------------------------------|
| `/`              | HomePage.vue    | Hero section, popup, “Our Story,” engagement photos                  |
| `/rsvp`          | RSVPForm.vue    | Interactive RSVP form with validation & modal                        |
| `/details/venue` | VenuePage.vue   | Wedding venue details with embedded Google Map, pin, and directions button |

### Main Components

- `NavBar.vue` — site-wide navigation bar  
- `HomePage.vue` — hero image, details popup, and story section  
- `RSVPForm.vue` — RSVP form and submission modal  
- `SiteFooter.vue` — common footer  
- `VenuePage.vue` — details and map to show wedding venue
---

## Challenges & Insights

- Syntax errors in routing (e.g., missing colons) initially caused build failures.  
- Responsive layout tweaked with mobile-first CSS utility classes and responsive image sizing.  
- Converted vanilla DOM manipulation to reactive Vue patterns (`v-if`, `@click`, props) in Single File Components (SFCs).

---

## Why Routing Matters in SPAs

- Enables smooth page transitions without full reloads.  
- Encapsulates views into modular components and supports lazy loading.  
- Maintains distinct URLs for deep linking, sharing, and bookmarking.  

---

## Future Improvements
 
- Improve accessibility with ARIA roles and keyboard navigation support.  
- Add transition animations between route changes.  
- Add new pages: Wedding Party, Details, Directions, and more.

---

## Configuration Reference

For advanced Vue CLI configuration options, see the official docs: [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).