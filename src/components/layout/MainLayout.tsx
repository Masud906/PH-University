import { Layout, Menu, MenuProps } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Children, createElement } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { adminPaths, adminSidebarItems } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebaritemsGenerator";
import Sidebar from "./Sidebar";
const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },

//   {
//     key: "3",
//     label: "User Management",
//     children: [
//       {
//         key: "create-admin",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "create-faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "create-student",
//         label: <NavLink to="/admin/create-student">Create Faculty</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayought = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayought;
