import { Routes, Route } from "react-router-dom";

// --------------------------------------------------
// Pages
// --------------------------------------------------

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import Desserts from "./pages/Desserts";
import RecipeDetails from "./pages/RecipeDetails";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
// import Dashboard from "./components/d"

// --------------------------------------------------
// Components
// --------------------------------------------------

import ScrollToTop from "./components/ScrollToTop";

// --------------------------------------------------
// Layout
// --------------------------------------------------

import MainLayout from "./layouts/MainLayout";
import Login from "../../dashboard/src/components/Login.jsx";

// --------------------------------------------------
// App
// --------------------------------------------------

function App() {
  return (
    <MainLayout>

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* --------------------------------------------------
          Routes
      -------------------------------------------------- */}

      <Routes>

        {/* Main */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        <Route path="/" element={<Login/>}/>

        {/* Information */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* Other */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/categories" element={<Categories />} />

        {/* Recipes */}
        <Route path="/recipes/breakfast" element={<Breakfast />} />
        <Route path="/recipes/lunch" element={<Lunch />} />
        <Route path="/recipes/dinner" element={<Dinner />} />
        <Route path="/recipes/desserts" element={<Desserts />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* Search */}
        <Route path="/search" element={<Search />} />

        {/* Sitemap */}
        <Route path="/sitemap" element={<Sitemap />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </MainLayout>
  );
}

export default App;