"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  LinearProgress,
  Alert,
  TextField,
} from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewText, setPreviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Simulate reading text (mock for now)
  async function handleUpload() {
    if (!file) return;
    setLoading(true);
    setSuccess(false);

    // Simulate text extraction delay
    await new Promise((res) => setTimeout(res, 2000));

    // Fake text extraction (just show file name + demo)
    const simulatedExtract =
      `Sermon Title: ${file.name.replace(/\.[^/.]+$/, "")}\n\n` +
      "This sermon explores the importance of faith and obedience. Key passage: Hebrews 11:1-6.\n\n" +
      "Main Points:\n1. Faith is believing the unseen.\n2. Obedience follows trust.\n3. God rewards those who seek Him.";

    setPreviewText(simulatedExtract);
    setLoading(false);
    setSuccess(true);
  }

  return (
    <Box maxWidth="700px" mx="auto" mt={4}>
      <Typography variant="h4" gutterBottom>
        Upload Sermon
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Share your past sermons to prepare them for future AI-assisted
        generation. Files remain private and secure.
      </Typography>

      <Paper
        elevation={1}
        className="p-6 border border-stone-200 bg-stone-50 rounded-xl"
      >
        <Typography variant="subtitle1" className="font-medium mb-3">
          Upload Your File
        </Typography>

        <Button
          variant="contained"
          component="label"
          startIcon={<UploadIcon />}
          className="rounded-lg"
          disabled={loading}
        >
          {file ? "Change File" : "Choose File"}
          <input
            type="file"
            hidden
            accept=".pdf,.docx,.txt"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
        </Button>

        {file && (
          <Typography mt={2} color="text.secondary">
            Selected file: <strong>{file.name}</strong>
          </Typography>
        )}

        {loading && (
          <Box mt={3}>
            <LinearProgress />
            <Typography variant="body2" mt={1}>
              Preparing your sermon for AI insights...
            </Typography>
          </Box>
        )}

        {!loading && file && !success && (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleUpload}
            sx={{ mt: 3 }}
          >
            Upload & Analyze
          </Button>
        )}

        {success && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Sermon processed successfully! Here’s a preview of what the AI
            learned:
          </Alert>
        )}

        {previewText && (
          <TextField
            fullWidth
            multiline
            rows={8}
            value={previewText}
            sx={{ mt: 3, background: "white", borderRadius: "8px" }}
          />
        )}
      </Paper>

      {/* Info Section */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          📘 What Happens Next
        </Typography>
        <Typography color="text.secondary">
          In the full version, uploaded sermons will be:
          <ul className="list-disc ml-6 mt-2">
            <li>Converted into text and analyzed by AI.</li>
            <li>
              Embedded into your personal database so the AI can learn your
              preaching style.
            </li>
            <li>
              Used to make future outlines, illustrations, and applications
              sound like <em>you</em>.
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
}
