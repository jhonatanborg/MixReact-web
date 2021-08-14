import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./ForgotPass.style.scss";
import loginIlustration from "../../assets/image_login.webp";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";

export default function ForgotPass() {
  let history = useHistory();
  function handlePage() {
    history.push("/confirmar-identidade");
  }
  return (
    <div className="page-forgot">
      <div className="image">
        <img src={loginIlustration} alt="Imagem login" />
      </div>

      <div className="form-forgot">
        <div className="form-header">
          <div className="heading">
            <span>Recuperação de conta</span>
          </div>
          <div className="subtitle">
            <span>
              Digite seu telefone para recuperar sua senha. Você receberá um sms
              com um codigo para recuperação de conta.
            </span>
          </div>
        </div>
        <div className="form">
          <Input type="tel" label="Telefone" placeholder="(DDD) XXXXX - XXXX" />
        </div>
        <div className="form-footer">
          <Button
            onClick={handlePage}
            bgColor="bg-green"
            text="Enviar código"
          />
          <div className="create-account">
            <Link to="/">Voltar para o login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
