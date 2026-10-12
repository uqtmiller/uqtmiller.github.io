"use client";

import React, { useState } from "react";
import { DANCE_CONCEPTS, ConceptCategory } from "@/data/danceConcepts";
import { BookOpen, Search, Sparkles } from "lucide-react";

export default function ConceptReference() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeCategory = DANCE_CONCEPTS[activeCategoryIdx];

  const filteredGroups = activeCategory.groups.map((group) => ({
    ...group,
    items: group.items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.examApplicationTip.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  return (
    <section className="rounded-3xl bg-stone-900 border border-stone-800 p-6 md:p-8 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Theory Toolkit</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-100 tracking-tight">
            Dance Concepts &amp; Skills Reference
          </h2>
          <p className="text-sm text-stone-400 max-w-2xl mt-1 leading-relaxed">
            The four official theory pillars required in your written exam analysis. Use these precise terms to demonstrate a discerning understanding.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search concepts, levels..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {DANCE_CONCEPTS.map((cat, idx) => {
          const isActive = idx === activeCategoryIdx;
          return (
            <button
              key={cat.title}
              onClick={() => {
                setActiveCategoryIdx(idx);
                setSearchQuery("");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition border shrink-0 ${
                isActive
                  ? "bg-cyan-950/60 text-cyan-300 border-cyan-500 shadow-md ring-1 ring-cyan-500/40"
                  : "bg-stone-950/70 text-stone-400 border-stone-800 hover:text-stone-200"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Items Cards */}
      <div className="space-y-6">
        <div className="text-xs text-stone-400">
          <strong className="text-stone-200">{activeCategory.title}:</strong> {activeCategory.subtitle}
        </div>

        {filteredGroups.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-stone-950 border border-stone-800 text-stone-500 text-xs">
            No dance concepts found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          filteredGroups.map((group) => (
            <div key={group.groupName} className="space-y-3">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                {group.groupName}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-stone-950/90 border border-stone-800 hover:border-stone-700 transition space-y-2"
                  >
                    <div className="text-sm font-bold text-stone-100">{item.name}</div>
                    <p className="text-xs text-stone-300 leading-relaxed">{item.definition}</p>
                    <div className="pt-2 border-t border-stone-800/80 flex items-start gap-2 text-stone-400 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-300">Exam Application: </strong>
                        {item.examApplicationTip}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
