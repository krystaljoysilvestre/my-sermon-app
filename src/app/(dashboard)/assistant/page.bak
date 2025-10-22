"use client";

import { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Grid } from "@mui/material";
import jsPDF from "jspdf";

export default function Assistant() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const quickPrompts = [
    {
      label: "Create a sermon outline",
      value:
        "Create a detailed sermon outline for the following passage. Include title, key verse, main points, and application. Passage:",
    },
    {
      label: "Suggest an illustration",
      value:
        "Suggest a vivid illustration or story that relates to this passage or theme:",
    },
    {
      label: "Develop application points",
      value:
        "Develop 3–4 application points from this passage that challenge the audience to live it out:",
    },
    {
      label: "Write an introduction",
      value:
        "Write an engaging sermon introduction that captures attention and connects to the main theme of this passage:",
    },
  ];

  async function handleGenerate(customPrompt?: string) {
    const activePrompt = customPrompt || prompt;
    if (!activePrompt) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: activePrompt }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server error ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.output);
    } catch (err: any) {
      setResponse(`⚠️ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function downloadPDF() {
    const doc = new jsPDF();
    doc.text(response, 10, 10);
    doc.save("sermon-outline.pdf");
  }

  return (
    <Box maxWidth="900px" mx="auto">
      <Typography variant="h4" gutterBottom>
        AI Sermon Assistant
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Ask questions about your sermons and receive personalized content
        suggestions in your unique style.
      </Typography>

      {/* Quick Prompts */}
      <Box className="mb-6">
        <Typography variant="subtitle1" className="font-medium mb-2">
          Quick Prompts
        </Typography>
        <Grid container spacing={1}>
          {quickPrompts.map((p) => (
            <Grid item xs={12} sm={6} key={p.label}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => {
                  setPrompt(p.value);
                  handleGenerate(p.value); // auto-run on click
                }}
                disabled={loading}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  backgroundColor: "white",
                }}
              >
                {p.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Manual Prompt Input */}
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Or write your own prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        disabled={!prompt || loading}
        onClick={() => handleGenerate()}
      >
        {loading ? "Generating..." : "Generate Response"}
      </Button>

      {response && (
        <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            {response.startsWith("⚠️") ? "Error" : "Generated Response"}
          </Typography>
          <Typography whiteSpace="pre-wrap">{response}</Typography>
          <Button variant="outlined" onClick={downloadPDF} sx={{ mt: 2 }}>
            Download as PDF
          </Button>
        </Paper>
      )}
    </Box>
  );
}
