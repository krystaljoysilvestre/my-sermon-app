"use client";

import { PlayCircleOutline } from "@mui/icons-material";
import { Typography, Button } from "@mui/material";

export default function HeroBanner() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex justify-center p-10"
      style={{ backgroundImage: "url('/images/hero/bg.jpg')" }}
    >
      {/* Container */}

      <div className="z-10 h-full w-full max-w-[1300px] px-[7%] backdrop-blur-md bg-white/15 rounded-4xl shadow-lg flex gap-[5%]">
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <Typography variant="h3" component="h1" fontWeight="600">
              Your AI-Powered Sermon Assistant
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
        <div className="flex-1 flex items-end py-3">
          <div className="rounded-t-full rounded-b-[24px] overflow-hidden">
            <img
              className="rounded-b-[24px]"
              src="/images/hero/devotion.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      {/* Extra Container BG */}
      <div className="absolute inset-0 flex justify-center p-10">
        <div className="h-full w-full max-w-[1300px] backdrop-blur-md bg-white/10 rounded-4xl shadow-lg flex gap-[5%] rotate-2"></div>
      </div>
    </div>
  );
}
