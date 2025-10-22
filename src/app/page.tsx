"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "@mui/icons-material";
import HeroBanner from "@/components/ui/HeroBanner";

export default function Home() {
  return (
    <div>
      <HeroBanner />

      {/* Key Features Section */}
      <Box id="features" sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            Key Features
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 4,
              mt: 4,
            }}
          >
            {[
              {
                title: "AI-Powered Research",
                description:
                  "Instantly access relevant scriptures, commentaries, and theological insights.",
              },
              {
                title: "Sermon Organization",
                description:
                  "Keep your sermons, notes, and research organized in one place.",
              },
              {
                title: "Smart Outlining",
                description:
                  "Generate sermon outlines with AI assistance while maintaining your authentic voice.",
              },
              {
                title: "Resource Library",
                description:
                  "Access a growing library of sermon illustrations, quotes, and references.",
              },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
                }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Preview Section */}
      <Box sx={{ py: 8, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
              <Typography variant="h3" component="h2" gutterBottom>
                See It In Action
              </Typography>
              <Typography paragraph>
                Experience how our AI assistant helps you craft meaningful
                sermons while saving hours of preparation time.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                href="/demo"
                endIcon={<ChevronRight />}
              >
                Watch Demo
              </Button>
            </Box>
            <Box sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
              <Paper elevation={3} sx={{ p: 2, bgcolor: "background.paper" }}>
                <Image
                  src="/demo-preview.png"
                  alt="Sermon Assistant Demo"
                  width={600}
                  height={400}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            What Pastors Are Saying
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 4,
              mt: 4,
            }}
          >
            {[
              {
                quote:
                  "This tool has revolutionized my sermon preparation process. I can focus more on prayer and delivery.",
                author: "Pastor Michael Thompson",
                church: "Grace Community Church",
              },
              {
                quote:
                  "The AI assistance is remarkable. It helps me find perfect illustrations and deeper insights.",
                author: "Rev. Sarah Martinez",
                church: "New Life Fellowship",
              },
              {
                quote:
                  "A game-changer for busy pastors. Saves time without compromising the quality of preparation.",
                author: "Dr. James Wilson",
                church: "Faith Baptist Church",
              },
            ].map((testimonial, index) => (
              <Box
                key={index}
                sx={{ gridColumn: { xs: "span 12", md: "span 4" } }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography paragraph sx={{ fontStyle: "italic" }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {testimonial.church}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Pricing Preview */}
      <Box sx={{ py: 8, bgcolor: "primary.light" }}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            color="primary.contrastText"
            gutterBottom
          >
            Start Your Journey Today
          </Typography>
          <Typography textAlign="center" color="primary.contrastText" paragraph>
            Choose a plan that works for you. All plans include a 14-day free
            trial.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/pricing"
              sx={{ bgcolor: "background.paper", color: "primary.main" }}
            >
              View Pricing Plans
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 6, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 4,
            }}
          >
            <Box sx={{ gridColumn: { xs: "span 12", sm: "span 4" } }}>
              <Typography variant="h6" gutterBottom>
                My Sermon Assistant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Empowering pastors with AI-assisted sermon preparation tools.
              </Typography>
            </Box>
            <Box sx={{ gridColumn: { xs: "span 12", sm: "span 4" } }}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box component="nav">
                {["Features", "Pricing", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    style={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Box>
            <Box sx={{ gridColumn: { xs: "span 12", sm: "span 4" } }}>
              <Typography variant="h6" gutterBottom>
                Connect With Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: support@mysermonassistant.com
                <br />
                Phone: (555) 123-4567
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: "divider" }}
          >
            © {new Date().getFullYear()} My Sermon Assistant. All rights
            reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
