import Logo from "../../assets/Shape.svg";

import { MagnifyingGlass, Bag } from "phosphor-react";

import "./styles.scss";

export const Navbar = () => {
  return (
    <nav className="container-nav">
      <img src={Logo} className="logo-nav" />

      <ul className="ul-nav">
        <a href="/men">homem</a>
        <a href="/woman">mulher</a>
        <a href="child">criança</a>
        <a href="/customize">customizar</a>
      </ul>

      <label className="label-input" htmlFor="input">
        <MagnifyingGlass className="icon-input" size={16} color="#000" />
        <input type="text" placeholder="Pesquisar" id="input" />
      </label>
      <Bag className="bag-icon" size={34} color="#000" />
      <div className="direita"></div>
      <div className="esquerda"></div>
    </nav>
  );
};
