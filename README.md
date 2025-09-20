# 🛠️ Workshop 3 – Manipulating Components

This branch corresponds to **Workshop n°3: Manipulating Components** of the module *Application côté client 1* at **ESPRIT School of Engineering**.

---

## 🎯 Objectives
- Create an Angular component (`ListEvent`) inside the **AppModule**.  
- Practice different types of **data binding**:  
  - Interpolation (`{{ }}`)  
  - Property binding (`[property]`)  
  - Event binding (`(event)`)  
  - Two-way binding (`[(ngModel)]`)  
- Display a **static list of events** from a model.  
- Dynamically update data (increment likes).  
- Manage states (disable the Like button for expired events).  
- Implement a **search bar** to filter events by title and location.  

---

## 📦 Steps / Instructions

1. **Generate the ListEvent component**  
   ```bash
   ng g c layout/listEvent --skip-tests
   ```

2. **Generate the Event interface**  
   ```bash
   ng g i models/event
   ```

3. **Create a static list of events**  
   - Define an array of events in `list-event.component.ts`.  
   - Use the Event interface for typing.  

4. **Develop the interface** (`list-event.component.html`)  
   - Display the list of events in cards.  
   - Show event title, description, date, location, price, available places, image.  
   - Add a Like button.  

5. **Configure navigation**  
   - Add a link to **ListEvent** in the navbar and from the Home page.  

6. **Implement interactions**  
   - Clicking Like increments the number of likes.  
   - Disable the Like button for expired events or when no places are left.  
   - Add a search bar bound with `[(ngModel)]` to filter events by title or location.  

---

## 🚀 Implementation
Once implemented, you will have:  
- A **ListEvent component** under `layout/`.  
- An **Event interface** for typed data models.  
- A working interface that displays, updates, and filters events.  
- A Like button that increments likes and is disabled for expired events.  

---

## 📊 Key Concepts
- **AppModule components** vs. **Feature modules**.  
- Different **data binding techniques** in Angular.  
- Using an **interface** to define data shape.  
- Conditional rendering and property binding for button states.  
- Search filtering with **ngModel**.  

---

## 📝 Summary of Commands

| Command                                | Purpose                                               |
|----------------------------------------|-------------------------------------------------------|
| `ng serve --open` / `ng s -o` / `npm start` | Run the project and open it in the browser           |
| `ng g i models/event`                  | Generate the Event interface under `models/`          |
| `ng g c layout/listEvent --skip-tests` | Generate the ListEvent component under `layout/`      |

---

## 🌐 Resources
- 🎬 Demo: [EventHub – Workshop 3 Demo](https://event-hub-one-alpha.vercel.app)  
- 📂 Repository: [GitHub – Workshop 3 Branch](https://github.com/badi3a/AngularTraining/tree/workshop-03-manipulate-component)  

---
### 👨‍🏫 Instructor
- **[Badia Bouhdid](https://www.linkedin.com/in/badiabouhdid)**

---

🏫 This workshop is part of the **Application côté client 1** module at:  

<p align="center">  
  <img src="https://cdio.esprit.tn/images/cdio/esprit.png" alt="Esprit School of Engineering" width="250"/>  
</p>
