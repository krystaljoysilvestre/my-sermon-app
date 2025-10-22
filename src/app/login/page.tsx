"use client";

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => router.push("/dashboard");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Card sx={{ p: 3, width: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Welcome to My Sermon Assistant
          </Typography>
          <Typography align="center" color="text.secondary" mb={3}>
            Your partner in sermon preparation
          </Typography>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Continue
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
