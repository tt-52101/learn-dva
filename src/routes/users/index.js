import React from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

import UserList from './list';
import styles from './index.css';



function Users({ location, dispatch, list, loading, page, total }) {
	console.log(list)
 
	const userListProps = {
		dataSource: list,
		loading,
		current: page,
		total,
		deleteHandler(id) {
			dispatch({
				type: 'users/remove',
				payload: id,
			});
		},

		pageChangeHandler(page) {
			dispatch(routerRedux.push({
				pathname: '/users',
				query: { page },
			}));
		},

		editHandler(id, values) {
			dispatch({
				type: 'users/patch',
				payload: { id, values },
			});
		},

		createHandler(values) {
			dispatch({
				type: 'users/create',
				payload: values,
			});
		}
	}

	return (
		<UserList {...userListProps} />
	);
}


function mapStateToProps(state, s) {
	console.log(s)
	const { list, page, total } = state.users;
	return {
		list,
		page,
		total,
		loading: state.loading.models.users
	}
 
}

export default connect(mapStateToProps)(Users);