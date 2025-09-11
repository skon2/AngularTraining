# 🛠️ Workshop 2 – Getting Started with Angular (Angular LTS 18)
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Angular_Logo_SVG.svg/768px-Angular_Logo_SVG.svg.png?20231112001847" alt="Angular Logo" width="120"/>
</p>

This branch corresponds to **Workshop n°2: Getting Started with Angular** of the module *Application côté client 1* at **ESPRIT School of Engineering**.

---

## 🎯 Objectives
- Create a modular Angular SPA project (CSR).
- Understand the project lifecycle and run the application.
- Install and configure **Bootstrap** as an external dependency.
- Create the first components (Header, Footer, Home, NotFound).
- Set up a **404 page** for undefined routes.

---

## 📦 Steps / Instructions

1. **Create a new Angular project**
   ```bash
   ng new eventhub --routing --style=css --standalone=false
   ```
    - `--routing` → adds the routing module.
    - `--style=css` → uses CSS for styles.
    - `--standalone=false` → generates a modular project (NgModule structure).

2. **Run the application**
   ```bash
   ng serve --open
   ```
   👉 `--open` (or `-o`) opens the browser at `http://localhost:4200`.

3. **Install and configure Bootstrap**
   ```bash
   npm install bootstrap
   ```
   Then, in `angular.json` under `build → options`, add:
   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.css"
   ],
   "scripts": [
     "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   ```

4. **Generate components for the global layout**
   ```bash
   ng g c layout/header --skip-tests
   ng g c layout/footer --skip-tests
   ng g c layout/not-found --skip-tests
   ng g c features/home/pages/home --skip-tests
   ```
   👉 You are free to design the CSS. You can take inspiration from:
    - https://getbootstrap.com/docs/5.3/components/
    - https://getbootstrap.com/docs/5.3/examples/

5. **Configure the routing**  
   In `app-routing.module.ts`:
   ```ts
   const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: '**', component: NotFoundComponent }
   ];
   ```
    - `/` → displays the Home page.
    - Any other URL → displays the NotFound page.

---

## 🚀 Implementation
Once implemented, you will have:
- A well-structured Angular modular project.
- Bootstrap integrated for UI design.
- A homepage with **Header and Footer**.
- A **404 page** for invalid routes.

---

## 📊 Key Concepts
- Angular modular project setup (CSR).
- Running Angular apps locally.
- External CSS framework integration (Bootstrap).
- Layout management with shared components.
- Basic routing with Angular Router.

---

## 📝 Summary of Commands

| Command                                                   | Purpose                              |
|-----------------------------------------------------------|--------------------------------------|
| `ng new eventhub --routing --style=css --standalone=false` | Create a new modular Angular project |
| `ng serve --open`                                         | Run the project locally              |
| `npm install bootstrap`                                   | Install Bootstrap                    |
| `ng g c layout/header --skip-tests`                       | Generate the Header component        |
| `ng g c layout/footer --skip-tests`                       | Generate the Footer component        |
| `ng g c layout/not-found --skip-tests`                    | Generate the NotFound component      |
| `ng g c features/home/pages/home --skip-tests`            | Generate the Home component          |

---

🏫 This workshop is part of the **Application côté client 1** module at:

<p align="center">  
  <img src="https://cdio.esprit.tn/images/cdio/esprit.png" alt="Esprit School of Engineering" width="250"/>  
</p>

---
### 👨‍🏫 Instructor
- **[Badia Bouhdid](https://www.linkedin.com/in/badiabouhdid)**

🏫 This training is delivered as part of the **Client-Side Application 1** module at [Esprit School of Engineering](https://www.esprit.tn)




