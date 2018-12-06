import React from 'react';

import UserApi from './api/UserApi';
import ArticleApi from './api/ArticleApi';

class App extends React.Component{

	render(){
		return (
			<div>
				<UserApi /><br/>
				--------------------------------------------------
				<ArticleApi />
			</div>
		);
	};
}

export default App;
