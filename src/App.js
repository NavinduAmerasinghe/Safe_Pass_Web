import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserDashboard from "./pages/user/UserDashboard";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute, AdminAuthRoute } from "./component/PrivateRoute";
import AdminCreateProduct from "./pages/admin/AdminCreateProduct";
import AdminAddBanner from "./pages/admin/AdminAddBanner";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotAuthorized from "./pages/admin/NotAuthorized";
import AnimalObservationData from "./pages/HOC/AnimalObservationData";
import Analytics from "./pages/HOC/Analytics";
import DisplayData from "./pages/HOC/createRecord/DisplayData";
import ResearchObjective from "./component/ResearchObjective";
import Layout from "./pages/HOC/Layout";

const ObservationData = Layout(AnimalObservationData);
const AnalyticsData = Layout(Analytics);
const CreateRecord = Layout(DisplayData);

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/research-objective" component={ResearchObjective} />
        <Route
          path="/Safe-Pass-SriLanka/dashlayout"
          exact
          component={ObservationData}
        />
        <Route
          path="/Safe-Pass-SriLanka/analytics"
          exact
          component={AnalyticsData}
        />
        <Route
          path="/Safe-Pass-SriLanka/createRecord"
          exact
          component={CreateRecord}
        />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route
          exact
          path="/admin/dashboard/product/create"
          component={AdminCreateProduct}
        />
        <AdminAuthRoute
          exact
          path="/admin/dashboard/banner/create"
          component={AdminAddBanner}
        />
        <Route exact path="/unAuthorized" component={NotAuthorized} />
      </BrowserRouter>
    </>
  );
};

export default App;
