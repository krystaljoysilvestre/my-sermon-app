"use client";

import { PlayCircleOutline, South, AppShortcut } from "@mui/icons-material";
import { Typography, Button } from "@mui/material";

export default function HeroBanner() {
  return (
    <div className="h-screen max-h-[850px] flex justify-center p-10 bg-black/10">
      {/* Card container */}
      <div className="z-10 h-full w-full max-w-[1300px] px-[7%] pt-6 flex flex-col backdrop-blur-xl bg-white/15 bg-linear-to-br from-white/25 to-white/5 rounded-4xl shadow-2xl border border-white/20 transition-all duration-700 ease-out hover:shadow-3xl hover:border-white/30 hover:backdrop-blur-2xl">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-4 items-center">
            <div>
              <Typography variant="h6" component="a" fontWeight="700">
                PreachBro
              </Typography>
            </div>
            <nav className="flex gap-4">
              <Typography component="a" href="#features" fontWeight="500">
                Features
              </Typography>
              <Typography component="a" href="#preview" fontWeight="500">
                Discover
              </Typography>
              <Typography component="a" href="#pricing" fontWeight="500">
                Pricing
              </Typography>
            </nav>
          </div>
          <div>
            <Button variant="outlined" color="primary" href="/login">
              Sign In
            </Button>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-4 flex flex-col items-center justify-center">
            <div className="text-center max-w-[500px]">
              <Typography variant="h5" component="h1" fontWeight="600">
                Your AI-Powered
                <br />
                <Typography
                  variant="h2"
                  component="span"
                  fontWeight="600"
                  className="bg-linear-to-r from-slate-600 via-blue-400 to-slate-500 bg-clip-text text-transparent"
                >
                  Sermon Assistant
                </Typography>
              </Typography>
              <Typography variant="body1" mt={2} color="text.secondary">
                Create, organize, and deliver impactful sermons with the help of
                AI. Transform your sermon preparation process and focus more on
                what matters most.
              </Typography>
            </div>
            <div className="flex gap-3 mt-8">
              <Button
                variant="contained"
                size="large"
                href="/register"
                className="px-8"
              >
                Get Started
              </Button>
              <Button
                variant="text"
                size="large"
                href="#preview"
                startIcon={<PlayCircleOutline />}
                sx={{ paddingLeft: "16px", paddingRight: "16px" }}
              >
                Watch demo
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <South />
          </div>
        </div>
      </div>
      {/* Extra card container as background */}
      <div className="absolute max-h-[800px] inset-0 flex justify-center p-10">
        <div className="h-full w-full max-w-[1300px] backdrop-blur-lg bg-white/10 bg-linear-to-tl from-white/20 to-white/0 rounded-4xl shadow-xl border border-white/10 flex gap-[5%] rotate-2 transition-all duration-1000 ease-in-out"></div>
      </div>
    </div>
  );
}
