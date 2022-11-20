import { Button, Modal } from "antd";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const HeaderLogin = () => {
  const [open, setOpen] = useState(false);
  const { user, login, logout } = useContext(UserContext);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { username, password } = e.target.elements;
    login(username.value, password.value);
  };

  return (
    <>
      {user ? (
        <>
          <li>Welcome {user.username}</li>
          <li>
            <Button onClick={logout} type="primary">
              logout
            </Button>
          </li>
        </>
      ) : (
        <li onClick={showModal}>
          <i className="fa-solid fa-user"></i>Login/Register
        </li>
      )}

      <Modal open={open} onOk={handleOk} onCancel={handleCancel} footer={[]}>
        <div>
          <h2 className="h-title-login">login/signUp</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin} id="loginForm">
          <label className="login-label" htmlFor="username">
            UserName
            <input type="text" id="username" required />
          </label>

          <label className="login-label" htmlFor="password">
            password
            <input type="password" id="password" required />
          </label>

          <div className="login-button-group">
            <button className="button-login" type="submit" onClick={handleOk}>
              login
            </button>
            <button className="button-login" onClick={handleCancel}>
              return
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default HeaderLogin;
