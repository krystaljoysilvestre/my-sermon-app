"use client";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is My Sermon Assistant?",
      a: "My Sermon Assistant is an AI-powered tool designed to help pastors and ministry leaders prepare sermons faster and more efficiently. It can generate outlines, suggest themes, and organize past messages in one place.",
    },
    {
      q: "Can I upload my previous sermons?",
      a: "Yes! You can upload Word or PDF sermon files so the system can analyze your writing style and themes. This helps the AI assistant generate new content aligned with your tone and theology.",
    },
    {
      q: "Is my data private and secure?",
      a: "Absolutely. Uploaded sermons and generated content remain private to your account. In the future, data will be stored securely in a protected database with role-based access control.",
    },
    {
      q: "Does it cost anything to use?",
      a: "You can start for free. Paid plans will unlock advanced features like unlimited AI generations, sermon upload analysis, and multi-user ministry access.",
    },
    {
      q: "How accurate are the AI-generated sermons?",
      a: "The AI provides biblically sound outlines and ideas, but the final sermon should always be reviewed and refined by you. Think of it as a creative partner — not a replacement.",
    },
    {
      q: "Can I share sermons with my team?",
      a: "The upcoming Ministry Plan will include team collaboration, shared libraries, and comment features for staff or co-pastors.",
    },
  ];

  return (
    <Box maxWidth="800px" mx="auto" mt={4}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Here are some common questions about My Sermon Assistant and how it can
        help you.
      </Typography>

      {faqs.map((item, index) => (
        <Accordion key={index} sx={{ mb: 1.5, borderRadius: "10px" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight={600}>
              {item.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {item.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Divider sx={{ my: 4 }} />
      <Typography align="center" color="text.secondary">
        Still have questions? Contact us at{" "}
        <span className="text-blue-600 font-medium">
          support@mysermonassistant.app
        </span>
      </Typography>
    </Box>
  );
}
