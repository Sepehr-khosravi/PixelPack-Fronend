//assets
import ArticleBackgroundOne from "../assets/article-background-one.jpg"

//options:
const options = [
    {
        name: "Rapid Pack Development",
        icon: "⚡",
        description: "Drastically cut down your creation time. Our intuitive tools and templates let you build a complete, high-quality texture pack in minutes, not hours."
    },
    {
        name: "Effortless & Intuitive Design",
        icon: "🎨",
        description: "Craft your perfect pack with ease. Our streamlined interface is built for simplicity, making the design process smooth and accessible for creators of all skill levels."
    },
    {
        name: "Optimized for 1.8.9",
        icon: "⛏️",
        description: "Experience flawless compatibility and peak performance. Every feature is fine-tuned for the legendary 1.8.9 version, ensuring buttery-smooth PVP gameplay."
    }
];

export default function Home() {

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Welcome to PixelPack!</h1>
                    <p style={styles.heroSubtitle}>The ultimate Minecraft texture pack builder for competitive players</p>
                    <p style={styles.heroDescription}>
                        Create stunning, performance-optimized texture packs for Minecraft 1.8.9 in record time.
                        No complex tools, no steep learning curve—just pure creativity and speed.
                    </p>
                    <div style={styles.buttonContainer}>
                        <button style={styles.primaryButton}>Get Started</button>
                        <button style={styles.secondaryButton}>Download Now</button>
                    </div>
                </div>
                <div style={styles.heroBackground} />
            </section>

            {/* Features Section */}
            <section style={styles.featuresSection}>
                <h2 style={styles.sectionTitle}>Why Choose PixelPack?</h2>
                <div style={styles.optionsGrid}>
                    {options.map((item, index) => (
                        <div key={index} style={styles.optionCard}>
                            <div style={styles.optionHeader}>
                                <div style={styles.optionIcon}>{item.icon}</div>
                                <h3 style={styles.optionTitle}>{item.name}</h3>
                            </div>
                            <div style={styles.optionBody}>
                                <p style={styles.optionDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

const styles: any = {
    container: {
        width: "95%",
        minHeight: "100vh",
        textAlign: "center",
        marginLeft : "auto",
    },

    // Hero Section Styles
    hero: {
        position: "relative",
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    heroBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${ArticleBackgroundOne})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.7)",
        zIndex: -1,
    },
    heroContent: {
        maxWidth: "800px",
        padding: "2rem",
        color: "white",
        textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
    },
    heroTitle: {
        fontSize: "3.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        background: "linear-gradient(45deg, #fff, #e0e0e0)",
        WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    heroSubtitle: {
        fontSize: "1.5rem",
        fontWeight: "600",
        marginBottom: "1.5rem",
        opacity: 0.95,
    },
    heroDescription: {
        fontSize: "1.1rem",
        marginBottom: "2.5rem",
        lineHeight: "1.6",
        opacity: 0.9,
        maxWidth: "600px",
        margin: "0 auto 2.5rem",
    },

    // Button Styles
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
    },
    primaryButton: {
        padding: "15px 35px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        borderRadius: "12px",
        backgroundColor: "#4f46e5",
        color: "white",
        cursor: "pointer",
        boxShadow: "0 4px 14px 0 rgba(79, 70, 229, 0.4)",
        transition: "all 0.3s ease",
        fontFamily: "inherit",
        paddingTop : "20px",
        border: "2px solid white",
    },
    secondaryButton: {
        padding: "15px 35px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        borderRadius: "12px",
        border: "2px solid white",
        backgroundColor: "transparent",
        color: "white",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: "inherit",
        paddingTop : "20px",
    },

    // Features Section Styles
    featuresSection: {
        padding: "5rem 2rem",
        backgroundColor: "var(--color-background)",
    },
    sectionTitle: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "3rem",
        color: "var(--color-text)",
    },
    optionsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    optionCard: {
        backgroundColor: "var(--color-background)",
        borderRadius: "20px",
        padding: "2rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        border: "1px solid #e2e8f0",
    },
    optionHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "1.5rem",
    },
    optionIcon: {
        fontSize: "2.5rem",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
        transform : "translateY(-25px)"
    },
    optionTitle: {
        fontSize: "1.4rem",
        fontWeight: "bold",
        color: "var(--color-text)",
        margin: 0,
    },
    optionBody: {
        textAlign: "left",
    },
    optionDescription: {
        fontSize: "1rem",
        lineHeight: "1.6",
        color: "var(--color-text)",
        margin: 0,
        opacity: "80%",
    },
};

// Add hover effects
const addHoverEffects = `
    .primaryButton:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(79, 70, 229, 0.5);
        background-color: #4338ca;
    }
    
    .secondaryButton:hover {
        transform: translateY(-2px);
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    }
    
    .optionCard:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = addHoverEffects;
    document.head.appendChild(styleSheet);
}