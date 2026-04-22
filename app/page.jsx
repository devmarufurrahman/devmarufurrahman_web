"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// কম্পোনেন্ট ইমপোর্ট
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Languages from "@/components/portfolio/Languages";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const docRef = doc(db, "websites", "devmarufurrahman");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPortfolioData(docSnap.data());
        } else {
          console.error("No data found for the specified document.");
        }
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_purple]"></div>
      </div>
    );
  }

  if (!portfolioData)
    return <div className="text-white text-center mt-20">Data Error!</div>;

  return (
    <main className="bg-[#020617] min-h-screen selection:bg-purple-500/30 font-sans scroll-smooth">
      <Navbar data={portfolioData} />
      <Hero data={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Projects projects={portfolioData.projects} />
      <Education education={portfolioData.education} />
      <Languages languages={portfolioData.languages} />
      <Footer data={portfolioData} />
    </main>
  );
}
