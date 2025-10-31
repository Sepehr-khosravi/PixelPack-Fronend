//assets
import ArticleBackgroundOne from "../assets/article-background-one.jpg"

export default function Home() {
    return (
        <div style={styles.container} className="Home">
            <article style={styles.article}>
                <div style={styles.articleBackground}>
                    <h1 >Welcome to PixelPack!</h1>
                    <p> PixelPack is a tool to build minecraft's textures pack you want.</p>
                    <p> You can build a lot of custom minecraft's texture pack in the shortest possible time without any
                        complex thing ! </p>
                    <div style={styles.buttonContainer} className="buttons">
                        <button style={styles.buttons}>Start</button>
                        <button style={styles.buttons}>Download</button>
                    </div>
                </div>
            </article>
        </div>
    )
}


const styles: any = {
    container: {
        width: "95%",
        height: "100vh",
        textAlign: "center",
        marginLeft: "auto"
    },
    article: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        fontWeight : "550",
    },
    articleBackground: {
        backgroundImage: `url(${ArticleBackgroundOne})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "80%",
        height: "500px",
        borderRadius: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        boxShadow: "2px 0 12px rgba(0, 0, 0, 0.08)",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "10px"
    },
    buttons: {
        width: "200px",
        height: "50px",
        borderRadius: "15px",
        outline: "none",
        border: "2px solid var(--color-border)",
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        fontFamily : "Minecraftia",
        cursor: "pointer",
        paddingTop : "5px",
        fontWeight : "bold",
        boxShadow: "0px 0 10px #13161c",
    },

}