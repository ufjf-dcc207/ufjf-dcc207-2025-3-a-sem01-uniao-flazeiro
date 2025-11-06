import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Fantasy FC</h3>
                    <p>Monte seu time dos sonhos e dispute com seus amigos!</p>
                </div>
                <div className="footer-section">
                    <h4>Links Rápidos</h4>
                    <a href="#">Regras do Jogo</a>
                    <a href="#">Perguntas Frequentes</a>
                    <a href="#">Termos de Uso</a>
                </div>
                <div className="footer-section">
                    <h4>Redes Sociais</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Fantasy FC. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
