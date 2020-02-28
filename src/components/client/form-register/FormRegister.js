import React, { useState } from 'react';
import CepPromise from 'cep-promise';
import { useAlert } from 'react-alert';

import { Form } from './style';
import formDataProvider from './formdata-provider';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

export default function FormRegister({ sizeOfBox, handleFormSubmit, validateStep1 }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(formDataProvider);
  const alert = useAlert();

  const changeValueFormData = (name, value) => {
    formData[name].value = value;
    if (formData[name].required && formData[name].value !== '') {
      formData[name].validate = true;
    } else {
      formData[name].validate = false;
    }
    setFormData({ ...formData });
  };

  const send = () => {
    const data = Object.keys(formData).reduce((interator, item) => {
      interator[item] = formData[item].value;
      return interator;
    }, {});
    handleFormSubmit(data);
  };


  const queryCep = (cep) => {
    if (cep && cep.length >= 9) {
      CepPromise(cep)
        .then((res) => {
          changeValueFormData('cep', res.cep);
          changeValueFormData('state', res.state);
          changeValueFormData('city', res.city);
          changeValueFormData('neighborhood', res.neighborhood);
          changeValueFormData('street', res.street);
        })
        .catch(() => alert.error('CEP inválido!'));
    }
  };

  sizeOfBox('full');
  return (
    <Form>
      <Step1
        data={changeValueFormData}
        formData={formData}
      />
      <Step2
        queryCep={queryCep}
        data={changeValueFormData}
        formData={formData}
      />
      <Step3
        data={changeValueFormData}
        formData={formData}
        send={send}
        showText={(size) => sizeOfBox(size)}
      />
    </Form>
  );
}
