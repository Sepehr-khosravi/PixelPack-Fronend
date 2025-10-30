import {Routes, Route, Navigate} from "react-router-dom";

// Pages
import Home from "./pages";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import Error from "./pages/Error";

// Hooks
import {useAuth} from "./hooks/auth";


export default function App() {
    const {isAuthenticated} = useAuth();
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/login" element={<Auth/>}/> {/* it must be <Login /> component */}
            <Route path="/auth" element={<Navigate to="/auth/login"/>}/>

            {/* Protected routes */}
            {isAuthenticated ? (
                <>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                </>
            ) : (
                // Redirect user to /auth if not logged in
                <>
                    <Route path="/chat" element={<Navigate to="/auth/login"/>}/>
                    <Route path="/setting" element={<Navigate to="/auth/login"/>}/>
                </>
            )}

            {/* Fallback route */}
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
}





