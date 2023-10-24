import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, TextInput} from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users" />
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);