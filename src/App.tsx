import {Routes, Route, Navigate} from "react-router-dom";

// Pages
import Home from "./pages";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import Error from "./pages/Error";
import Packs from "./pages/Packs";

// Hooks
import {useAuth} from "./hooks/auth";
import Sidebar from "./components/common/sidebar.tsx";


export default function App() {
    const {isAuthenticated} = useAuth();
    return (
        <>
            <Sidebar/>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/auth/signin" element={<Auth/>}/> {/* it must be <Login /> component */}
                <Route path="/auth" element={<Navigate to="/auth/login"/>}/>

                {/* Protected routes */}
                {isAuthenticated ? (
                    <>
                        <Route path="/chat" element={<Chat/>}/>
                        <Route path="/settings" element={<Setting/>}/>
                        <Route path="/packs" element={<Packs />} />
                    </>
                ) : (
                    // Redirect user to /auth if not logged in
                    <>
                        <Route path="/chat" element={<Navigate to="/auth/signin"/>}/>
                        <Route path="/settings" element={<Navigate to="/auth/signin"/>}/>
                        <Route path="/packs" element={<Navigate to="/auth/signin"/>} />
                    </>
                )}

                {/* Fallback route */}
                <Route path="*" element={<Error/>}/>
            </Routes>
        </>
    );
}





