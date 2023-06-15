import React from "react";

const ChooseUs = () => {
  return (
    <section className="chooseUs" id="Services">
      <h1>
        POURQUOI <b>NOUS CHOISIR</b>
      </h1>
      <div className="choose-all">
        <div className="choose-container1">
          <div className="box">
            <i className="fa-solid fa-wallet"></i>
            <div className="box-txt">
              <h3>CONNECTEZ VOTRE PORTEFEUILLE</h3>
              <p>
                Utilisez Trust Wallet, Metamask ou pour vous connecter à
                l'application.
              </p>
            </div>
          </div>
          <div className="box">
            <i className="fa-solid fa-pen-ruler"></i>
            <div className="box-txt">
              <h3>SÉLECTIONNEZ VOTRE QUANTITÉ</h3>
              <p>
                Téléchargez votre crypto et définissez un titre, une description
                et un prix.
              </p>
            </div>
          </div>
          <div className="box">
            <i className="fa-solid fa-bolt"></i>
            <div className="box-txt">
              <h3>CONFIRMER LA TRANSACTION</h3>
              <p>
                Gagnez de l'argent en vendant votre crypto sur notre place de
                marché.
              </p>
            </div>
          </div>
        </div>
        <div className="choose-img">
          <img src="./assets/choose-main.png" alt="" />
        </div>
        <div className="choose-container2">
          <div className="box">
            <i className="fa-solid fa-satellite-dish"></i>
            <div className="box-txt">
              <h3>RECEVEZ VOS PROPRES NFTS</h3>
              <p>
                Investissez toutes vos cryptomonnaies en un seul endroit et sur
                une seule plateforme.
              </p>
            </div>
          </div>
          <div className="box">
            <i className="fa-solid fa-chess-knight"></i>
            <div className="box-txt">
              <h3>PRENDRE UN MARCHÉ POUR VENDRE</h3>
              <p>
                Découvrez, rassemblez les bonnes collections de crypto pour
                acheter ou vendre.
              </p>
            </div>
          </div>
          <div className="box">
            <i className="fa-solid fa-boxes-stacked"></i>
            <div className="box-txt">
              <h3>PILOTEZ VOTRE COLLECTION</h3>
              <p>
                Nous facilitons la découverte, l'investissement et la gestion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
