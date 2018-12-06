import React from 'react';

import FlaskCrudApi from './FlaskCrudApi';
import ArticleGet from './ArticleGet';

class ArticleApi extends React.Component{
	state = {
		authToken: '',
		enabled: true
	}

	doLoginRequest = async () => {
		var response = await FlaskCrudApi.post('https://localhost:5000/auth', {
			//crossDomain: true,
			username: 'teste',
			password: 'teste123'
		});
		this.setState({
			authToken: response.data.access_token,
			enabled: false 
		})
		console.log(this.state.authToken);
	}

	renderLoginButton(){
		return (
			<button onClick={this.doLoginRequest}>Login</button>			
		);
	}
	
	

	render(){
		return (
			<div className="ui container">
				{ this.state.enabled ? this.renderLoginButton() : <p>{this.state.authToken}</p> }
				{ this.state.authToken ? <ArticleGet authToken={this.state.authToken} /> : null}
			</div>		
		)
	};
}

export default ArticleApi;
