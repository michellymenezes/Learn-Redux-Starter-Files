import React from 'react';
import Text from './Text';

const TaskList = React.createClass({
	render(){
		return (
			<div className="task-list">
			{this.props.posts.map((post,i) => <Text {... this.props} key={i} i={i} post={post}/>)}
			</div>
		)
	}
});

export default TaskList;