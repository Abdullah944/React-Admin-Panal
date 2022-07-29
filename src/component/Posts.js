// in src/posts.js
import * as React from "react";
import {
  Create,
  List,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

//  Add search to the list:
const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users">
    <SelectInput optionText="name" />
  </ReferenceInput>,
];
//  create a list of posts from the filtered posts:
export const PostList = () => <List filters={postFilters}>abd</List>;

//  Press on the create button to create a new post:
export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
