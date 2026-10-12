"use client";

import React, { useState } from "react";
import { TERRAIN_SECTIONS, ACTS, TerrainSection } from "@/data/terrainData";
import { Compass, Sparkles, Droplets, Sun, Flame, ChevronRight, Layers, Info } from "lucide-react";

interface NarrativeArcProps {
  onSelectSection?: (section: TerrainSection) => void;
}

export default function NarrativeArc({ onSelectSection }: NarrativeArcProps) {
  const [selectedAct, setSelectedAct] = useState<number | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<number>(4); // Default to Spinifex

  const activeSection = TERRAIN_SECTIONS.find((s) => s.id === activeSectionId) || TERRAIN_SECTIONS[0];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border border-stone-800 shadow-2xl p-6 md:p-8">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Kati Thanda–Lake Eyre Journey Arc</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-100 tracking-tight">
            The 9-Part Narrative Arc of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-300">Terrain</span>
          </h2>
          <p className="text-sm text-stone-400 max-w-2xl mt-1 leading-relaxed">
            Terrain is structured as nine &ldquo;states of experiencing&rdquo; Country. Follow the three acts from modern urban life, deep into the arid salt basin, to ecological and cultural rebirth.
          </p>
        </div>

        {/* Act Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedAct(null)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
              selectedAct === null
                ? "bg-stone-100 text-stone-950 border-stone-100"
                : "bg-stone-950/70 text-stone-400 border-stone-800 hover:text-stone-200"
            }`}
          >
            All 9 Sections
          </button>
          {ACTS.map((act) => (
            <button
              key={act.number}
              onClick={() => setSelectedAct(act.number)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                selectedAct === act.number
                  ? `${act.bgBadge} font-bold shadow-md`
                  : "bg-stone-950/70 text-stone-400 border-stone-800 hover:text-stone-200"
              }`}
            >
              Act {act.number}
            </button>
          ))}
        </div>
      </div>

      {/* The Visual Journey Arc - 3 Acts Side by Side */}
      <div className="relative z-10 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {ACTS.map((act) => {
          const actSections = TERRAIN_SECTIONS.filter((s) => s.actNumber === act.number);
          const isActMuted = selectedAct !== null && selectedAct !== act.number;

          return (
            <div
              key={act.number}
              className={`relative rounded-2xl p-4 md:p-5 transition-all duration-300 border ${
                isActMuted
                  ? "opacity-40 grayscale border-stone-800/40 bg-stone-950/40"
                  : "border-stone-700/70 bg-stone-950/80 shadow-lg"
              }`}
            >
              {/* Act Header */}
              <div className="flex items-start justify-between gap-2 pb-3 border-b border-stone-800/80">
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold border mb-1 ${act.bgBadge}`}>
                    ACT {act.number}
                  </span>
                  <h3 className="text-sm font-bold text-stone-200">{act.title.split(": ")[1]}</h3>
                  <p className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">{act.theme}</p>
                </div>
                {act.number === 1 && <Flame className="w-4 h-4 text-amber-500 shrink-0" />}
                {act.number === 2 && <Sun className="w-4 h-4 text-stone-400 shrink-0" />}
                {act.number === 3 && <Droplets className="w-4 h-4 text-cyan-400 shrink-0" />}
              </div>

              {/* Sections in this Act */}
              <div className="mt-3.5 space-y-2.5">
                {actSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveSectionId(sec.id);
                        if (onSelectSection) onSelectSection(sec);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                        isActive
                          ? "bg-amber-600/20 border-amber-500/80 text-amber-200 shadow-md ring-1 ring-amber-500/50"
                          : "bg-stone-900/60 border-stone-800/80 text-stone-300 hover:bg-stone-800/70 hover:border-stone-700"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${
                            isActive
                              ? "bg-amber-500 text-stone-950"
                              : "bg-stone-800 text-stone-400 group-hover:text-stone-200"
                          }`}
                        >
                          {sec.id}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold tracking-wide truncate">{sec.title}</div>
                          <div className="text-[10px] text-stone-400 truncate mt-0.5">{sec.tagline}</div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? "text-amber-400 translate-x-0.5" : "text-stone-600 group-hover:text-stone-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Section Showcase Card */}
      <div className="relative z-10 mt-8 rounded-2xl bg-stone-950 border border-amber-500/30 p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-stone-950 text-xs font-black">
                SECTION {activeSection.id} OF 9
              </span>
              <span className="px-3 py-1 rounded-lg bg-stone-800 text-stone-300 text-xs font-semibold">
                {activeSection.actTitle}
              </span>
              <span className="text-xs text-stone-400 font-mono">Dancers: {activeSection.dancers}</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-stone-100 tracking-tight">
                {activeSection.title}
              </h3>
              <p className="text-sm font-medium text-amber-400/90 mt-0.5">
                &ldquo;{activeSection.tagline}&rdquo;
              </p>
            </div>

            {/* Core Meaning */}
            <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                <span>The Choreographer&rsquo;s Stated Meaning</span>
              </div>
              <p className="text-xs md:text-sm text-stone-200 leading-relaxed">
                {activeSection.meaning}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed pt-1 border-t border-stone-800/80">
                {activeSection.detailedMeaning}
              </p>
            </div>

            {/* Cultural Context */}
            <div className="text-xs text-stone-300 bg-stone-900/40 p-3 rounded-lg border border-stone-800/50">
              <span className="font-bold text-stone-200">Cultural & Ecological Context: </span>
              {activeSection.culturalContext}
            </div>
          </div>

          {/* Somatic Movement & Exam Hook Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-3">
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Movement Metaphor</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeSection.movementMetaphor}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-300 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-stone-400" />
                <span>Why It Matters in Exams</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                {activeSection.whyItMattersForExam}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
