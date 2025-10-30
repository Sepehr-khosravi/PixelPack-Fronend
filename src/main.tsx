import {createRoot} from "react-dom/client";
import App from "./App";
import {StrictMode} from "react";
//React Router Dom
import {BrowserRouter} from "react-router-dom";
//AuthProvider
import {AuthProvider} from "./contexts/authContext.tsx";
import {ThemeProvider} from "./contexts/themeContext.tsx";

//style
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <AuthProvider>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </AuthProvider>
        </StrictMode>
    </BrowserRouter>
)