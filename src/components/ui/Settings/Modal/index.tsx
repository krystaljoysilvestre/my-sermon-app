"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Switch,
  Typography,
  MenuItem,
  Select,
  Box,
  Divider,
} from "@mui/material";
import { useState } from "react";

export default function SettingsModal({ open, onClose }: any) {
  const [notifications, setNotifications] = useState(true);
  const [aiStyle, setAiStyle] = useState("biblical");
  const [region, setRegion] = useState("Global");

  function handleSave() {
    // Mock save behavior
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Account Settings</DialogTitle>
      <DialogContent>
        <Typography color="text.secondary" mb={2}>
          Customize how My Sermon Assistant interacts with you.
        </Typography>

        {/* Notifications */}
        <Box mb={3}>
          <Typography variant="subtitle1" gutterBottom>
            Notifications
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
            }
            label="Enable weekly sermon preparation reminders"
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* AI Behavior */}
        <Box mb={3}>
          <Typography variant="subtitle1" gutterBottom>
            AI Personalization
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Adjust how the AI assistant structures sermon content.
          </Typography>
          <Select
            fullWidth
            value={aiStyle}
            onChange={(e) => setAiStyle(e.target.value)}
          >
            <MenuItem value="biblical">Biblical (Verse-focused)</MenuItem>
            <MenuItem value="practical">
              Practical (Application-focused)
            </MenuItem>
            <MenuItem value="storytelling">
              Storytelling (Illustration-rich)
            </MenuItem>
          </Select>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Region */}
        <Box mb={3}>
          <Typography variant="subtitle1" gutterBottom>
            Region / Language Preference
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Choose your preferred region for biblical references and
            translations.
          </Typography>
          <Select
            fullWidth
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <MenuItem value="Global">Global (English)</MenuItem>
            <MenuItem value="Philippines">Philippines</MenuItem>
            <MenuItem value="USA">United States</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
          </Select>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Settings
        </Button>
      </DialogActions>
    </Dialog>
  );
}
