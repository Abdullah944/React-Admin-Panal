// in src/App.js
import * as React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, EditGuesser, Resource } from "react-admin";
import { UserList } from "./component/UserList";
import PostIcon from "@mui/icons-material/Book";
import { PostCreate, PostList } from "./component/Posts";
import Dashboard from "./component/Dashboard";
import authProvider from "./component/AuthProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      create={PostCreate}
      list={PostList}
      edit={EditGuesser}
      icon={PostIcon}
    />
  </Admin>
);

export default App;
