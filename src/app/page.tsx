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
import Features from "@/components/ui/Features";
import Preview from "@/components/ui/Preview";
import Testimonials from "@/components/ui/Testimonials";
import Pricing from "@/components/ui/Pricing";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Features />
      <Preview />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
