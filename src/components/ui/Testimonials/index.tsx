import { Typography } from "@mui/material";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rev. Sarah Kim",
      title: "Lead Pastor, Grace Church",
      quote:
        "Calm Intelligence has made my sermon preparation more focused and efficient. The AI tools help me find relevant scripture and organize my thoughts quickly.",
      avatar: "/images/hero/avatar1.png",
      rating: 5,
    },
    {
      name: "Pastor James Lee",
      title: "Youth Pastor, CityLight",
      quote:
        "The spiritual, minimal interface helps me focus. The AI suggestions are always relevant and inspiring for my weekly messages.",
      avatar: "/images/hero/avatar2.png",
      rating: 5,
    },
    {
      name: "Dr. Maria Santos",
      title: "Teaching Pastor, Hope Chapel",
      quote:
        "This app saves me hours every week. I can research, outline, and prepare sermons all in one place, with intelligent recommendations that fit my needs.",
      avatar: "/images/hero/avatar3.png",
      rating: 5,
    },
  ];

  return (
    <section
      className="relative py-24 px-4 sm:px-8 flex flex-col items-center justify-center"
      id="testimonials"
    >
      {/* Section header */}
      <div className="relative z-10 text-center mb-16">
        <Typography variant="h4" component="h2" fontWeight="500">
          What Pastors Are Saying
        </Typography>
        <Typography
          mt={1}
          variant="body1"
          className="max-w-xl mx-auto text-slate-600/80 font-light leading-relaxed"
        >
          Trusted by ministry leaders who value clarity, calm, and spiritual
          focus in their sermon preparation.
        </Typography>
      </div>

      {/* Testimonials grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group backdrop-blur-2xl bg-linear-to-br from-white/40 via-white/20 to-white/10 border border-white/30 rounded-[28px] shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-300/40 relative overflow-hidden p-8 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-400/20 to-transparent shadow-lg mb-4 overflow-hidden flex items-center justify-center">
              {/* <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              /> */}
            </div>
            {/* Quote */}
            <Typography variant="body1" className="italic text-slate-700 mb-6">
              “{t.quote}”
            </Typography>
            {/* Name & title */}
            <Typography variant="h6" fontWeight="600" className="mb-1">
              {t.name}
            </Typography>
            <Typography variant="body2" className="text-slate-500 mb-4">
              {t.title}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
