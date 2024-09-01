import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "@/components/layouts/Layout";
import HomePage from "@/pages/Home";
import Search from "@/pages/Search";
import NotFoundPage from "@/pages/NotFound";
import LatestPage from "@/pages/Latest";
import { NationalDetailPage, NationalPage } from "@/pages/National";
import { PaginationProvider } from "@/context/PaginationContext";
import {
  InternationalDetailPage,
  InternationalPage,
} from "@/pages/International";
import { SportsDetailPage, SportsPage } from "@/pages/Sports";
import { LifeStyleDetailPage, LifeStylePage } from "@/pages/LifeStyleNews";
import {
  EntertainmentDetailPage,
  EntertainmentPage,
} from "@/pages/Entertainment";
import { TechnologyDetailPage, TechnologyPage } from "@/pages/Health";
import { AutomotiveDetailPage, AutomotivePage } from "@/pages/Automotive";
import { PoliticsDetailPage, PoliticsPage } from "@/pages/Politics";

const App = () => {
  return (
    <BrowserRouter>
      <PaginationProvider>
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

          <Route
            path="/terbaru"
            element={
              <Layout>
                <LatestPage />
              </Layout>
            }
          />
          <Route
            path="nasional"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<NationalPage />} />
            <Route path="detail">
              <Route path=":detailId" element={<NationalDetailPage />} />
            </Route>
          </Route>

          <Route
            path="internasional"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<InternationalPage />} />
            <Route path="detail">
              <Route path=":detailId" element={<InternationalDetailPage />} />
            </Route>
          </Route>

          <Route
            path="olahraga"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<SportsPage />} />
            <Route path="detail">
              <Route path=":detailId" element={<SportsDetailPage />} />
            </Route>
          </Route>

          <Route
            path="gaya-hidup"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<LifeStylePage />} />
            <Route path="detail">
              <Route path=":detailId" element={<LifeStyleDetailPage />} />
            </Route>
          </Route>

          <Route
            path="hiburan"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<EntertainmentPage />} />
            <Route path="detail">
              <Route path=":detailId" element={<EntertainmentDetailPage />} />
            </Route>
          </Route>

          <Route
            path="teknologi"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<TechnologyPage />} />
            <Route path="detail">
              <Route path=":detailId" element={<TechnologyDetailPage />} />
            </Route>
          </Route>

          <Route
            path="otomotif"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<AutomotivePage />} />
            <Route path="detail">
              <Route path=":detailId" element={<AutomotiveDetailPage />} />
            </Route>
          </Route>

          <Route
            path="berita"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<PoliticsPage />} />
            <Route path="detail">
              <Route path=":detailId" element={<PoliticsDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </PaginationProvider>
    </BrowserRouter>
  );
};

export default App;
