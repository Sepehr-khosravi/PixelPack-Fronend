//assets
import Logo from "../../assets/logo-test-two.png"
//types
import type { ReactElement } from "react";

//React Router Dom Package
import {Link} from "react-router-dom";

export default function Footer(): ReactElement {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <div style={styles.footerSection}>
                    <div style={styles.logo}>
                        <img src={Logo} alt="logo" style={styles.logoIcon} />
                        <span style={styles.logoText}>PixelPack Studio</span>
                    </div>
                    <p style={styles.footerText}>
                        Making Minecraft texture creation accessible to everyone.
                    </p>
                    <div style={styles.socialLinks}>
                        <Link to="/" style={styles.socialLink}>Twitter</Link>
                        <Link to="/" style={styles.socialLink}>Discord</Link>
                        <Link to="/" style={styles.socialLink}>YouTube</Link>
                    </div>
                </div>

                <div style={styles.footerSection}>
                    <h4 style={styles.footerHeading}>Product</h4>
                    <Link to="/" style={styles.footerLink}>Features</Link>
                    <Link to="/" style={styles.footerLink}>Examples</Link>
                    <Link to="/" style={styles.footerLink}>Pricing</Link>
                    <Link to="/" style={styles.footerLink}>Download</Link>
                </div>

                <div style={styles.footerSection}>
                    <h4 style={styles.footerHeading}>Support</h4>
                    <Link to="/" style={styles.footerLink}>Documentation</Link>
                    <Link to="/" style={styles.footerLink}>Tutorials</Link>
                    <Link to="/" style={styles.footerLink}>Community</Link>
                    <Link to="/" style={styles.footerLink}>Contact</Link>
                </div>

                <div style={styles.footerSection}>
                    <h4 style={styles.footerHeading}>Legal</h4>
                    <Link to="/" style={styles.footerLink}>Privacy Policy</Link>
                    <Link to="/" style={styles.footerLink}>Terms of Service</Link>
                    <Link to="/" style={styles.footerLink}>Cookie Policy</Link>
                </div>
            </div>

            <div style={styles.footerBottom}>
                <p style={styles.footerBottomText}>
                    © 2025 PixelPack Studio. All rights reserved.
                </p>
                <div style={styles.footerBottomLinks}>
                    <Link to="/" style={styles.footerBottomLink}>Status</Link>
                    <Link to="/" style={styles.footerBottomLink}>Sitemap</Link>
                </div>
            </div>
        </footer>
    );
}

const styles: any = {
    footer: {
        backgroundColor: 'var(--color-background)',
        borderTop: '1px solid var(--color-border)',
        padding: '40px 0 0 0',
        marginTop: 'auto',
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        flexWrap: 'wrap',
        gap: '40px',
    },
    footerSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '200px',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '8px',
    },
    logoIcon: {
        width : "50px",
        transform : "translateY(-5px)"
    },
    logoText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'var(--color-text)',
    },
    footerText: {
        color: 'var(--color-text-muted)',
        fontSize: '14px',
        lineHeight: '1.5',
        maxWidth: '250px',
    },
    footerHeading: {
        color: 'var(--color-text)',
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '8px',
    },
    footerLink: {
        color: 'var(--color-text-muted)',
        fontSize: '14px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    socialLinks: {
        display: 'flex',
        gap: '16px',
        marginTop: '8px',
    },
    socialLink: {
        color: 'var(--color-text-muted)',
        fontSize: '14px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    footerBottom: {
        borderTop: '1px solid var(--color-border)',
        marginTop: '40px',
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
    },
    footerBottomText: {
        color: 'var(--color-text-muted)',
        fontSize: '14px',
    },
    footerBottomLinks: {
        display: 'flex',
        gap: '24px',
    },
    footerBottomLink: {
        color: 'var(--color-text-muted)',
        fontSize: '14px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
};
