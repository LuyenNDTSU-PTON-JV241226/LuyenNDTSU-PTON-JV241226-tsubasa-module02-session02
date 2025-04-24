import React from 'react';

const users = [
  {
    id: 1,
    userName: 'Malcolm Lockyer',
    dateOfBirth: '21/03/1961',
    gender: 'Nam',
    address: 'New York'
  },
  {
    id: 2,
    userName: 'Maria',
    dateOfBirth: '11/02/1990',
    gender: 'Nữ',
    address: 'London'
  }
];

const UserTable = () => {
  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>Địa chỉ</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.userName}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.gender}</td>
            <td>{user.address}</td>
            <td>
              <button style={{ marginRight: '8px', backgroundColor: 'orange', color: 'white' }}>Sửa</button>
              <button style={{ backgroundColor: 'red', color: 'white' }}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;