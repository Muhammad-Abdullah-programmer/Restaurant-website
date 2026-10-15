import { useState, useMemo } from "react";
import { CATEGORIES, START_RECIPES } from "./components/Data";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import WeeklyChart from "./components/WeeklyChart";
import TopRecipes from "./components/TopRecipes";
import RecipeTable from "./components/RecipeTable";
import AddRecipyModel from "./components/AddRecipyModel";
import Login from "./components/Login";

export default function Dashboard() {
  const [recipes, setRecipes] = useState(START_RECIPES);
  const [active, setActive] = useState("Overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filtered = useMemo(
    () =>
      recipes.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) &&
          (category === "All" || r.category === category)
      ),
    [recipes, query, category]
  );

  const totalViews = recipes.reduce((sum, r) => sum + r.views, 0);
  const published = recipes.filter((r) => r.status === "Published").length;

  const addRecipe = (data) => {
    setRecipes([{ id: Date.now(), emoji: "🍽️", views: 0, ...data }, ...recipes]);
    setShowModal(false);
  };

  const removeRecipe = (id) => {
    if (window.confirm("Delete this recipe?")) setRecipes(recipes.filter((r) => r.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      <Sidebar active={active} setActive={setActive} open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar query={query} setQuery={setQuery} onAdd={() => setShowModal(true)} onMenu={() => setMenuOpen(true)} />

        <main className="space-y-6 p-4 md:p-8">
          <div>
            <h1 className="font-serif text-2xl font-semibold text-slate-900">Welcome back</h1>
            <p className="text-sm text-slate-500">Here is how your recipe site is doing this week.</p>
          </div>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Total recipes" value={recipes.length} note={`${published} published`} />
            <StatCard label="Total views" value={totalViews.toLocaleString()} note="+12% from last week" />
            <StatCard label="Categories" value={CATEGORIES.length} note="All in use" />
            <StatCard label="Registered users" value="248" note="+9 this week" />
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            <WeeklyChart />
            <TopRecipes recipes={recipes} />
          </section>

          <RecipeTable recipes={filtered} category={category} setCategory={setCategory} onDelete={removeRecipe} />
        </main>
      </div>

      {showModal && <AddRecipeModal onClose={() => setShowModal(false)} onSave={addRecipe} />}
    </div>
  );
}