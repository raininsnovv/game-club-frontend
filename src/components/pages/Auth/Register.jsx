import React from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchRegister } from "../components/app/slices/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  const { isLoading, registerStatus } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (value) => {
    await dispatch(fetchRegister(value));
  };

  const token = window.localStorage.getItem("token");
  if (token) {
    return <Navigate to={"/"} />;
  }

  const paperStyle = {
    padding: 2,
    minHeight: 400,
    width: "25%",
    minWidth: 300,
    mt: 5,
    mb: 5,
  };

  if (registerStatus === "success") {
    return (
      <Grid align="center">
        <Paper elevation={10} sx={{ ...paperStyle, minHeight: 150, color: "green" }}>
          <Grid align="center">
            <h2>Вы зарегистрировались!</h2>
          </Grid>
          <Button sx={{ mt: 2 }} href="/login" color="primary" variant="contained" fullWidth>
            Перейти на страницу входа
          </Button>
        </Paper>
      </Grid>
    );
  }

  return (
    <Grid align="center">
      <Paper elevation={10} sx={paperStyle}>
        <Grid align="center">
          <Avatar>
            <FaceIcon />
          </Avatar>
          <h2>Create a new account</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("login", {
              required: "Укажите логин",
              minLength: { value: 5, message: "Минимум 5 символов" },
            })}
            variant="standard"
            label="Login"
            placeholder="Enter login"
            fullWidth
            error={!!errors.login}
            helperText={errors?.login ? errors?.login?.message : null}
          ></TextField>
          <TextField
            fullWidth
            variant="standard"
            label="Password"
            placeholder="Enter password"
            type="password"
            {...register("password", {
              required: "Укажите пароль",
              minLength: { value: 5, message: "Минимум 5 символов" },
            })}
            error={!!errors.password}
            helperText={errors?.password ? errors?.password?.message : null}
          ></TextField>
          <TextField
            variant="standard"
            type="email"
            label="Email"
            placeholder="Enter email"
            fullWidth
            {...register("email", {
              required: "Укажите email",
            })}
            error={!!errors.email}
            helperText={errors?.email ? errors?.email?.message : null}
          ></TextField>
          <TextField
            variant="standard"
            label="Full name"
            placeholder="Enter full name"
            fullWidth
            {...register("fullname", {
              required: "Укажите полное имя",
              minLength: { value: 5, message: "Минимум 5 символов" },
            })}
            error={!!errors.fullname}
            helperText={errors?.fullname ? errors?.fullname?.message : null}
          ></TextField>

          <Button
            disabled={isLoading}
            sx={{ mt: 2 }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </form>
        <Typography sx={{ mt: 2 }}>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;