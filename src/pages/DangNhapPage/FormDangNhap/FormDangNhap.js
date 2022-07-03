import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { userService } from "../../../service/userService";
import { useHistory } from "react-router-dom";
import { localStoreService } from "../../../service/localStoreService";
import { useDispatch } from "react-redux";
import { setUserInforAction } from "../../../redux/actions/userActions";
export default function FormDangNhap() {
  let hisotry = useHistory();
  let dispatch = useDispatch();

  const onFinish = (values) => {
    userService
      .dangNhap(values)
      .then((res) => {
        message.success("Đăng nhập thành công");
        localStoreService.setUserLocal(res.data.content);
        dispatch(setUserInforAction(res.data.content));
        setTimeout(() => {
          hisotry.push("/");
        }, 3000);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại ");
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" container mx-auto py-10">
      <Form
        layout="vertical"
        name="basic"
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
              message: "Username không được bỏ trống",
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
              message: "Password không được bỏ trống",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <button className=" rounded px-7 py-2 bg-blue-500 text-white">
            Đăng nhập
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
