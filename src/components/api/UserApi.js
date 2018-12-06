import React from 'react';

import axios from './FlaskCrudApi'

class UserApi extends React.Component{

	state = { list: [] };

	getUserList = async () => {
		var response = await axios.get('https://localhost:5000/users');
		console.log(response);
		this.setState({ list: response.data });
		console.log(this.state.list);
	}

	render(){
		var mappedList = this.state.list.map((user, key) => {
			return (
				<div key={key}>
					<p>ID: {user.id}</p>
					<p>Username: {user.username}</p>
				</div>
			)
		});
		return (
			<div>
				<button onClick={this.getUserList}>Get Users</button>
				<p>Usuarios:</p>
				{mappedList}
			</div>
		);
	}
}

export default UserApi;
