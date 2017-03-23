import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import UserList from './list';
import { routerRedux } from 'dva/router';
// import MainLayout from '../components/MainLayout/MainLayout';

function Users({ location, dispatch, users }) {
	const { list, loading, page, total } = users;
	console.log(users)
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
 

function mapStateToProps(state) {
    const users = {
    	loading: state.loading.models.users,
    	...state
    }
    return users;
}

export default connect(mapStateToProps)(Users);