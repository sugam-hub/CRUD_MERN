import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 30px;
    }
`;

const AddUser = () => {

    const defaultValue = {
        name: "",
        username: "",
        email: "",
        phone: "",
    };

    const [user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
       await addUser(user);
    }

    return (
        <div>
            <Container>
                <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="name"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="username"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="email"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name="phone"/>
                </FormControl>

                <FormControl>
                    <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
                </FormControl>
            </Container>
        </div>
    );
}

export default AddUser;