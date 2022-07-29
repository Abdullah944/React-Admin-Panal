// in src/App.js
import * as React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, EditGuesser, Resource } from "react-admin";
import { UserList } from "./component/UserList";
import PostIcon from "@mui/icons-material/Book";
import { PostCreate, PostList } from "./component/Posts";
import Dashboard from "./component/Dashboard";
import authProvider from "./component/AuthProvider";

//* you have to add your api this is from the tutorial:
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  // * inside the admin add the data provider and the auth provider
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    {/* you can add custom components */}
    <Resource name="users" list={UserList} />
    {/* you can use the create/ delete / edit icon ...etc to the component */}
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
