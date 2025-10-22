"use client";

import { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import jsPDF from "jspdf";

export default function Assistant() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.output);
    setLoading(false);
  }

  function downloadPDF() {
    const doc = new jsPDF();
    doc.text(response, 10, 10);
    doc.save("sermon-outline.pdf");
  }

  return (
    <Box maxWidth="800px" mx="auto">
      <Typography variant="h4" gutterBottom>
        AI Sermon Assistant
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Enter passage or topic"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        disabled={!prompt || loading}
        onClick={handleGenerate}
      >
        {loading ? "Generating..." : "Generate Outline"}
      </Button>

      {response && (
        <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Generated Outline
          </Typography>
          <Typography whiteSpace="pre-wrap">{response}</Typography>
          <Button onClick={downloadPDF} sx={{ mt: 2 }} variant="outlined">
            Download PDF
          </Button>
        </Paper>
      )}
    </Box>
  );
}
