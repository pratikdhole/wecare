import React from 'react'
import main from '../Assets/main.jpg';
import login from '../Assets/login.jpg';
import { Button, Grid, Box, TextField, Typography, Container, Avatar, Checkbox, FormControlLabel, Stack, Slide } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../service/ApiService';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "60%",
  left: "50%",
  right: "10%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 20
};

const center = {
  position: "relative",
  top: "50%",
  left: "37%",
};

const Login = () => {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  // const {setUser} = useContext(UserContext);
  const [dbUser, setDbUser] = useState();

  const [setData, setValues] = useState({
    email: "",
    password: "",
  });

  const changeHandle = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setValues({ ...setData, [name]: value });

  }


  const authenticateUser = (e) => {
    e.preventDefault();
    console.log(e);
    if (setData.email === "" || setData.password == "") {
      alert('Please enter valid data');
      return;
    }
    else {
      ApiService.getUserByUnamePassword(setData)
        .then(resp => {
          setDbUser(resp.data);
          console.log(resp)
          localStorage.setItem("userinfo", JSON.stringify(resp.data));
          if (resp.data.speciality) {

            navigate(`/doctor/${resp.data.did}`);
          } else {
            navigate("/patient");

          }

        }).catch(() => {
          setValues(null);

        })
      setValues({ email: "", password: "" });

    }
  }


  return (
    <div
      style={{
        backgroundImage: `url(${main})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}>
      <Box sx={boxstyle}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              style={{
                backgroundImage: `url(${login})`,
                backgroundSize: "cover",
                marginTop: "40px",
                marginLeft: "15px",
                marginRight: "15px",
                height: "63vh",
                backgroundColor: "#fff",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              style={{
                backgroundSize: "cover",
                height: "70vh",
                backgroundColor: "#3b33d5",
              }}
            >

              <ThemeProvider theme={darkTheme}>


                <Container>
                  <Box height={35} />
                  <Box sx={center}>
                    <Avatar sx={{ ml: "35px", mb: "4px", bgcolor: "#fff" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" textAlign="left">
                      Login
                    </Typography>
                  </Box>
                  <form>
                    <div class="mb-5 mt-5">
                      <label for="username" class="form-label font-weight-bold text-left">Username</label>
                      <input type="text" class="form-control" id="username" placeholder="Enter username" value={setData.username} name="username" onChange={changeHandle} />
                    </div>
                    <div class="mb-5">
                      <label for="password" class="form-label font-weight-bold text-left">Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Enter password" value={setData.password} name="password" onChange={changeHandle} />
                    </div>
                   
                    <button type="button" class="btn btn-primary bg-danger p-2 px-5" onClick={authenticateUser}>Login</button>
           </form>

                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <Stack direction="row" spacing={2}>
                      <FormControlLabel
                        sx={{ width: "90%" }}
                        onClick={() => setRemember(!remember)}
                        control={<Checkbox checked={remember} />}
                        label="Remember me" />
                    </Stack>
                  </Grid>
                 
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <Stack direction="row" spacing={2}>
                      <Typography
                        variant="body1"
                        component="span"
                        style={{ marginTop: "10px" }}
                      >
                        Register !{"   "}
                        <span
                          style={{ color: "#beb4fb", cursor: "pointer" }}
                          onClick={() => {
                            navigate("/register");
                          }}>
                          Create an Account With Us
                        </span>
                      </Typography>
                    </Stack>
                  </Grid>
                </Container>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Login
