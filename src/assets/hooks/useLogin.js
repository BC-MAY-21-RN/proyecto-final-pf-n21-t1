import {useEffect, useState} from 'react';

const bothIsOk = (a, b) => {
  return a.isOk && b.isOk;
};

export const useLogin = () => {
  const [email, setEmail] = useState({value: '', isOk: false});
  const [password, setPassword] = useState({value: '', isOk: false});
  const [submit, setSubmit] = useState(true);

  useEffect(() => {
    setSubmit(!bothIsOk(email, password));
  }, [email, password]);

  const setState = (action, value, isOk) => {
    if (action === 'email') {
      setEmail({value, isOk});
    } else if (action === 'password') {
      setPassword({value, isOk});
    }
  };

  return [{email, password, submit}, setState];
};
