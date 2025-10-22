"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Library", href: "/library" },
    { name: "Subscription", href: "/subscription" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: "1px solid #eee",
        backdropFilter: "blur(12px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          fontWeight={700}
          component={Link}
          href="/"
          className="no-underline text-stone-900"
        >
          My Sermon Assistant
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {links.map((link) => (
            <Button
              key={link.name}
              component={Link}
              href={link.href}
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.name}
            </Button>
          ))}
        </Box>

        {/* Right Side Actions */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            component={Link}
            href="/login"
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            component={Link}
            href="/dashboard"
          >
            Get Started
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: { width: "70%", p: 2, bgcolor: "background.paper" },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ mt: 2 }}>
            {links.map((link) => (
              <ListItem
                button
                key={link.name}
                component={Link}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>

          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 1 }}
              component={Link}
              href="/dashboard"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              component={Link}
              href="/login"
            >
              Login
            </Button>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
