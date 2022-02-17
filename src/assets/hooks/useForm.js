import {useEffect, useState} from 'react';

const bothIsOk = (a, b, c, type) => {
  if (type === 'register') {
    return a.isOk && b.isOk && c.isOk;
  }
  return a.isOk && b.isOk;
};

export const useForm = type => {
  const [name, setName] = useState({value: '', isOk: false});
  const [email, setEmail] = useState({value: '', isOk: false});
  const [password, setPassword] = useState({value: '', isOk: false});
  const [submit, setSubmit] = useState(true);

  useEffect(() => {
    setSubmit(!bothIsOk(email, password, name, type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
