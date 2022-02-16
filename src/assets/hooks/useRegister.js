import {useEffect, useState} from 'react';

const bothIsOk = (a, b, c) => {
  return a.isOk && b.isOk && c.isOk;
};

export const useRegister = () => {
  const [name, setName] = useState({value: '', isOk: false});
  const [email, setEmail] = useState({value: '', isOk: false});
  const [password, setPassword] = useState({value: '', isOk: false});
  const [submit, setSubmit] = useState(true);

  useEffect(() => {
    setSubmit(!bothIsOk(email, password, name));
  }, [email, password, name]);

  const setState = (action, value, isOk) => {
    if (action === 'email') {
      setEmail({value, isOk});
    } else if (action === 'password') {
      setPassword({value, isOk});
    } else if (action === 'name') {
      setName({value, isOk});
    }
  };

  return [{email, password, name, submit}, setState];
};
