import "./Footer.css"

const Footer = () => { 
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/mauricio.s.valdes">
                <img src="/img/facebook.png" alt="Facebook" /> 
            </a>
            <a href="https://www.threads.net/@mauriciovaldesf">
                <img src="/img/Threads.png" alt="Threads" />
            </a>
            <a href="https://www.instagram.com/mauriciovaldesf/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="Org" />
        <strong>Desarrollado por Mauricio Valdés</strong>
    </footer>
}

export default Footer