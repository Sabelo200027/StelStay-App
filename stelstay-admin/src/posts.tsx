import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
        </Datagrid>
    </List>
);