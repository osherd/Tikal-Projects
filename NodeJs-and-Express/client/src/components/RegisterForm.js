import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import {
  handleFetchClickLogin,
  handleGetUsers,
  handleDeleteUser
} from "./utils";

const RegisterForm = () => {
  const [userName, setUserName] = useState();
  const [nickName, setNickName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const data = { userName, nickName, password, email };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="">
        <Avatar className=""></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="uname"
                name="user"
                variant="outlined"
                required
                fullWidth
                id="user"
                label="user"
                onChange={e => setUserName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nickName"
                label="nick Name"
                name="nickName"
                autoComplete="nname"
                onChange={e => setNickName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={e => handleFetchClickLogin(e, data)}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}></Box>
      <button onClick={handleGetUsers(data)}>get users</button>
      <button onClick={handleDeleteUser(data)}>delete user</button>
    </Container>
  );
};
export default RegisterForm;
