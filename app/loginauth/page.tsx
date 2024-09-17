"use client"


import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Link,
  TextField,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { Google as GoogleIcon, Apple as AppleIcon, Facebook as FacebookIcon } from '@mui/icons-material'

export default function SignupPage() {
  const [userType, setUserType] = useState<string | null>(null)

  const handleUserTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newUserType: string | null,
  ) => {
    setUserType(newUserType)
  }

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ mb: 1 }}
              >
                Sign up with Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FacebookIcon />}
                sx={{ mb: 1 }}
              >
                Sign up with Facebook
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<AppleIcon />}
                sx={{ mb: 1 }}
              >
                Sign up with Apple
              </Button>
              <Button fullWidth variant="outlined" sx={{ mb: 2 }}>
                Sign up with another provider
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }}>OR</Divider>

          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Register as:
                </Typography>
                <ToggleButtonGroup
                  value={userType}
                  exclusive
                  onChange={handleUserTypeChange}
                  aria-label="user type"
                  fullWidth
                >
                  <ToggleButton value="affiliate" aria-label="affiliate">
                    Affiliate
                  </ToggleButton>
                  <ToggleButton value="vendor" aria-label="vendor seller">
                    Vendor Seller
                  </ToggleButton>
                  <ToggleButton value="seller" aria-label="seller">
                    Seller
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <br></br>
            <Typography variant="body2" color="text.primary">
              Already have an account? <Link href="../components/login-auth">Login</Link>
            </Typography>
          </form>
        </Box>
      </Paper>
    </Container>
  )
}
