import React from "react";
import { Link } from "react-router-dom";

import "./CodeVerifyUser.style.scss";
import loginIlustration from "../../assets/image_login.webp";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";

export default function CodeVerifyUser() {
  return (
    <div className="page-code-verify">
      <div className="image">
        <img src={loginIlustration} alt="Imagem login" />
      </div>

      <div className="form-code-verify">
        <div className="form-header">
          <div className="heading">
            <span>Codigo de verificação</span>
          </div>
          <div className="subtitle">
            <span>
              Insira o codigo abaixo que enviamos para o seu telefone (66) XXXXX
              - 5420
            </span>
          </div>
        </div>
        <div className="form">
          <Input type="text" label="Código" placeholder="XXXXX" />
        </div>
        <div className="form-footer">
          <Button bgColor="bg-green" text="Validar" />
          <div className="create-account">
            <Link to="/">Voltar para o login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
