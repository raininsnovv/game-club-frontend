import React from 'react'
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../components/app/slices/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const onSubmit = async (value) => {
    const data = await dispatch(fetchAuth(value))
    if (!data.payload) {
      return
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
      window.localStorage.setItem('userId', data.payload._id)
    }
  }

  const token = window.localStorage.getItem('token')

  if (token) {
    return <Navigate to={'/'} />
  }

  const paperStyle = {
    padding: 2,
    minHeight: 400,
    width: '25%',
    minWidth: 300,
    mt: 5,
    mb: 5,
  }

  return (
    <Grid align="center">
      <Paper elevation={10} sx={paperStyle}>
        {/* иконка для формы */}
        <Grid align="center">
          <Avatar>
            <FaceIcon />
          </Avatar>
          <h2>Вход</h2>
        </Grid>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Инпуты */}
          <TextField
            {...register('login', {
              required: 'Укажите логин',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })}
            variant="standard"
            label="Login*"
            placeholder="Enter login"
            fullWidth
            error={!!errors.login}
            helperText={errors?.login ? errors?.login?.message : null}
          ></TextField>
          <TextField
            {...register('password', {
              required: 'Укажите пароль',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })}
            fullWidth
            variant="standard"
            label="Password*"
            placeholder="Enter password"
            type="password"
            error={!!errors.password}
            helperText={errors?.password ? errors?.password?.message : null}
          ></TextField>
          <Button
            sx={{ mt: 2 }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            disabled={isLoading}
          >
            Войти
          </Button>
        </form>

        <Typography mt={2}>
          Еще не зарегистрированы? <Link to={'/register'}>Регистрация</Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login
