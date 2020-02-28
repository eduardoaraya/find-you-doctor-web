import React from 'react';
import { Label } from './style';
import Input from '../../shared/widgets/Input';
import Debounce from '../../../helpers/debounce';

export default function Step2({
  handleStep, data, queryCep, formData,
}) {
  const debounce = Debounce(queryCep, 300);
  return (
    <div className="fadeIn">
      <div className="separator">
        <div className="group">
          <Label>CEP</Label>
          <Input
            type="text"
            mask="99999-999"
            value={formData.cep.value}
            onChange={(e) => {
              debounce(e.target.value);
            }}
          />
          { (formData.cep.required && formData.cep.validate === false)
          && <small>{formData.cep.message}</small> }
        </div>
        <div className="group">
          <Label>Rua</Label>
          <Input
            type="text"
            value={formData.street.value}
            onChange={(e) => data('street', e.target.value)}
          />
          { (formData.street.required && formData.street.validate === false)
          && <small>{formData.street.message}</small> }
        </div>
      </div>
      <div className="separator">
        <div className="group">
          <Label>Cidade</Label>
          <Input
            type="text"
            value={formData.city.value}
            onChange={(e) => data('city', e.target.value)}
          />
          { (formData.city.required && formData.city.validate === false)
          && <small>{formData.city.message}</small> }
        </div>
        <div className="group">
          <Label>Bairro</Label>
          <Input
            type="text"
            value={formData.neighborhood.value}
            onChange={(e) => data('neighborhood', e.target.value)}
          />
          { (formData.neighborhood.required && formData.neighborhood.validate === false)
          && <small>{formData.neighborhood.message}</small> }
        </div>
      </div>
      <div className="separator">
        <div className="group">
          <Label>UF</Label>
          <Input
            type="text"
            value={formData.state.value}
            onChange={(e) => data('state', e.target.value)}
          />
          { (formData.state.required && formData.state.validate === false)
          && <small>{formData.state.message}</small> }
        </div>
        <div className="group">
          <Label>Número</Label>
          <Input
            type="text"
            value={formData.number.value}
            onChange={(e) => data('number', e.target.value)}
          />
          { (formData.number.required && formData.number.validate === false)
          && <small>{formData.number.message}</small> }
        </div>
        <div className="group">
          <Label>Complemento</Label>
          <Input
            type="text"
            value={formData.complement.value}
            onChange={(e) => data('complement', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
