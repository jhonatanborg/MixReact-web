import React from "react";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";
import "./Register.style.scss";
export default function Register() {
  return (
    <div className="page-register">
      <div className="image">
        <img
          src="https://cdn.dribbble.com/users/982190/screenshots/15316226/media/69df02982f5cd8fd3cb87a0aed981b48.png"
          alt=""
        />
      </div>
      <div className="form-register">
        <div className="form-header">
          <div className="subtitle">
            <span>Cadastre-se</span>
          </div>
          <div className="heading">
            <span>Crie uma conta gratis agora</span>
          </div>
        </div>
        <Input type="text" label="Nome Completo" placeholder="Meu nome" />
        <Input type="email" label="Email" placeholder="Ex:example@mail.com" />
        <Input type="tel" label="Telefone" placeholder="(DDD) X XXXX-XXXX" />
        <Input type="password" label="Senha" placeholder="*********" />
        <div className="form-footer">
          <Button bgColor="bg-green" text="Cadastrar"></Button>
        </div>
      </div>
    </div>
  );
}
