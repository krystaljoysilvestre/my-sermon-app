import { Typography, Button } from "@mui/material";
import { PlayCircleOutline, ChevronRight } from "@mui/icons-material";

export default function Preview() {
  return (
    <div className="flex justify-center p-10 bg-black/10" id="preview">
      <div className="h-auto w-full max-w-[1400px] px-[5%] py-16 relative">
        {/* Main content container with liquid glass */}
        <div className="relative overflow-hidden p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left content */}
            <div className="space-y-6">
              <div>
                <Typography variant="h4" component="h2" fontWeight="500">
                  Experience the Future
                </Typography>
                <Typography
                  mt={1}
                  variant="body1"
                  color="text.secondary"
                  className="text-lg leading-relaxed mb-6"
                >
                  See how AI transforms your sermon preparation with intelligent
                  research, automated outlines, and seamless organization – all
                  in one powerful platform.
                </Typography>
              </div>
              {/* Feature highlights */}
              <div className="space-y-4">
                {[
                  "Real-time AI scripture analysis",
                  "Intelligent sermon outlines",
                  "Contextual research suggestions",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-white/80 backdrop-blur-lg border border-white/40 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/90">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <Typography
                      variant="body1"
                      className="transition-colors duration-300 group-hover:text-gray-800"
                    >
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>
              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  variant="text"
                  size="large"
                  href="#preview"
                  startIcon={<PlayCircleOutline />}
                  sx={{ paddingLeft: "16px", paddingRight: "16px" }}
                >
                  Watch demo
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  href="/register"
                  className="px-8"
                >
                  Try Free Trial
                </Button>
              </div>
            </div>
            {/* Right content - Demo preview */}
            <div className="relative">
              <div className="backdrop-blur-xl bg-linear-to-br from-white/90 via-white/40 to-white/60 border border-white/25 rounded-[24px] shadow-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:backdrop-blur-2xl hover:bg-linear-to-br hover:from-white/20 hover:via-white/12 hover:to-white/6 hover:border-white/35 hover:shadow-2xl relative overflow-hidden group">
                {/* Demo content */}
                <div className="aspect-4/3 p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-lg border border-white/40 flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/90">
                    <PlayCircleOutline className="w-10 h-10 text-blue-500" />
                  </div>
                  <Typography variant="h6" fontWeight="600" className="mb-2">
                    Interactive Demo
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="max-w-xs"
                  >
                    Experience the full power of AI-assisted sermon preparation
                  </Typography>
                </div>
                {/* Demo decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-linear-to-br from-blue-400/20 to-transparent rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-linear-to-br from-purple-400/15 to-transparent rounded-full"></div>
                {/* Feature badges */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-xs font-medium">
                    Scripture Analysis
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-xs font-medium">
                    Smart Outlines
                  </div>
                </div>
              </div>
              {/* Floating animation elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
