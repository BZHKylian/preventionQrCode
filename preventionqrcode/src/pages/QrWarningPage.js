import { useState, useEffect } from "react";
import CompteurGlobal from '../composant/CompteurGlobal';
import '../style.css';

export default function QrWarningPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => setShowPopup(true), []);

  return (
    <div className="qr-root">
      {/* Popup */}
      {showPopup && (
        <div className="qr-popup-overlay">
          <div className="qr-popup-box">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>👀 Vous êtes trop curieux !</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px', color: '#d0d3dc' }}>
              Heureusement que vous êtes arrivé ici, ça aurait pu être très dangereux 😅
            </p>
            <div style={{ margin: '20px 0' }}>
               <CompteurGlobal />
            </div>
            <button className="qr-popup-button" onClick={() => setShowPopup(false)}>Ok, compris !</button>
          </div>
        </div>
      )}

      <div className="qr-container">
        <div className="qr-alert">Vous venez de scanner un QR code</div>

        <header className="qr-hero">
          <div className="icon" aria-hidden="true" style={{ fontSize: '56px' }}>⚠️</div>
          <h1>Ne scannez <em>jamais</em> un QR code que vous ne connaissez pas</h1>
          <p style={{ color: 'var(--muted)', fontSize: 'clamp(16px,2.5vw,18px)' }}>
            Un QR peut vous mener vers un site piégé, un faux paiement ou installer un logiciel malveillant. Voici comment reconnaître le danger en quelques secondes et quoi faire ensuite.
          </p>
          <div>
            <a className="qr-popup-button" href="#agir">Que faire si j'ai déjà scanné ?</a>
          </div>
        </header>

        <div className="container">

          {/* Pourquoi c’est dangereux */}
          <section aria-labelledby="pourquoi">
            <h2 id="pourquoi">Pourquoi c’est dangereux (expliqué simplement)</h2>
            <div className="grid cols-3">
              <article className="card">
                <span className="pill">1 · Adresse masquée</span>
                <h3>Vous ne voyez pas l’URL</h3>
                <p>Un QR code cache l’adresse réelle. Un escroc peut vous envoyer vers la copie d’un site (banque, livraison, messagerie) et voler vos identifiants.</p>
              </article>
              <article className="card">
                <span className="pill">2 · Remplacement facile</span>
                <h3>Un autocollant peut piéger</h3>
                <p>Un QR légitime (resto, parking, affiche) peut être recouvert par un faux, pointant vers un lien piégé ou un paiement frauduleux.</p>
              </article>
              <article className="card">
                <span className="pill">3 · Actions rapides</span>
                <h3>Trop tard en un clic</h3>
                <p>Certains liens déclenchent téléchargements/appels ou ouvrent une page qui demande carte bancaire, mots de passe ou code de vérification.</p>
              </article>
            </div>
          </section>

          {/* Vérification en 5 secondes */}
          <section aria-labelledby="verif">
            <h2 id="verif">La vérification en <span className="k">5 secondes</span></h2>
            <div className="card">
              <ul className="steps">
                <li><span className="dot"></span><div><strong>Lisez l’URL AVANT d’ouvrir.</strong> L’app appareil photo affiche une bannière : vérifiez le <span className="k">domaine</span> (orthographe et nom principal). <em>Le cadenas HTTPS ne suffit pas.</em></div></li>
                <li><span className="dot"></span><div><strong>Vérifiez l’origine.</strong> Qui a posé ce QR ? Le lieu est-il logique ? Méfiez-vous des autocollants et QR détachables.</div></li>
                <li><span className="dot"></span><div><strong>Attention aux redirections/raccourcisseurs.</strong> Si l’URL est raccourcie ou étrange, <span className="danger">n’ouvrez pas</span>.</div></li>
                <li><span className="dot"></span><div><strong>N’installez jamais d’app via QR.</strong> Téléchargez uniquement depuis l’<span className="k">App Store</span> ou le <span className="k">Play Store</span>.</div></li>
              </ul>
            </div>
          </section>

          {/* Règles d’or */}
          <section aria-labelledby="regles">
            <h2 id="regles">Les 3 règles d’or</h2>
            <div className="rules card">
              <div className="rule"><div className="num">1</div><div><strong>Contexte clair</strong> : s’il n’y a ni logo, ni nom de domaine à côté du QR, considérez-le comme suspect.</div></div>
              <div className="rule"><div className="num">2</div><div><strong>Domaine avant tout</strong> : fiez-vous au <em>nom de domaine</em>, pas au design du site ni au cadenas.</div></div>
              <div className="rule"><div className="num">3</div><div><strong>Pas d’urgence</strong> : “votre compte va être fermé”, “payer tout de suite” = probable arnaque.</div></div>
            </div>
          </section>

          {/* Exemples */}
          <section aria-labelledby="scenarios">
            <h2 id="scenarios">Exemples concrets</h2>
            <div className="grid cols-3">
              <div className="card"><h3>Parking</h3><p>Un QR collé sur l’horodateur mène à un faux paiement. Résultat : débit vers l’escroc.</p></div>
              <div className="card"><h3>Restaurant</h3><p>Menu QR remplacé : vous laissez vos données carte sur une page copiée.</p></div>
              <div className="card"><h3>Colis</h3><p>QR “reprogrammer la livraison” : vous entrez vos identifiants et perdez le colis.</p></div>
            </div>
          </section>

          {/* Que faire */}
          <section id="agir" aria-labelledby="agir-title">
            <h2 id="agir-title">Que faire si vous avez déjà scanné ?</h2>
            <ul className="steps">
              <li><span className="dot"></span>Fermez la page et ne cliquez sur rien.</li>
              <li><span className="dot"></span>Scannez votre appareil avec un antivirus mobile ou vérifiez les applications inconnues.</li>
              <li><span className="dot"></span>Changez vos mots de passe sensibles si vous avez entré des identifiants.</li>
              <li><span className="dot"></span>Surveillez vos comptes bancaires pendant quelques jours.</li>
            </ul>
          </section>

          <footer>
            ⚡ Site de prévention – Ne scannez pas n’importe quel QR code – 2025
          </footer>

        </div>
      </div>
    </div>
  );
}
