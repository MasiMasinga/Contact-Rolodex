import React from 'react'

// Mui
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import InputField from '@/common/components/InputField'
import Button from '@/common/components/Button'
import Typography from '@/common/components/Typography'
import LogoContainer from '../components/LogoContainer'
import ImageContainer from '../components/ImageContainer'

// Utils
import { Colors, ValidationMessages } from '@/common/utils/constants'
import { isValidEmail } from '@/common/utils/validations';

const Register = () => {
    const { control, watch, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <LogoContainer src="/rolodex.svg" alt="logo" />
                <Typography mb align="center" color={Colors.accent} sx={{ fontWeight: 600 }}>
                    Welcome
                </Typography>
                <Typography mb align="center" color={Colors.accent}>
                    Please enter your details
                </Typography>
                <Stack
                    component="form"
                    noValidate
                    spacing={2}
                    sx={{
                        px: { xs: 6, sm: 10, md: 8, lg: 15 }
                    }}
                >
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField
                                label="Name"
                                error={error}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                            validate: value => isValidEmail(value) || ValidationMessages.isValidEmail
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField
                                label="Email"
                                error={error}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                            validate: (value) => value.length >= 6 || ValidationMessages.passwordTooShort
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField
                                label="Password"
                                error={error}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                            validate: (value) => value === watch('password') || ValidationMessages.passwordNotMatch
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField
                                label="Confirm Password"
                                error={error}
                                {...field}
                            />
                        )}
                    />
                    <Button type="submit" onClick={onSubmit}>
                        Register
                    </Button>
                </Stack>
                <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ mt: 2 }}>
                    <Link underline='none'>
                        <Typography variant="h6" sx={{ color: Colors.black, fontWeight: 400 }}>
                            Already have an account?
                        </Typography>
                    </Link>
                    <Link underline='none' href="/auth/login">
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            Login
                        </Typography>
                    </Link>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
                <Stack sx={{ bgcolor: Colors.primary, width: "50vw", height: "100vh" }}>
                    <ImageContainer src="/back-auth.png" alt="back-auth" />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Register