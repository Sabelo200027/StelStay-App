import {Admin,Resource,ListGuesser,EditGuesser,ShowGuesser,} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList } from "./posts";

export const App = () => (
<Admin dataProvider={dataProvider}>
  <Resource name="users" list={ListGuesser} />
  <Resource name="users" list={UserList} />
  <Resource name="posts" list={ListGuesser} />
  <Resource name="posts" list={PostList} />
  <Resource name="posts" list={PostList} edit={EditGuesser} />
  <Resource name="users" list={UserList} show={ShowGuesser }recordRepresentation="name" />
</Admin>
);
