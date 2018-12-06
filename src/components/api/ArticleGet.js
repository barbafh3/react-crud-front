import React from 'react';

import axios from './FlaskCrudApi';

class ArticleGet extends React.Component{
	
	state = {
		authToken: this.props.authToken,
		articleList: [],
		axiosData: { 
			params: {'request-type': 'listAll'},
			headers: {
				'Authorization': `JWT ${this.props.authToken}`,
				'Content-Type': 'application/json'
			}
		}
	}

	componentDidMount = async () => {
		console.log(this.state.axiosData);
		var response = await axios.get('https://localhost:5000/articles', this.state.axiosData);
		this.setState({articleList: response.data});
		console.log(this.state.articleList);
	}

	renderArticleList() {
		return (
			this.state.articleList.map((article, key) => {
				return (
					<div className="ui card" key={key}>
						<div className="content">
							<div className="header">
								Title: {article.title}
							</div>
							Text: {article.text}
						</div>
					</div>
				);
			})
		);
	}


	render(){
		return (
//			<div className="ui nverted segment">
				<div >
					{this.state.articleList ? this.renderArticleList() : <p>aaaaa</p>}
				</div>
//			</div>
		);
		//return <div>aaa</div>
	};
}

export default ArticleGet;
