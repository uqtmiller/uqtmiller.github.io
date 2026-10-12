"use client";

import React, { useState } from "react";
import { TERRAIN_SECTIONS, ACTS, TerrainSection } from "@/data/terrainData";
import { Activity, Sparkles, Feather, Box, Shirt, ChevronRight, Flame, Sun, Droplets } from "lucide-react";

export default function MovementMetaphors() {
  const [activeSectionId, setActiveSectionId] = useState<number>(4); // Default to Spinifex
  const [selectedAct, setSelectedAct] = useState<number | null>(null);

  const current = TERRAIN_SECTIONS.find((s) => s.id === activeSectionId) || TERRAIN_SECTIONS[3];

  // Specific somatic movement keywords for each section button in the table
  const movementTags: Record<number, string> = {
    1: "Hoisted & Manipulated in Space",
    2: "Barricades, Unison & Warrior Stances",
    3: "Passing Weight & Lineage Thread",
    4: "Rooted, Twisted & Suspended Swaying",
    5: "Angular Locking & Brittle Percussive Cuts",
    6: "Collapsing Spasms & Fractured Pathways",
    7: "Undulating Strata & Mutual Earth Floorwork",
    8: "Weightless Horizontal Mirage & Stillness",
    9: "Surging Wave Canon & Cyclical Ebb",
  };

  return (
    <section className="rounded-3xl bg-stone-900 border border-stone-800 p-6 md:p-8 shadow-xl space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Somatic &amp; Embodied Meaning</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-100 tracking-tight">
            Movement Metaphors &amp; Dance Concepts
          </h2>
          <p className="text-sm text-stone-400 max-w-2xl mt-1 leading-relaxed">
            In dance analysis, ideas aren&rsquo;t just stated—they are physically embodied. Select a section from the Three Acts table below to explore how Frances Rings translated Lake Eyre into specific body shapes, movement dynamics, and staging.
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

      {/* The 3-Act Selector Table (aligned with Narrative Arc) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {ACTS.map((act) => {
          const actSections = TERRAIN_SECTIONS.filter((s) => s.actNumber === act.number);
          const isActMuted = selectedAct !== null && selectedAct !== act.number;

          return (
            <div
              key={act.number}
              className={`rounded-2xl p-4 md:p-5 transition-all duration-200 border ${
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

              {/* Sections list in this Act */}
              <div className="mt-3.5 space-y-2.5">
                {actSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSectionId(sec.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                        isActive
                          ? "bg-emerald-600/20 border-emerald-500/80 text-emerald-200 shadow-md ring-1 ring-emerald-500/50"
                          : "bg-stone-900/60 border-stone-800/80 text-stone-300 hover:bg-stone-800/70 hover:border-stone-700"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${
                            isActive
                              ? "bg-emerald-500 text-stone-950"
                              : "bg-stone-800 text-stone-400 group-hover:text-stone-200"
                          }`}
                        >
                          {sec.id}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold tracking-wide truncate">{sec.title}</div>
                          <div className="text-[10px] text-stone-400 truncate mt-0.5">
                            {movementTags[sec.id] || sec.tagline}
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? "text-emerald-400 translate-x-0.5" : "text-stone-600 group-hover:text-stone-400"
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

      {/* Main Feature Layout for Selected Section */}
      <div className="rounded-2xl bg-stone-950 border border-emerald-500/30 p-6 shadow-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Somatic Metaphor & Meaning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  Section {current.id}: {current.actTitle.split(":")[0]}
                </span>
                <span className="text-xs text-stone-400 font-mono">{current.dancers}</span>
              </div>
              <h3 className="text-2xl font-black text-stone-100">{current.title}</h3>
              <p className="text-xs text-stone-300 leading-relaxed italic bg-stone-950 p-3.5 rounded-xl border border-stone-800/80">
                &ldquo;{current.movementMetaphor}&rdquo;
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2.5">
              <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Choreographic Intention</span>
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {current.meaning}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90 leading-relaxed">
              <span className="font-bold text-amber-300 block mb-1">Exam Analysis Tip:</span>
              Always link the movement quality (e.g. {current.keyConcepts.dynamics.split(";")[0]}) directly to the feeling or idea it creates for the audience.
            </div>
          </div>

          {/* Right Column: Concept Breakdown Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Space */}
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 transition space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Box className="w-4 h-4" />
                <span>Space (Levels, Shapes, Pathways)</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {current.keyConcepts.space}
              </p>
            </div>

            {/* Dynamics */}
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 transition space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
                <Activity className="w-4 h-4" />
                <span>Dynamics &amp; Movement Qualities</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {current.keyConcepts.dynamics}
              </p>
            </div>

            {/* Relationships & Devices */}
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 transition space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                <Feather className="w-4 h-4" />
                <span>Relationships &amp; Devices</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {current.keyConcepts.relationships}
              </p>
              <p className="text-[11px] text-stone-400 pt-1 border-t border-stone-800/60">
                <span className="font-semibold text-stone-300">Devices: </span>
                {current.keyConcepts.devices}
              </p>
            </div>

            {/* Production Elements */}
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 transition space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                <Shirt className="w-4 h-4" />
                <span>Production &amp; Design Elements</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {current.keyConcepts.production}
              </p>
              <p className="text-[11px] text-stone-400 pt-1 border-t border-stone-800/60">
                <span className="font-semibold text-stone-300">Skills: </span>
                {current.keyConcepts.skills}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
