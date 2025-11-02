//components
import Hero from "../components/ui/Home/Hero.tsx";
import Feature from "../components/ui/Home/Feature.tsx";
import Footer from "../components/common/footer.tsx";

export default function Home() {

    return (
        <div style={styles.container}>
            {/* Hero Component */}
            <Hero/>
            {/* Features Component */}
            <Feature/>
            {/* Footer Component*/}
            <Footer/>
        </div>
    )
}

const styles: any = {
    container: {
        width: "95%",
        minHeight: "100vh",
        textAlign: "center",
        marginLeft: "auto",
    },
};



