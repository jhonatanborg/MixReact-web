import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Login.style.scss";
import loginIlustration from "../../assets/image_login.webp";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";

export default function Login() {
  return (
    <div className="page-login">
      <div className="image">
        <img src={loginIlustration} alt="Imagem login" />
      </div>

      <div className="form-login">
        <div className="form-header">
          <div className="subtitle">
            <span>Bem vindo de volta</span>
          </div>
          <div className="heading">
            <span>Faça login na sua conta</span>
          </div>
        </div>
        <Input type="email" label="E-mail" placeholder="Ex: example@mail.com" />
        <Input type="password" label="Senha" placeholder="*****" />
        <div className="section-login">
          <div>
            <input type="checkbox" name="" id="" />
            <span>Lembrar senha</span>
          </div>
          <div className="forgot-pass">
            <a href="http://">Esqueci minha senha?</a>
          </div>
        </div>
        <div className="form-footer">
          <Button bgColor="bg-green" text="Entrar" />
          <Button
            bgColor="bg-secondary"
            icon="facebook"
            text="Ou faça login com o Facebook"
          />
          <div className="create-account">
            Ainda não tem uma conta?{" "}
            <Link to="/signup">Criar conta grátis</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
