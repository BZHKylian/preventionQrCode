// CompteurUnique.js
import React, { useEffect, useState } from 'react';
import { database, ref, runTransaction } from '../bdd/firebase'; // ajuste le chemin

function CompteurUnique() {
  const [visites, setVisites] = useState(null);

  useEffect(() => {
    // Vérifie si le visiteur a déjà été compté
    if (!localStorage.getItem('visited')) {
      const compteurRef = ref(database, 'compteur');

      // Incrémente le compteur de manière sécurisée
      runTransaction(compteurRef, (currentValue) => (currentValue || 0) + 1)
        .then((result) => setVisites(result.snapshot.val()))
        .catch((error) => console.error('Erreur Firebase:', error));

      // Marque l’utilisateur comme déjà compté
      localStorage.setItem('visited', 'true');
    } else {
      // Récupère la valeur actuelle sans incrémenter
      const compteurRef = ref(database, 'compteur');
      runTransaction(compteurRef, (currentValue) => currentValue || 0)
        .then((result) => setVisites(result.snapshot.val()))
        .catch((error) => console.error('Erreur Firebase:', error));
    }
  }, []);

  return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '10px',          // espace entre le texte et le badge
      backgroundColor: '#1A1A2E', // couleur de fond globale si tu veux
      padding: '0 20px',
      paddingRight:'0',
      borderRadius: '25px',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <span style={{ fontSize: '1.5rem' }}>Personnes ayant scanné</span>
    <span
      style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        backgroundColor: '#00BCD4', // couleur du badge
        padding: '5px 15px',
        borderRadius: '8px 25px 25px 8px',
      }}
    >
      {visites !== null ? visites : '0'}
    </span>
  </div>
);


}

export default CompteurUnique;
