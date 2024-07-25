import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { Link,useNavigate } from "react-router-dom";
  import {Form, useForm} from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import {toast } from "react-toastify";


  type FormValues = {
    fname: string,
    lname: string,
    email: string,
    password: string,
    confirmPassword: string
}

  
  const SignUp = () => {
   
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const form = useForm<FormValues>({defaultValues:{fname:"",lname:"",email:"",password:"",confirmPassword:""}})
    const {register,watch,handleSubmit,formState} = form;
    const [error,setError] = useState("");
    const {errors} = formState;
    const navigate = useNavigate();
    const onSubmit = async (data: FormValues) => {
      setError("")
      console.log("Data:",data)
      const response = await fetch('http://localhost:8000/api/v1/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
        const result = await response.json();
        console.log("Result:",result);
        console.log("On Submit called")
        if (!response.ok) {
          setError(result.error);
      }
        console.log(data)
        toast.success("SignUp Successful!", {
          position: "top-center",
        });
        
        navigate('/login')
    }  
    return (
      <>
        <Header/>
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              mt: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Sign Up</Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
             
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="fname"
                    label="First Name *"
                    autoFocus
                    error= {!!errors.fname}
                    helperText={errors.fname?.message}
                    {...register("fname",{
                        required: {
                            value: true,
                            message: "First Name is required"
                        },pattern: {
                          value: /^[a-zA-Z]{1,}$/,
                          message:"Accepting only letters"
      
                      }

                    })}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="lname"
                    label="Last Name"
                    autoFocus
                    error= {!!errors.lname}
                    helperText={errors.lname?.message}
                    {...register("lname")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address *"
                    error= {!!errors.email}
                    helperText={errors.email?.message}
                    {...register("email",{required: {
                        value: true,
                        message: "Email is required"
                    },pattern: {
                        value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
                        message:"Invalid email format"
    
                    }})}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password *"
                    type="password"
                    id="password"
                    error= {!!errors.password}
                    helperText={errors.password?.message}
                    {...register("password",{
                        required: {
                            value: true,
                            message: "Password is required" },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                                message:"Password length must be between 8 and 15.Password must contain atleast 1 digit, 1 lowercase and 1 uppercase character."
                            }})}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password *"
                    type="password"
                    id="confirmpassword"
                    error= {!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    {...register("confirmPassword",{

                        required: {
                            value: true,
                            message: "Password is required" },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                                message:"Password length must be between 8 and 15.Password must contain atleast 1 digit, 1 lowercase and 1 uppercase character."
                            },
                        validate: (value) => value === watch('password') || "Your passwords do not match"
                        })}
                  />
                </Grid>
              </Grid>
              {error && <Typography variant="body2" color={"red"}>{error}</Typography>} 
              <Button type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">Already have an account? Login</Link>
                </Grid>
              </Grid>
            </Box>
            </form>
          </Box>
        </Container>
        <Footer/>
      </>
    );
  };
  
  export default SignUp;