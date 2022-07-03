import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import { userService } from "../../../service/userService";

export default function FormDangKi() {

  
  const onFinish = (values) => {
    let dataRegister = { ...values, maNhom: "GP01" };

    userService
      .dangKy(dataRegister)
      .then((res) => {
        console.log("res: ", res);
        message.success("Đăng kí thành công");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      })
      .catch((err) => {
        message.error(err.response.data.content);
        console.log("err: ", err.response.data.content);
      });
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <div className="container mx-auto p-10 bg-white rounded">
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Email không hợp lệ",
            },
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="soDt"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Họ tên"
          name="hoTen"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button className=" bg-orange-400 text-white" htmlType="submit">
            Đăng kí
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
