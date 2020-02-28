import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { Label } from './style';
import Input from '../../shared/widgets/Input';
import Button from '../../shared/widgets/Button';

export default function Step3({
  handleStep, data, formData, send,
}) {
  return (
    <div className="fadeIn">
      <div className="separator" style={{ maxWidth: '500px', flexWrap: 'wrap' }}>
        <div className="group">
          <Label>Senha</Label>
          <Input
            type="password"
            value={formData.password.value}
            onChange={(e) => data('password', e.target.value)}
          />
          { (formData.password.required && formData.password.validate === false)
            && <small>{formData.password.message}</small> }
        </div>
        <div className="group">
          <Label>Confirmar senha</Label>
          <Input
            type="password"
            value={formData.confirm_password.value}
            onChange={(e) => data('confirm_password', e.target.value)}
          />
          { (formData.confirm_password.required && formData.confirm_password.validate === false)
            && <small>{formData.confirm_password.message}</small> }
        </div>
      </div>
      <div className="separator" style={{ alignItems: 'center', margin: '35px 0 75px 0' }}>
        <Checkbox color="primary" onChange={(e) => data('terms', e.target.checked)} />
        <p>
          Li e concordo com
          <br />
          <Link className="link" to="terms" target="_blank"> Termos de uso </Link>
          e
          <Link className="link" to="privacy" target="_blank"> Politica de privacidade</Link>
        </p>
      </div>
      <div style={{ maxWidth: '250px', marginLeft: '40px' }}>

        { (formData.terms.required && formData.terms.validate === false)
            && <small>{formData.terms.message}</small> }
      </div>
      <div className="group btn-next">
        <Button text="Confirmar" type="button" onClick={() => send()} />
      </div>
    </div>
  );
}
