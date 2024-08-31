import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layouts/Layout";
import { HomePage } from "@/pages/Home";
import { Search } from "@/pages/Search";
import { NotFoundPage } from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
