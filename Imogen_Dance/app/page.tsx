"use client";

import React, { useState } from "react";
import NarrativeArc from "@/components/NarrativeArc";
import MovementMetaphors from "@/components/MovementMetaphors";
import CauseEffectPuzzle from "@/components/CauseEffectPuzzle";
import ExamPractice from "@/components/ExamPractice";
import ConceptReference from "@/components/ConceptReference";
import ApiKeyModal from "@/components/ApiKeyModal";
import { Key, Compass, Activity, Puzzle, PenTool, BookOpen } from "lucide-react";

export default function HomePage() {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"arc" | "movement" | "puzzle" | "practice" | "concepts">("arc");

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-amber-500 flex items-center justify-center font-black text-stone-950 shadow-md">
              T
            </div>
            <div>
              <h1 className="text-sm font-extrabold text-stone-100 tracking-tight leading-none">
                TERRAIN <span className="text-amber-500 text-xs font-normal">| Bangarra Dance Study</span>
              </h1>
              <p className="text-[10px] text-stone-400 mt-0.5">Year 7–10 Dance Exam Prep &amp; Socratic Coach</p>
            </div>
          </div>

          {/* Quick Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setActiveTab("arc")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "arc"
                  ? "bg-amber-600/20 text-amber-300 border border-amber-500/40"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Narrative Arc</span>
            </button>
            <button
              onClick={() => setActiveTab("movement")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "movement"
                  ? "bg-emerald-600/20 text-emerald-300 border border-emerald-500/40"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Movement Metaphors</span>
            </button>
            <button
              onClick={() => setActiveTab("puzzle")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "puzzle"
                  ? "bg-amber-600/20 text-amber-300 border border-amber-500/40"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Puzzle className="w-3.5 h-3.5" />
              <span>Cause &amp; Effect</span>
            </button>
            <button
              onClick={() => setActiveTab("practice")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "practice"
                  ? "bg-rose-600/20 text-rose-300 border border-rose-500/40"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Exam Practice</span>
            </button>
            <button
              onClick={() => setActiveTab("concepts")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "concepts"
                  ? "bg-cyan-600/20 text-cyan-300 border border-cyan-500/40"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Theory Concepts</span>
            </button>
          </nav>

          {/* Gemini Key Trigger */}
          <button
            onClick={() => setIsApiKeyModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700/80 text-stone-200 text-xs font-semibold transition flex items-center gap-2 shadow-sm"
          >
            <Key className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Gemini Key</span>
          </button>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around px-2 py-1.5 border-t border-stone-800 bg-stone-950 text-[11px] font-semibold text-stone-400">
          <button
            onClick={() => setActiveTab("arc")}
            className={`p-1.5 rounded ${activeTab === "arc" ? "text-amber-400 font-bold" : ""}`}
          >
            Arc
          </button>
          <button
            onClick={() => setActiveTab("movement")}
            className={`p-1.5 rounded ${activeTab === "movement" ? "text-emerald-400 font-bold" : ""}`}
          >
            Movement
          </button>
          <button
            onClick={() => setActiveTab("puzzle")}
            className={`p-1.5 rounded ${activeTab === "puzzle" ? "text-amber-400 font-bold" : ""}`}
          >
            Puzzles
          </button>
          <button
            onClick={() => setActiveTab("practice")}
            className={`p-1.5 rounded ${activeTab === "practice" ? "text-rose-400 font-bold" : ""}`}
          >
            Practice
          </button>
          <button
            onClick={() => setActiveTab("concepts")}
            className={`p-1.5 rounded ${activeTab === "concepts" ? "text-cyan-400 font-bold" : ""}`}
          >
            Concepts
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Tab 1: Front and Centre Narrative Arc */}
        <div className={activeTab === "arc" ? "block" : "hidden md:block"}>
          <NarrativeArc />
        </div>

        {/* Tab 2: Movement Metaphors */}
        <div className={activeTab === "movement" ? "block" : "hidden md:block"}>
          <MovementMetaphors />
        </div>

        {/* Tab 3: Cause & Effect Puzzles (Year 7) */}
        <div className={activeTab === "puzzle" ? "block" : "hidden md:block"}>
          <CauseEffectPuzzle />
        </div>

        {/* Tab 4: Exam Practice & Socratic Coach */}
        <div className={activeTab === "practice" ? "block" : "hidden md:block"}>
          <ExamPractice onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)} />
        </div>

        {/* Tab 5: Theory Concepts Reference */}
        <div className={activeTab === "concepts" ? "block" : "hidden md:block"}>
          <ConceptReference />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950 py-6 text-center text-xs text-stone-500 space-y-1">
        <p>Terrain (2012) choreographed by Frances Rings • Bangarra Dance Theatre Education Resource</p>
        <p>Study helper designed for Year 7–10 Dance Analysis and Exam Preparation.</p>
      </footer>

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onKeySaved={() => {}}
      />
    </div>
  );
}
