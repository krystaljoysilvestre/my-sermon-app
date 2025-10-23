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
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300 font-medium rounded-2xl hover:scale-105"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!rating}
            className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl transition-all duration-300 font-semibold hover:scale-105 ${
              !rating
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
            }`}
          >
            Submit
          </button>
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
