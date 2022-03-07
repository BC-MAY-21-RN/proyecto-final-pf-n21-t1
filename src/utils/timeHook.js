import {useEffect} from 'react';

export default function TimeHook(beginTime, finishTime, setError, setOk) {
  useEffect(() => {
    if (beginTime > finishTime) {
      setError('La fecha no es correcta');
      setOk(false);
    } else {
      setError();
      setOk(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beginTime, finishTime]);
}
