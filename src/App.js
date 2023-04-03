import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ThemeContextProvider } from './components/ThemeContextProvider/ThemeContextProvider';
import { CartPage } from './pages/CartPage/CartPage';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import { HomePage } from './pages/HomePage/HomePage';
import { LocationPage } from './pages/LocationPage/LocationPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { RecipesPage } from './pages/RecipesPage/RecipesPage';
import { CSSTransition } from 'react-transition-group';
import { store } from './store';

export const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <Layout>
            <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/recipes" element={<RecipesPage />} />
                    <Route path="/location" element={<LocationPage />} />
                    <Route path="/delivery" element={<DeliveryPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route
                      path="/redirect"
                      element={<Navigate to="/" replace />}
                    />
            </Routes>
          </Layout>
        </ThemeContextProvider>
      </Provider>
    </HashRouter>
  );
};
