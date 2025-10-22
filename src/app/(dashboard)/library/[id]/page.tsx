"use client";

import { Box, Typography, Divider, Button, Chip } from "@mui/material";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { use } from "react";

dayjs.extend(relativeTime);

interface Sermon {
  title: string;
  passage: string;
  date: string;
  tags: string[];
  outline: string;
}

interface Params {
  id: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default function SermonDetail({ params }: PageProps) {
  const { id } = use(params);

  // Mock data lookup
  const mockSermons: Record<string, Sermon> = {
    "1": {
      title: "Faith Over Fear",
      passage: "Matthew 8:23–27",
      date: "2025-10-18",
      tags: ["Faith", "Courage"],
      outline: `
Introduction:
- Life's storms often test our faith.
- Even believers struggle with fear.

Main Points:
1. Jesus' Presence in the Storm (v.23–25)
   - He was asleep, but never absent.
   - Our fear often blinds us to His authority.

2. The Question of Faith (v.26)
   - "Why are you afraid?" is an invitation to trust.
   - Fear fades when faith takes root.

3. The Power of His Word (v.27)
   - Even the winds obey Him.

Conclusion:
- Faith over fear is not ignoring danger, but trusting the Deliverer.`,
    },
  };

  const sermon = mockSermons[id] || mockSermons["1"];

  return (
    <Box maxWidth="800px" mx="auto" mt={4}>
      <Button
        component={Link}
        href="/library"
        startIcon={<ArrowBack />}
        sx={{ mb: 3 }}
      >
        Back to Library
      </Button>

      <Typography variant="h4">{sermon.title}</Typography>
      <Typography color="text.secondary" mb={1}>
        {sermon.passage} — {dayjs(sermon.date).fromNow()}
      </Typography>

      <Box mb={2}>
        {sermon.tags.map((tag: string) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            color="secondary"
            variant="outlined"
            sx={{ mr: 0.5 }}
          />
        ))}
      </Box>

      <Divider sx={{ mb: 2 }} />
      <Typography
        component="pre"
        sx={{
          whiteSpace: "pre-wrap",
          lineHeight: 1.7,
          fontFamily: "inherit",
          color: "text.primary",
        }}
      >
        {sermon.outline}
      </Typography>

      <Divider sx={{ mt: 4, mb: 2 }} />
      <Button variant="contained" color="primary">
        Download as PDF
      </Button>
    </Box>
  );
}
