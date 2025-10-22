"use client";

import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
  Chip,
  Alert,
} from "@mui/material";
import { useState } from "react";

export default function SubscriptionPage() {
  const [currentPlan, setCurrentPlan] = useState("Pro");

  const plans = [
    {
      name: "Free",
      price: "$0",
      desc: "Get started with AI-generated sermon outlines.",
      features: [
        "3 sermon generations per month",
        "Basic outline suggestions",
        "No uploads",
      ],
    },
    {
      name: "Pro",
      price: "$9 / mo",
      desc: "Unlock unlimited AI sermon generation and uploads.",
      features: [
        "Unlimited sermon generations",
        "Sermon upload & analysis",
        "Personalized AI tone",
      ],
      recommended: true,
    },
    {
      name: "Ministry",
      price: "$29 / mo",
      desc: "For teams and ministries that collaborate on sermons.",
      features: [
        "All Pro features",
        "Multi-user access",
        "Shared sermon library",
        "Usage analytics",
      ],
    },
  ];

  return (
    <Box maxWidth="900px" mx="auto" mt={4}>
      <Typography variant="h4" gutterBottom>
        Subscription Plans
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Manage your plan and explore the available features for My Sermon
        Assistant.
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        You are currently subscribed to the <strong>{currentPlan}</strong> plan.
      </Alert>

      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} sm={4} key={plan.name}>
            <Paper
              elevation={plan.recommended ? 4 : 1}
              className={`p-6 h-full rounded-2xl border ${
                plan.recommended
                  ? "border-amber-500 shadow-lg"
                  : "border-stone-200"
              }`}
            >
              {plan.recommended && (
                <Chip
                  label="Recommended"
                  color="warning"
                  size="small"
                  sx={{ mb: 2 }}
                />
              )}

              <Typography variant="h6">{plan.name}</Typography>
              <Typography
                variant="h5"
                className="text-amber-700 font-semibold"
                sx={{ my: 1 }}
              >
                {plan.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {plan.desc}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <ul className="list-disc ml-5 mb-4 text-sm text-gray-700">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <Button
                variant={currentPlan === plan.name ? "outlined" : "contained"}
                color="primary"
                fullWidth
                onClick={() => setCurrentPlan(plan.name)}
                disabled={currentPlan === plan.name}
              >
                {currentPlan === plan.name ? "Current Plan" : "Choose Plan"}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Billing Summary Section */}
      <Paper
        elevation={0}
        className="mt-8 p-6 bg-white border border-stone-200 rounded-xl"
      >
        <Typography variant="h6" gutterBottom>
          Billing Information
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          <strong>Next Billing Date:</strong> November 15, 2025
        </Typography>
        <Typography>
          <strong>Payment Method:</strong> **** **** **** 4242 (Visa)
        </Typography>
        <Typography>
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-medium">Active</span>
        </Typography>
        <Button variant="outlined" sx={{ mt: 2 }}>
          Update Payment Method
        </Button>
      </Paper>

      {/* Cancellation / Support */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Need Help?
        </Typography>
        <Typography color="text.secondary" mb={2}>
          You can cancel your subscription or contact support anytime.
        </Typography>
        <Button color="error" variant="outlined" sx={{ mr: 2 }}>
          Cancel Subscription
        </Button>
        <Button variant="outlined">Contact Support</Button>
      </Box>
    </Box>
  );
}
