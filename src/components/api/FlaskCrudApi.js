import axios from 'axios';

export default axios.create({
	timeout: 10000,
	responseType: 'json',
	withCredentials: true,
});
