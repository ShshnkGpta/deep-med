import React from 'react';
import { List } from 'antd';

const Reports = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.id}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://www.deepmed.io/wp-content/uploads/2019/05/logo-small-e1557422772468.png"
            />
          }
        >
          <List.Item.Meta
            avatar={item.result}
            title={<a href={`/reports/${item.id}`}> {item.title} </a>}
            description={item.desc}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}

export default Reports;