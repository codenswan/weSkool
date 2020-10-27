import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GlobalStore from '../../../utils/context/GlobalStore'

const Authenticated = (props) => {
  const store = GlobalStore.useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    axios
      .get('/api/users/current-user', {
        withCredentials: true,
      })
      .then((response) => {
        store.auth.dispatchAuth({
          type: 'set-user',
          payload: response.data.data,
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          return history.push('/');
        }
        console.log({ err });
      });
  }, []);

  return <>{props.children}</>;
};
export default Authenticated;
