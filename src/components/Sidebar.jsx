import { AtSignIcon, CalendarIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
        <ListItem>
            <Image src="../public/img/logo-white.png" alt="Your image alt text"></Image>
        </ListItem>
        <ListItem>
            <NavLink to="/">
                <ListIcon as={CalendarIcon} color="white"/>
                Dashboard
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/profile">
                <ListIcon as={AtSignIcon} color="white"/>
                Profile
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/create">
                <ListIcon as={EditIcon} color="white"/>
                Messages
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/create">
                <ListIcon as={SettingsIcon} color="white"/>
                Settings
            </NavLink>
        </ListItem>
    </List>
  )
}
