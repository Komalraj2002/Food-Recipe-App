

## 🍲 Food Recipe Finder App

### 🔧 Tech Stack

* **Frontend**: React.js, HTML5, TailwindCSS, JavaScript
* **Routing**: React Router DOM
* **State Management**: React Context API
* **API**: Third-party Recipe APIs (e.g., [Forkify API](https://forkify-api.herokuapp.com/))
* **Hooks Used**: `useState`, `useEffect`
* **Other**: Fetch API for real-time data fetching

---

### 📱 App Features

#### 🔍 Recipe Search

Users can search for any recipe by **name** or **ingredient**.
Real-time results are fetched from a recipe API and displayed with an engaging, modern UI.

#### ❤️ Favorites

Users can save recipes to a **Favorites list**, which persists across sessions using `localStorage`.

#### 🧾 Detailed Recipe View

Clicking on a recipe shows a dedicated view with:

* Full instructions
* Cooking time
* Ingredient list
* Nutrition facts
* Images (if available)

---

### 🔄 Routing

* `/` → Home / Search Page
* `/favorites` → Favorite Recipes
* `/recipe-item/:id` → Detailed Recipe View

---

### 🎨 UI & UX

* **TailwindCSS** for responsive, mobile-friendly UI
* Clean, intuitive design with dark/light compatibility (optional for enhancement)

---

### 📦 Project Highlights

* Efficient state management via **Context API** (favorites, search state)
* Comprehensive error handling and loading spinners for better UX
* Optimized use of `useEffect` and `useState` for dynamic API-driven rendering
* Modular component architecture for easy scalability and code reuse
* Clean folder structure following best practices (e.g., `components`, `pages`, `context`, `utils`)


