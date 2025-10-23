import { Typography } from "@mui/material";
import {
  AutoAwesomeOutlined,
  LibraryBooksOutlined,
  CreateOutlined,
  StorageOutlined,
} from "@mui/icons-material";

export default function Features() {
  const features = [
    {
      title: "AI-Powered Research",
      description:
        "Instantly access relevant scriptures, commentaries, and theological insights with advanced AI algorithms.",
      icon: (
        <AutoAwesomeOutlined
          sx={{
            width: "16px",
            height: "16px",
          }}
        />
      ),
    },
    {
      title: "Sermon Organization",
      description:
        "Keep your sermons, notes, and research beautifully organized in one intelligent workspace.",
      icon: (
        <LibraryBooksOutlined
          sx={{
            width: "16px",
            height: "16px",
          }}
        />
      ),
    },
    {
      title: "Smart Outlining",
      description:
        "Generate comprehensive sermon outlines with AI assistance while preserving your authentic voice.",
      icon: (
        <CreateOutlined
          sx={{
            width: "16px",
            height: "16px",
          }}
        />
      ),
    },
    {
      title: "Resource Library",
      description:
        "Access an ever-growing library of sermon illustrations, quotes, and theological references.",
      icon: (
        <StorageOutlined
          sx={{
            width: "16px",
            height: "16px",
          }}
        />
      ),
    },
  ];

  // Define positions for each card
  const positions = [
    "top-0 left-0", // Top-left
    "top-0 right-0", // Top-right
    "bottom-0 left-0", // Bottom-left
    "bottom-0 right-0", // Bottom-right
  ];

  return (
    <div className="flex justify-center p-10" id="features">
      <div className="h-[750px] w-full max-w-[1400px] px-[5%] flex items-center justify-center relative">
        {/* Central circles */}
        <div className="rounded-full h-[600px] w-[600px] flex items-center justify-center border border-[rgba(184,180,175,0.2)]">
          <div className="rounded-full h-[500px] w-[500px] flex items-center justify-center border border-[rgba(184,180,175,0.4)]">
            <div className="rounded-full h-[400px] w-[400px] flex items-center justify-center border border-[#b8b4af]">
              <div className="max-w-[300px] text-center">
                <Typography
                  variant="h4"
                  component="h2"
                  fontWeight="500"
                  className=""
                >
                  Redefining Sermon Preparation
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="max-w-3xl mx-auto font-light leading-relaxed"
                >
                  Experience the future of ministry with AI-powered tools
                  designed to amplify your calling
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards positioned at corners */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[900px] h-[500px] relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute w-[300px] h-[170px] group backdrop-blur-2xl bg-linear-to-br from-white/40 via-white/20 to-white/10 border border-white/30 rounded-[28px] shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-300/40 p-6 ${positions[index]}`}
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <Typography variant="h6" fontWeight="600">
                      {feature.title}
                    </Typography>
                    <span className="rounded-full bg-linear-to-br from-blue-400/20 to-transparent h-[30px] w-[30px] min-h-[30px] min-w-[30px] flex items-center justify-center">
                      {feature.icon}
                    </span>
                  </div>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-sm leading-relaxed"
                  >
                    {feature.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
