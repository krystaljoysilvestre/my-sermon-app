"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Rating,
  TextField,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";

export default function FeedbackModal({ open, onClose }: any) {
  const [rating, setRating] = useState<number | null>(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Mock submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setRating(0);
      setFeedback("");
    }, 1500);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>We’d love your feedback 💬</DialogTitle>
        <DialogContent>
          <Typography color="text.secondary" mb={2}>
            How helpful was your experience with My Sermon Assistant today?
          </Typography>

          <Box display="flex" justifyContent="center" mb={3}>
            <Rating
              value={rating}
              onChange={(_, newValue) => setRating(newValue)}
              size="large"
            />
          </Box>

          <TextField
            label="Your Feedback"
            placeholder="Share your thoughts, suggestions, or issues..."
            fullWidth
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!rating}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={submitted}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </>
  );
}
