import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";
import "./Register.style.scss";
export default function Register() {
  return (
    <div className="page-register">
      <div className="image">
        <img
          src="https://cdn.dribbble.com/users/6223422/screenshots/15664759/media/0e205195df078ffbf54a3caf0526c782.jpg"
          alt=""
        />
      </div>
      <div className="form-register">
        <div className="form-header">
          <div className="subtitle">
            <span>Cadastre-se</span>
          </div>
          <div className="heading">
            <span>Crie uma conta agora</span>
          </div>
        </div>
        <div className="form">
          <Input type="text" label="Nome Completo" placeholder="Meu nome" />
          <Input type="email" label="Email" placeholder="Ex:example@mail.com" />
          <Input type="tel" label="Telefone" placeholder="(DDD) X XXXX-XXXX" />
          <Input type="password" label="Senha" placeholder="*********" />
        </div>
        <div className="form-footer">
          <Button bgColor="bg-green" text="Cadastrar"></Button>
          <div className="create-account">
            Já possui uma conta? <Link to="/">Faça o login agora</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
