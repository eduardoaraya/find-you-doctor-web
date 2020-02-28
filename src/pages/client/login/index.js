import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import Alert from '@material-ui/lab/Alert';

import {
  BackgroundBanner, BoxForm, Tab, Item, Flex, Header,
} from './style';
import FormLogin from '../../../components/client/form-login/FormLogin';
import FormRegister from '../../../components/client/form-register/FormRegister';
import Api from '../../../services/api';
import authService from '../../../services/auth-service';


function Login({ history }) {
  const [tab, setTab] = useState(1);
  const [classOfBox, setClassOfBox] = useState('min');
  const [alertMessage, setAlertMessage] = useState({
    show: false,
    message: '',
    color: 'info',
    severity: 'info',
  });

  const alert = useAlert();

  const changeTab = (n) => {
    setTab(n);
    if (n === 1) {
      return setClassOfBox('min');
    }
    return setClassOfBox('full');
  };

  const showAlertMessage = (type, message) => {
    setAlertMessage({
      show: true,
      color: type,
      severity: type,
      message,
    });
  };

  const handleError = (error) => {
    if (error.message === 'Network Error') {
      showAlertMessage('error', 'Sem conexão, tente novamente mais tarde!');
    } else if (error.response) {
      showAlertMessage('error', error.response.data.message);
    } else {
      console.log(error);
    }
  };

  const instanceFormData = async (data) => {
    const formData = new FormData();
    Object.entries(data)
      .forEach((keys) => {
        if (keys[0] === 'birthdate') {
          const newBirthdate = data.birthdate.split('/');
          formData.append('birthdate', `${newBirthdate[2]}-${newBirthdate[1]}-${newBirthdate[0]}`);
        } else {
          formData.append(keys[0], keys[1]);
        }
      });
    return formData;
  };

  const handleFormSubmitRegister = (data) => {
    instanceFormData(data)
      .then((formData) => {
        Api.web
          .post('/store', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            showAlertMessage('success', 'Cadastro realizado com sucesso!');
            setTab(1);
          })
          .catch((err) => handleError(err));
      });
  };

  const handleFormSubmitLogin = (data) => {
    Api.web
      .post('/login', data)
      .then((res) => {
        authService().authStore(res.data.user, res.data.token);
        history.push('/dashboard');
      })
      .catch((err) => handleError(err));
  };

  const validateStep1 = ({ email, crm, cpf }) => Api.web
    .get('/store/validation/', {
      params: {
        email: email.value,
        crm: crm.value,
        cpf: cpf.value,
      },
    })
    .catch((err) => {
      alert.error(err.response.data.message);
      throw new Error('Dados inváldos');
    });

  const renderForm = () => {
    if (tab === 1) {
      return (
        <FormLogin handleFormSubmit={handleFormSubmitLogin} />
      );
    }
    return (
      <FormRegister
        sizeOfBox={(size) => setClassOfBox(size)}
        validateStep1={validateStep1}
        handleFormSubmit={handleFormSubmitRegister}
      />
    );
  };

  const viewAlert = () => ({
    min() {
      if (window.innerWidth <= 1000 && alertMessage.show) {
        return (
          <Alert
            className="alert"
            severity={alertMessage.severity}
            color={alertMessage.color}
            onClose={() => {
              alertMessage.show = false;
              setAlertMessage({ ...alertMessage });
            }}
          >
            {alertMessage.message}
          </Alert>
        );
      }
      return (<span />);
    },
    full() {
      if (window.innerWidth > 1000 && alertMessage.show) {
        return (
          <Alert
            className="alert"
            severity={alertMessage.severity}
            color={alertMessage.color}
            onClose={() => {
              alertMessage.show = false;
              setAlertMessage({ ...alertMessage });
            }}
          >
            {alertMessage.message}
          </Alert>
        );
      }
      return (<span />);
    },
  });

  return (
    <Flex>
      <BackgroundBanner className="bg-left">
        { viewAlert().min() }
      </BackgroundBanner>
      <BackgroundBanner>
        <Header />
        <BoxForm className={classOfBox}>
          <Tab>
            <Item onClick={() => changeTab(1)} className={(tab === 1) ? 'active' : ''}>Login</Item>
            <Item onClick={() => changeTab(2)} className={(tab === 2) ? 'active' : ''}>Cadastre-se</Item>
          </Tab>
          {renderForm()}
        </BoxForm>
        { viewAlert().full() }
      </BackgroundBanner>
    </Flex>
  );
}


export default Login;
