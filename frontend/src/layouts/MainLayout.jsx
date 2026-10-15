import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --------------------------------------------------
// Main Layout
// --------------------------------------------------

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">

      {/* --------------------------------------------------
          Navbar
      -------------------------------------------------- */}
      <Navbar />

      {/* --------------------------------------------------
          Main Content
      -------------------------------------------------- */}
      <main className="flex-1">
        {children}
      </main>

      {/* --------------------------------------------------
          Footer
      -------------------------------------------------- */}
      <Footer />

    </div>
  );
}

export default MainLayout;