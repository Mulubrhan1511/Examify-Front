import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import MinimalLayout from './layout/MinimalLayout';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      
      {/* Auth routes - outside of DefaultLayout */}
      <Route
        path="/auth/signin"
        element={
          <MinimalLayout>
            <PageTitle title="Signin | TailAdmin" />
            <SignIn />
          </MinimalLayout>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <MinimalLayout>
            <PageTitle title="Signup | TailAdmin" />
            <SignUp />
          </MinimalLayout>
        }
      />

      {/* All other routes inside DefaultLayout */}
      <Route
        path="*"
        element={
          <DefaultLayout>
            <Routes>
              <Route
                index
                element={
                  <>
                    <PageTitle title="eCommerce Dashboard" />
                    <ECommerce />
                  </>
                }
              />
              <Route
                path="/calendar"
                element={
                  <>
                    <PageTitle title="Calendar" />
                    <Calendar />
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <PageTitle title="Profile" />
                    <Profile />
                  </>
                }
              />
              <Route
                path="/forms/form-elements"
                element={
                  <>
                    <PageTitle title="Form Elements" />
                    <FormElements />
                  </>
                }
              />
              <Route
                path="/forms/form-layout"
                element={
                  <>
                    <PageTitle title="Form Layout" />
                    <FormLayout />
                  </>
                }
              />
              <Route
                path="/tables"
                element={
                  <>
                    <PageTitle title="Tables" />
                    <Tables />
                  </>
                }
              />
              <Route
                path="/settings"
                element={
                  <>
                    <PageTitle title="Settings" />
                    <Settings />
                  </>
                }
              />
              <Route
                path="/chart"
                element={
                  <>
                    <PageTitle title="Chart" />
                    <Chart />
                  </>
                }
              />
              <Route
                path="/ui/alerts"
                element={
                  <>
                    <PageTitle title="Alerts" />
                    <Alerts />
                  </>
                }
              />
              <Route
                path="/ui/buttons"
                element={
                  <>
                    <PageTitle title="Buttons" />
                    <Buttons />
                  </>
                }
              />
            </Routes>
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
