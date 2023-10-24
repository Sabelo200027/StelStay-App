import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField } from "react-admin";

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                <Datagrid rowClick="show"></Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <TextField source="company.name" />
                    <UrlField source="website"/>
                </Datagrid>
            )}
        </List>
    );
};