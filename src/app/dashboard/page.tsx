"use client";

import { useState } from "react";
import { Feedback } from "@mui/icons-material";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Fab,
} from "@mui/material";
import { useRouter } from "next/navigation";

import ActivityFeed from "./components/ActivityFeed";
import FeedbackModal from "@/ui/FeedbackModal";

export default function Dashboard() {
  const router = useRouter();
  const [openFeedback, setOpenFeedback] = useState(false);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, Pastor James
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Ready to prepare your next sermon?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea onClick={() => router.push("/assistant")}>
              <CardContent>
                <Typography variant="h6">Start New Sermon</Typography>
                <Typography color="text.secondary">
                  Generate new outlines with AI
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea onClick={() => router.push("/upload")}>
              <CardContent>
                <Typography variant="h6">Upload Previous Sermon</Typography>
                <Typography color="text.secondary">
                  Save past messages for AI learning
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper className="p-6 rounded-xl border border-stone-200 bg-white">
          <ActivityFeed />
        </Paper>
      </Grid>

      <Fab
        color="primary"
        aria-label="feedback"
        onClick={() => setOpenFeedback(true)}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
        }}
      >
        <Feedback />
      </Fab>

      <FeedbackModal
        open={openFeedback}
        onClose={() => setOpenFeedback(false)}
      />
    </Box>
  );
}
