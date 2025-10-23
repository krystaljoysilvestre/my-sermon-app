"use client";

import { Typography, Button } from "@mui/material";
import {
  CheckCircleOutlined,
  StarOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for exploring AI-powered sermon preparation",
      features: [
        "5 AI-generated outlines per month",
        "Basic scripture suggestions",
        "Community support",
        "Mobile app access",
      ],
      buttonText: "Get Started Free",
      popular: false,
      icon: <CheckCircleOutlined className="w-6 h-6" />,
    },
    {
      name: "Pastor",
      price: "$29",
      period: "per month",
      description: "Ideal for active pastors and ministry leaders",
      features: [
        "Unlimited AI-generated outlines",
        "Advanced scripture integration",
        "Sermon illustration library",
        "Priority email support",
        "Export to multiple formats",
        "Collaboration tools",
      ],
      buttonText: "Start Free Trial",
      popular: true,
      icon: <StarOutlined className="w-6 h-6" />,
    },
    {
      name: "Church",
      price: "$99",
      period: "per month",
      description: "For churches with multiple pastoral staff",
      features: [
        "Everything in Pastor plan",
        "Up to 10 team members",
        "Advanced analytics",
        "Custom branding",
        "API access",
        "Dedicated support",
        "Training sessions",
      ],
      buttonText: "Contact Sales",
      popular: false,
      icon: <RocketLaunchOutlined className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className="relative py-24 px-4 sm:px-8 flex flex-col items-center justify-center"
      id="pricing"
    >
      <div className="relative z-10 text-center mb-16">
        <Typography variant="h4" component="h2" fontWeight="500">
          Choose Your Ministry Plan
        </Typography>
        <Typography variant="body1" mt={1} color="text.secondary">
          Start with a free plan, upgrade as your ministry grows. Simple,
          transparent pricing for every church.
        </Typography>
      </div>

      {/* Pricing grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`group backdrop-blur-2xl bg-white/70 border border-white/40 rounded-[28px] shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-200/40 relative overflow-hidden p-10 flex flex-col items-center text-center ${plan.popular ? "ring-2 ring-blue-200/60" : ""}`}
          >
            {/* Plan name */}
            <Typography variant="h6" fontWeight="600" className="mb-1">
              {plan.name}
            </Typography>
            {/* Price */}
            <Typography variant="h4" fontWeight="700">
              {plan.price}
            </Typography>
            <Typography variant="body2" className="text-slate-500 mb-4">
              {plan.period}
            </Typography>
            {/* Description */}
            <Typography variant="body1" className="text-slate-600/90 mb-6">
              {plan.description}
            </Typography>
            {/* Features */}
            <ul className="my-8 space-y-2 w-full">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex gap-2">
                  <CheckCircleOutlined
                    sx={{
                      width: "16px",
                      height: "16px",
                      opacity: 0.4,
                    }}
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            {/* CTA Button */}
            <Button
              variant="outlined"
              href={plan.name === "Church" ? "/contact" : "/register"}
              className={`inline-flex items-center justify-center w-full py-3 rounded-2xl transition-all duration-300 font-semibold hover:scale-105 bg-white/90 text-blue-700 border border-blue-100 shadow hover:bg-white`}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
