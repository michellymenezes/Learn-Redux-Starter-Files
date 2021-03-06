import React from 'React';
import { Link } from 'react-router';

const Text = React.createClass({
	render() {
		const { post, i, comments } = this.props;
		return (
			<div className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
					{post.caption}
					</Link>
				</div>
			</div>
		)
	}
});

export default Text;