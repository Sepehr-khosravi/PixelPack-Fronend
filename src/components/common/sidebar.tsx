// Sidebar.jsx
import LogoTwo from "../../assets/logo-test-two.png";
import { useState } from "react";
import { useTheme } from "../../hooks/theme.ts";

// Icons
const HomeIcon = () => <i className="ri-home-4-line"></i>;
const PacksIcon = () => <i className="ri-folders-line"></i>;
const SettingsIcon = () => <i className="ri-settings-line"></i>;
const ChatIcon = () => <i className="ri-question-answer-line"></i>;

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState('Home');
    const { toggleTheme, theme } = useTheme();
    const ThemeIcon = () => theme === "dark" ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>;

    const menuItems = [
        { id: 'Home', label: 'Home', icon: <HomeIcon /> },
        { id: 'Packs', label: 'Packs', icon: <PacksIcon /> },
        { id: 'Chat', label: 'Chat', icon: <ChatIcon /> },
        { id: 'Settings', label: 'Settings', icon: <SettingsIcon /> },
    ];

    return (
        <div className="Sidebar" style={styles.container}>
            {/* Logo Section */}
            <div className="logo-nav" style={styles.logoSection}>
                <img src={LogoTwo} style={styles.img} alt="logo" />
            </div>

            {/* Navigation Items */}
            <div className="Items-middle" style={styles.itemsContainer}>
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                        style={{
                            ...styles.navItem,
                            ...(activeItem === item.id ? styles.activeItem : {})
                        }}
                        onClick={() => setActiveItem(item.id)}
                        title={item.label} // Tooltip for better UX
                    >
                        <div style={styles.iconWrapper}>
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div style={styles.bottomSection}>
                <div
                    className="theme-toggle"
                    style={styles.themeToggle}
                    onClick={toggleTheme}
                    title="Toggle Theme"
                >
                    <ThemeIcon />
                </div>
            </div>
        </div>
    );
}

// Styles
const styles : any = {
    container: {
        width: "80px",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        borderRight: "1px solid var(--color-border)",
        padding: "25px 0",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--color-background-sidebar)",
        boxShadow: "2px 0 12px rgba(0, 0, 0, 0.08)",
    },
    logoSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 10px",
        marginBottom: "50px",
    },
    img: {
        width: "45px",
        height: "45px",
        borderRadius: "12px",
        objectFit: "cover",
    },
    itemsContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "0 16px",
    },
    navItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px 0",
        borderRadius: "14px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        color: "var(--color-text)",
        opacity: 0.7,
        border: "1px solid transparent",
    },
    activeItem: {
        opacity: 1,
        backgroundColor: "var(--color-accent)",
        color: "var(--color-accent-text)",
        // borderColor: "var(--color-accent)",
        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
    },
    iconWrapper: {
        fontSize: "22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomSection: {
        padding: "20px 16px",
        borderTop: "1px solid var(--color-border)",
        display: "flex",
        justifyContent: "center",
    },
    themeToggle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 0",
        borderRadius: "14px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        opacity: 0.7,
        width: "100%",
    },
};