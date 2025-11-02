//types
import type {ReactElement} from "react";
//assets
import ArticleBackgroundOne from "../../../assets/article-background-one.jpg";
//style css file (Hover Animations)
import "./styleAnimations/Animation.css";

export default function Hero():ReactElement{
    return(
        <section style={styles.hero}>
            <div style={styles.heroContent}>
                <h1 style={styles.heroTitle}>Welcome to PixelPack!</h1>
                <p style={styles.heroSubtitle}>The ultimate Minecraft texture pack builder for competitive players</p>
                <p style={styles.heroDescription}>
                    Create stunning, performance-optimized texture packs for Minecraft 1.8.9 in record time.
                    No complex tools, no steep learning curve—just pure creativity and speed.
                </p>
                <div style={styles.buttonContainer} className="buttons">
                    <button style={styles.primaryButton}>Get Started</button>
                    <button style={styles.secondaryButton}>Download Now</button>
                </div>
            </div>
            <div style={styles.heroBackground} />
        </section>
    )
};


const styles : any = {

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

}