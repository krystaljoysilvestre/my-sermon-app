"use client";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState } from "react";
import {
  Delete,
  Visibility,
  Download,
  Search as SearchIcon,
  ViewList,
  GridView,
  EditNote,
} from "@mui/icons-material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

export default function SermonLibrary() {
  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [view, setView] = useState("grid");
  const [notes, setNotes] = useState<Record<number, string>>({});

  const mockSermons = [
    {
      id: 1,
      title: "Faith Over Fear",
      passage: "Matthew 8:23–27",
      date: "2025-10-18",
      type: "Generated",
      tags: ["Faith", "Courage"],
      summary:
        "Trusting God in uncertainty, focusing on Jesus calming the storm.",
    },
    {
      id: 2,
      title: "The Power of Forgiveness",
      passage: "Matthew 18:21–35",
      date: "2025-10-15",
      type: "Uploaded",
      tags: ["Forgiveness", "Grace"],
      summary:
        "Forgiving others as Christ forgave us — mercy, humility, and grace.",
    },
    {
      id: 3,
      title: "Walking in the Spirit",
      passage: "Galatians 5:16–25",
      date: "2025-10-10",
      type: "Generated",
      tags: ["Obedience", "Holy Spirit"],
      summary:
        "Living by the Spirit and producing fruit through daily dependence.",
    },
  ];

  // Filter + search + sort
  const filtered = mockSermons
    .filter((s) => filter === "All" || s.type === filter)
    .filter(
      (s) =>
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.passage.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "Newest") return b.date.localeCompare(a.date);
      if (sort === "Oldest") return a.date.localeCompare(b.date);
      if (sort === "Title A–Z") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <Box maxWidth="1000px" mx="auto" mt={4}>
      <Typography variant="h4" gutterBottom>
        Sermon Library
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Review, search, and manage your previously uploaded or generated
        sermons.
      </Typography>

      {/* Toolbar */}
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        mb={3}
      >
        {/* Filter Chips */}
        <Box>
          {["All", "Generated", "Uploaded"].map((f) => (
            <Chip
              key={f}
              label={f}
              color={filter === f ? "primary" : "default"}
              onClick={() => setFilter(f)}
              sx={{ mr: 1 }}
            />
          ))}
        </Box>

        {/* Search + Sort + View Toggle */}
        <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
          <TextField
            size="small"
            placeholder="Search by title or passage..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            select
            size="small"
            label="Sort by"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="Newest">Newest</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
            <MenuItem value="Title A–Z">Title A–Z</MenuItem>
          </TextField>

          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(_, val) => val && setView(val)}
            size="small"
          >
            <ToggleButton value="grid">
              <GridView fontSize="small" />
            </ToggleButton>
            <ToggleButton value="list">
              <ViewList fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* Grid View */}
      {view === "grid" && (
        <Grid container spacing={3}>
          {filtered.map((s) => (
            <Grid item xs={12} sm={6} key={s.id}>
              <Paper
                elevation={1}
                className="p-5 rounded-2xl border border-stone-200 bg-stone-50 hover:shadow-md transition"
              >
                <Typography variant="h6">{s.title}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {s.passage} — {dayjs(s.date).fromNow()}
                </Typography>

                <Box my={1}>
                  {s.tags.map((tag) => (
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

                <Typography variant="body2" mb={2}>
                  {s.summary}
                </Typography>

                {/* Notes field */}
                <TextField
                  multiline
                  size="small"
                  placeholder="Add your notes..."
                  fullWidth
                  value={notes[s.id] || ""}
                  onChange={(e) =>
                    setNotes({ ...notes, [s.id]: e.target.value })
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EditNote fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2, backgroundColor: "white" }}
                />

                <Divider sx={{ mb: 2 }} />

                <Box display="flex" justifyContent="space-between">
                  <Chip
                    size="small"
                    label={s.type}
                    color={s.type === "Generated" ? "success" : "info"}
                  />
                  <Box>
                    <Button
                      size="small"
                      startIcon={<Visibility />}
                      component={Link}
                      href={`/library/${s.id}`}
                    >
                      View Full Outline
                    </Button>
                    <Button
                      size="small"
                      startIcon={<Download />}
                      sx={{ ml: 1 }}
                    >
                      Download
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      startIcon={<Delete />}
                      sx={{ ml: 1 }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {filtered.length === 0 && (
        <Typography color="text.secondary" mx="auto" mt={10}>
          No sermons found.
        </Typography>
      )}

      {/* Sermon Detail Modal (optional fallback for list mode) */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
      >
        {selected && (
          <>
            <DialogTitle>{selected.title}</DialogTitle>
            <DialogContent dividers>
              <Typography color="text.secondary" mb={1}>
                {selected.passage} — {dayjs(selected.date).fromNow()}
              </Typography>
              <Typography variant="body1" whiteSpace="pre-wrap">
                {selected.summary}
                {"\n\n"}Main Points:
                {"\n"}1. {selected.title} reflects faith in action.
                {"\n"}2. Trusting God reveals His power.
                {"\n"}3. Faith grows through challenges.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelected(null)}>Close</Button>
              <Button variant="contained" startIcon={<Download />}>
                Download PDF
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
