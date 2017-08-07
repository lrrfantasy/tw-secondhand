import * as D from '../definitions';
import { fetchJson } from './utils';

const fetchJsonForUser = (url: string, user: D.UserForLogin) => 
fetchJson(url, {method: 'post',
headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  'username': user.username,
  'password': user.password})
});

export const register = (user: D.UserForLogin): Promise<D.User> => 
fetchJsonForUser('http://secondhand.leanapp.cn/users/register', user);

export const login = (user: D.UserForLogin): Promise<D.User> => {
return fetchJsonForUser('http://secondhand.leanapp.cn/users/login', user);
};
