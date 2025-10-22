"use client";

import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import Link from "next/link";

export default function LandingPage() {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          background: "linear-gradient(180deg, #fdf7f2, #fff)",
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Write Powerful Sermons. Faster.
        </Typography>
        <Typography color="text.secondary" mb={4}>
          My Sermon Assistant helps pastors prepare, organize, and preach with
          clarity — powered by AI.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          href="/dashboard"
          sx={{ mr: 2 }}
        >
          Get Started Free
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          component={Link}
          href="/subscription"
        >
          View Plans
        </Button>
      </Box>

      {/* FEATURES */}
      <Box maxWidth="1000px" mx="auto" my={8}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Pastors Love It
        </Typography>
        <Grid container spacing={3} mt={2}>
          {[
            {
              title: "AI Sermon Generator",
              desc: "Create full sermon outlines from your chosen verse or topic in seconds.",
            },
            {
              title: "Sermon Library",
              desc: "Store and revisit past messages anytime with quick access and search.",
            },
            {
              title: "Personal Notes",
              desc: "Add reflections or reminders directly under each sermon outline.",
            },
            {
              title: "Weekly Inspiration",
              desc: "Get suggested verses and themes for upcoming sermons.",
            },
          ].map((f, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Paper className="p-6 rounded-2xl border border-stone-200 text-center hover:shadow-md transition">
                <Typography variant="h6">{f.title}</Typography>
                <Typography color="text.secondary" mt={1}>
                  {f.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA */}
      <Box textAlign="center" py={8} bgcolor="#fefaf5">
        <Typography variant="h5" gutterBottom>
          Start preparing your next sermon with confidence.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          href="/dashboard"
        >
          Launch App
        </Button>
      </Box>

      {/* FOOTER */}
      <Box textAlign="center" py={4} color="text.secondary" fontSize="0.9rem">
        © {new Date().getFullYear()} My Sermon Assistant ·{" "}
        <Link href="/faq" className="text-blue-600">
          FAQ
        </Link>{" "}
        ·{" "}
        <Link href="/subscription" className="text-blue-600">
          Plans
        </Link>
      </Box>
    </Box>
  );
}
