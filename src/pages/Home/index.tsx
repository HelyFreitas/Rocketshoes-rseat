import { Navbar } from "../../components/Navbar";

import { ArrowRight } from "phosphor-react";

import Shoe from "../../assets/shoes.png";
import ImgShoe1 from "../../assets/img-shoes1.png";
import ImgShoe2 from "../../assets/img-shoes2.png";
import ImgShoe3 from "../../assets/img-shoes3.png";
import VidImg from "../../assets/Vídeo.png";

import "./styles.scss";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left">
          <div className="container-text">
            <h1>Tênis Esportivo Para Corrida Top</h1>
            <p className="paragraph-text">
              Esse tênis tem o intuito de te deixar ainda mais fitness, focado,
              e musculoso.
            </p>
            <p className="value">R$ 1.000,00</p>

            <div className="btn-cont">
              <button>COMPRAR</button>
            </div>
          </div>
        </div>
        <div className="rigth">
          <img className="shoe" src={Shoe} alt="" />
          <div className="miniatura-shoes">
            <img src={ImgShoe1} alt="" />
            <img src={ImgShoe2} alt="" />
            <img src={ImgShoe3} alt="" />
          </div>
        </div>
      </div>
      <footer>
        <img className="img-footer1" src={VidImg} />

        <ul>
          <a href="">FACEBOOK</a>
          <a href="">INSTAGRAM</a>
          <a href="">YOUTUBE</a>
          <a href="">TWITER</a>
        </ul>
        <button>
          EXPLORE MAIS <ArrowRight size={20} color="#fff" />
        </button>
      </footer>
    </>
  );
};
