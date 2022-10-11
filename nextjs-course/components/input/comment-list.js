import classes from './comment-list.module.css';

function CommentList(props) {

	return props.comments.length > 0 &&
		<ul className={classes.comments}>
			{props.comments.map(comment => (
				<li key={comment.id}>
					<p>{comment.text}</p>
					<div>
						By <address>{comment.name}</address>
					</div>
				</li>
			))}
		</ul>;
}

export default CommentList;