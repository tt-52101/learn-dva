import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';

import styles from './index.css';
import { PAGE_SIZE } from '../../constants';
import UserModal from './modal.js';

function UserList({dataSource, current, loading, deleteHandler, pageChangeHandler, editHandler, createHandler, total}) {

    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="">{text}</a>,
    },  {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },{
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
    },{
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },{
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (<span className={styles.operation}>
          <UserModal modalTitle = "Edit" record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>),
    },];
    return (
        <div className={styles.normal}>
            <div>
                <div className={styles.create}>
                    <UserModal modalTitle="create" record={{}} onOk={createHandler}>
                        <Button type="primary">Create User</Button>
                    </UserModal>
                </div>
                <Table columns={columns} dataSource={dataSource} loading={loading} rowKey={record => record.id} pagination={false} />
                <Pagination className="ant-table-pagination" total={total} current={current} pageSize={PAGE_SIZE} onChange={pageChangeHandler} />
            </div>
        </div>
    );
}


export default UserList;