//style css file (Hover Animations)
import "./styleAnimations/Animation.css";
//options
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

export default function Feature(){
    return(
        <section style={styles.featuresSection}>
            <h2 style={styles.sectionTitle}>Why Choose PixelPack?</h2>
            <div style={styles.optionsGrid}>
                {options.map((item, index) => (
                    <div key={index} style={styles.optionCard} className="optionCard">
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
    )
}

const styles : any = {
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
        border: "3px solid var(--color-border)",
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
