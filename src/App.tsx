import { Routes, Route } from "react-router-dom"

//Pages
import Home from "./pages"
import Auth from "./pages/Auth"
import Chat from "./pages/Chat"
import Setting from "./pages/Setting"
import Error from "./pages/Error"


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}