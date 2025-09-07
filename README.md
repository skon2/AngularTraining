# 🛠️ Workshop 1 – Environment Setup (Angular 18)
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Angular_Logo_SVG.svg/768px-Angular_Logo_SVG.svg.png?20231112001847" alt="Angular Logo" width="120"/>
</p>

This branch corresponds to **Workshop n°1: Environment Setup **

---

## 🎯 Objectives
- Install the working environment required for **Angular 18**.  
- Create a new Angular project (Standalone or Modular).  
- Understand the possible configurations of an Angular project.  

---

## 📦 Steps to Install the Environment

1. **Install Node.js**  
   - Download from [https://nodejs.org/en/](https://nodejs.org/en/).  
   - Minimum: `v18.13.0`  
   - Recommended: `v20.x.x (LTS)`  
   - Verify installation:  
     ```bash
     node -v
     npm -v
     ```

2. **Install Angular CLI v18**  
   ```bash
   npm install -g @angular/cli@18
   ng version
   ```

3. **Install an IDE**  
   - Recommended: *Visual Studio Code* or *WebStorm*.  

4. **Create a workspace folder**  
   Example:  
   ```bash
   mkdir Angular_Workspace
   cd Angular_Workspace
   ```

---

## 🚀 Create a New Angular Project

### ▶️ 100% Standalone Project
```bash
ng new projectName
cd projectName
ng serve --open
```

- **Characteristics**:  
  - No `AppModule`.  
  - All components are standalone.  
- **Best for**: small projects, prototypes, SPAs, experimentation.  

---

### ▶️ Modular Project (NgModule)
```bash
ng new projectName --standalone=false
cd projectName
ng serve --open
```

- **Characteristics**:  
  - Uses `AppModule` and other modules.  
  - Can include standalone components.  
- **Best for**: large projects, enterprise apps, complex routing.  

---

## 📊 Choosing Between Standalone vs Modular

| Project Type                          | Recommended Approach |
|---------------------------------------|-----------------------|
| Small project / quick prototype       | 100% Standalone       |
| Simple SPA                            | Standalone or light Modular |
| Large / enterprise / multi-team app   | Modular + Standalone components |
| Complex routing / SSR / SSG required  | Modular + Standalone mix |

---

## 📝 Summary of Commands

| Command                                | Role                                   | When to Use |
|----------------------------------------|----------------------------------------|-------------|
| `node -v`                              | Check Node.js version                  | After installing Node |
| `npm -v`                               | Check npm version                      | After installing Node |
| `npm install -g @angular/cli@18`       | Install Angular CLI (v18) globally     | One-time setup |
| `ng version`                           | Check Angular/CLI/Node versions        | After CLI install |
| `ng new <projectName>`                 | Create new standalone Angular project  | Project start |
| `ng new <projectName> --standalone=false` | Create new modular Angular project   | Project start |
| `cd <projectName>`                     | Enter project folder                   | After project creation |
| `ng serve`                             | Start dev server                       | Run locally |
| `ng serve --open`                      | Start dev server and open browser      | Faster startup |

---
### 👨‍🏫 Instructor
- **[Badia Bouhdid](https://www.linkedin.com/in/badiabouhdid)**

🏫 This training is delivered as part of the **Client-Side Application 1** module at [Esprit School of Engineering](https://www.esprit.tn)




