import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
	const { eventId } = props;

	const notificationCtx = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [commentsList, setCommentsList] = useState([]);

	useEffect(() => {
		if (showComments && !commentsList.length) {
			notificationCtx.showNotification({
				title: 'Loading...',
				message: 'Retrieving stored comments.',
				status: 'pending'
			});

			fetch(`/api/comments/${eventId}`)
				.then(res => {
					if (res.ok) {
						return res.json();
					}

					return res.json().then(error => {
						throw new Error(error.message || 'Something went wrong!')
						})
				})
				.then(data => {
					setCommentsList(data.comments);
					notificationCtx.hideNotification();
				})
				.catch(error => {
					notificationCtx.showNotification({
						title: 'Error!',
						message: error.message || 'Unable to load stored comments!',
						status: 'error'
					});
				});
		}
	}, [showComments])

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	function addCommentHandler(commentData) {

	notificationCtx.showNotification({
		title: 'Sending...',
		message: 'Saving your comment...',
		status: 'pending'
	});

		fetch(`/api/comments/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return res.json().then(error => {
					throw new Error(error.message || 'Something went wrong!')
				})
			})
			.then(data => {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Your comment was saved successfully!',
					status: 'success'
				});
			})
			.catch(error => {
				notificationCtx.showNotification({
					title: 'Error!',
					message: error.message || 'Saving is failed!',
					status: 'error'
				});
			})
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList comments={commentsList} />}
		</section>
	);
}

export default Comments;