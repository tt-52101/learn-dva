import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import UserList from './list';
import { routerRedux } from 'dva/router';
import Introduce from '../../components/introduce/'
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
	const introduceProps = {
		title: 'Icon 图标',
		titleDescription: '语义化的矢量图形。',
		subtitle: '图标的命名规范',
		component: 'icon',
		subDescriptions: ['实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；']
	}
  return (
  	// <h1>Welcome</h1>
  	<Introduce {...introduceProps}></Introduce>
    // <UserList {...userListProps} />
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