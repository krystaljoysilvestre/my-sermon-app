"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import {
  UploadFile,
  AutoAwesome,
  NoteAlt,
  Download,
  Delete,
} from "@mui/icons-material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface Activity {
  id: number;
  type: "upload" | "generate" | "note" | "download" | "delete";
  message: string;
  date: string;
}

export default function ActivityFeed() {
  const activities: Activity[] = [
    {
      id: 1,
      type: "generate",
      message: "Generated a new sermon on Matthew 8:23–27 (Faith Over Fear).",
      date: dayjs().subtract(3, "hour").toISOString(),
    },
    {
      id: 2,
      type: "upload",
      message: "Uploaded sermon file: 'Forgiveness and Grace.docx'.",
      date: dayjs().subtract(6, "hour").toISOString(),
    },
    {
      id: 3,
      type: "note",
      message: "Added notes to 'Walking in the Spirit'.",
      date: dayjs().subtract(2, "day").toISOString(),
    },
    {
      id: 4,
      type: "download",
      message: "Downloaded sermon outline 'Faith Over Fear.pdf'.",
      date: dayjs().subtract(3, "day").toISOString(),
    },
    {
      id: 5,
      type: "delete",
      message: "Deleted sermon draft 'Hope in the Desert'.",
      date: dayjs().subtract(5, "day").toISOString(),
    },
  ];

  const iconForType = (type: Activity["type"]) => {
    switch (type) {
      case "upload":
        return <UploadFile sx={{ color: "info.main" }} />;
      case "generate":
        return <AutoAwesome sx={{ color: "success.main" }} />;
      case "note":
        return <NoteAlt sx={{ color: "warning.main" }} />;
      case "download":
        return <Download sx={{ color: "secondary.main" }} />;
      case "delete":
        return <Delete sx={{ color: "error.main" }} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {activities.map((activity, index) => (
          <Box key={activity.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "background.default" }}>
                  {iconForType(activity.type)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={activity.message}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {dayjs(activity.date).fromNow()}
                  </Typography>
                }
              />
            </ListItem>
            {index !== activities.length - 1 && <Divider component="li" />}
          </Box>
        ))}
      </List>

      <Box textAlign="center" mt={2}>
        <Chip
          label="End of Activity Feed"
          variant="outlined"
          size="small"
          color="default"
        />
      </Box>
    </Box>
  );
}
