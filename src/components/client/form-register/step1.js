import React from 'react';
import PictureAvatar from '../../shared/widgets/PictureAvatar';
import TextArea from '../../shared/widgets/TextArea';
import { Label } from './style';
import Input from '../../shared/widgets/Input';

export default function Step1({ handleStep, data, formData }) {
  return (
    <div className="fadeIn">
      <div className="separator">
        <div className="group">
          <PictureAvatar changePic={(value) => data('picture', value)} />
        </div>
        <div className="group">
          <Label>Nome Completo</Label>
          <Input
            type="text"
            value={formData.name.value}
            onChange={(e) => data('name', e.target.value)}
          />
          { (formData.name.required && formData.name.validate === false)
            && <small>{formData.name.message}</small> }
          <Label>E-mail</Label>
          <Input
            placeholder="@mail.com"
            type="email"
            value={formData.email.value}
            onChange={(e) => data('email', e.target.value)}
          />
          { (formData.email.required && formData.email.validate === false)
            && <small>{formData.email.message}</small> }
        </div>
      </div>
      <div className="separator">
        <div className="group">
          <Label>CPF</Label>
          <Input
            mask="999.999.999-99"
            type="text"
            value={formData.cep.value}
            onChange={(e) => data('cpf', e.target.value)}
          />
          { (formData.cpf.required && formData.cpf.validate === false)
            && <small>{formData.cpf.message}</small> }
        </div>
        <div className="group">
          <Label>Telefone</Label>
          <Input
            mask="(99) 99999-9999"
            type="text"
            value={formData.phone.value}
            onChange={(e) => data('phone', e.target.value)}
          />
          { (formData.phone.required && formData.phone.validate === false)
            && <small>{formData.phone.message}</small> }
        </div>
      </div>
      <div className="separator">

        <div className="group">
          <Label>CRM</Label>
          <Input
            type="text"
            value={formData.crm.value}
            onChange={(e) => data('crm', e.target.value)}
          />
          { (formData.crm.required && formData.crm.validate === false)
            && <small>{formData.crm.message}</small> }
        </div>
        <div className="group">
          <Label>Data de nascimento</Label>
          <Input
            mask="99/99/9999"
            type="text"
            value={formData.birthdate.value}
            onChange={(e) => data('birthdate', e.target.value)}
          />
          { (formData.birthdate.required && formData.birthdate.validate === false)
            && <small>{formData.birthdate.message}</small> }
        </div>
        <div className="group">
          <Label>RQE (opcional)</Label>
          <Input
            type="text"
            value={formData.rqe.value}
            onChange={(e) => data('rqe', e.target.value)}
          />
        </div>
      </div>
      <div className="group">
        <Label>Descreva seu perfil (opcional)</Label>
        <TextArea
          type="text"
          defaultValue={formData.description.value}
          onChange={(e) => data('description', e.target.value)}
        />
      </div>
    </div>
  );
}
