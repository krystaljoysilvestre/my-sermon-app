"use client";

import { Settings as SettingsIcon } from "@mui/icons-material";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Avatar,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

import SettingsModal from "./components/Settings/Modal";

export default function ProfilePage() {
  const [openSettings, setOpenSettings] = useState(false);
  const [name, setName] = useState("Pastor James");
  const [email, setEmail] = useState("pastor.james@example.com");
  const [theme, setTheme] = useState(false);

  return (
    <Box maxWidth="800px" mx="auto" mt={4}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Manage your account details and personalize your experience.
      </Typography>

      {/* Profile Card */}
      <Paper
        elevation={1}
        className="p-6 border border-stone-200 bg-stone-50 rounded-xl"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Avatar
              sx={{
                width: 120,
                height: 120,
                bgcolor: "#b45309",
                fontSize: "2rem",
              }}
            >
              {name.charAt(0)}
            </Avatar>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="h6" mb={2}>
              Account Details
            </Typography>
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{ mb: 2, background: "white", borderRadius: "6px" }}
            />
            <TextField
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ mb: 2, background: "white", borderRadius: "6px" }}
            />
            <Button variant="contained" color="primary" disabled>
              Save Changes (Coming Soon)
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Subscription Section */}
      <Paper
        elevation={0}
        className="mt-6 p-6 border border-stone-200 rounded-xl bg-white"
      >
        <Typography variant="h6" gutterBottom>
          Subscription
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          <strong>Plan:</strong> Pro (Monthly)
        </Typography>
        <Typography>
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-medium">Active</span>
        </Typography>
        <Typography>
          <strong>Renews On:</strong> November 15, 2025
        </Typography>

        <Button variant="outlined" sx={{ mt: 2 }}>
          Manage Subscription
        </Button>
      </Paper>

      {/* Connected Features */}
      <Paper
        elevation={0}
        className="mt-6 p-6 border border-stone-200 rounded-xl bg-white"
      >
        <Typography variant="h6" gutterBottom>
          Connected Features
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <ul className="list-disc ml-5 text-gray-700">
          <li>
            <strong>Sermon Library:</strong> Active
          </li>
          <li>
            <strong>AI Assistant:</strong> Enabled
          </li>
          <li>
            <strong>Export Tools:</strong> Available
          </li>
        </ul>
      </Paper>

      {/* Preferences */}
      <Paper
        elevation={0}
        className="mt-6 p-6 border border-stone-200 rounded-xl bg-white"
      >
        <Typography variant="h6" gutterBottom>
          Preferences
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <FormControlLabel
          control={
            <Switch
              checked={theme}
              onChange={(e) => setTheme(e.target.checked)}
            />
          }
          label="Enable Dark Theme (Mock)"
        />
        <Typography variant="body2" color="text.secondary">
          (This setting will be saved in your account in the full version.)
        </Typography>
      </Paper>

      {/* Password Section (Mock) */}
      <Paper
        elevation={0}
        className="mt-6 p-6 border border-stone-200 rounded-xl bg-white"
      >
        <Typography variant="h6" gutterBottom>
          Password
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography color="text.secondary" mb={2}>
          Password management will be available in the full app.
        </Typography>
        <Button variant="outlined" color="secondary" disabled>
          Change Password (Coming Soon)
        </Button>
      </Paper>

      <Button
        startIcon={<SettingsIcon />}
        variant="outlined"
        sx={{ ml: 2 }}
        onClick={() => setOpenSettings(true)}
      >
        Open Settings
      </Button>

      <SettingsModal
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      />
    </Box>
  );
}
