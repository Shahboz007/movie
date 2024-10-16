import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRequired from "./components/authRequired/AuthRequired";
import DashboardLayout from "./layout/DashboardLayout";
import MainLayout from "./layout/MainLayout";
import SuggestMe from "./pages/SuggestMe";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound404 from "./pages/error/NotFound404";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Movies from "./pages/movies/Movies";
import { UserContext } from "./pages/provider/UserProvider";
import TvShows from "./pages/tvShows/TvShows";
import "./styles/App.css";

function Logout() {
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        dispatch({
            type: "Auth",
            value: false,
        });
    }, [dispatch]);

    return <></>;
}

const App = () => {
    return (
        <>
            <Routes>
                {/* main layout */}
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvShows" element={<TvShows />} />
                    <Route path="/suggestMe" element={<SuggestMe />} />
                    <Route path="/login" element={<Login />} />
                    {/* Error pages */}
                    <Route path="*" element={<NotFound404 />} />
                </Route>

                {/* dashboard layout */}

                <Route element={<AuthRequired />}>
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/logout" element={<Logout />} />
                    </Route>

                    {/* Error pages */}
                    <Route path="*" element={<NotFound404 />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
