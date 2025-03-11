import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/UserProfile';
import React, { useState } from "react";
import UserProfile2 from './components/UserProfile2';
import MyForm from './components/MyForm';

function App() {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };


  return (
    <div>
      <h1>Ứng Dụng React</h1>

      {/* Trường hợp hợp lệ */}
      <UserProfile name="Nguyễn Văn A" age={25} />

      {/* Trường hợp name không hợp lệ */}
      <UserProfile name="" age={25} />

      {/* Trường hợp tuổi không hợp lệ */}
      <UserProfile name="Nguyễn Văn B" age="twenty five" />

      {/* Trường hợp không nhập tuổi */}
      <UserProfile name="Nguyễn Văn C" age={null} />

      <hr></hr>

      <h1>Ứng Dụng React</h1>
      <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
      <UserProfile2
        name="Nguyễn Văn B"
        age="twenty five"
        onSubmit={handleFormSubmit}
      />
      <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />


      <h1>Ứng Dụng React</h1>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />

    </div>
  );
}

export default App;
