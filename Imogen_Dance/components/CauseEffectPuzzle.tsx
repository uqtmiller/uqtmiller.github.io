"use client";

import React, { useState } from "react";
import { CAUSE_EFFECT_PUZZLES, StoryPuzzle } from "@/data/causeEffectPuzzles";
import { Puzzle, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, Lightbulb, Trophy } from "lucide-react";

export default function CauseEffectPuzzle() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [completedPuzzles, setCompletedPuzzles] = useState<Record<string, boolean>>({});

  const puzzle = CAUSE_EFFECT_PUZZLES[currentIdx];
  const selectedOption = puzzle.options.find((o) => o.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  const handleSelect = (optionId: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    setHasSubmitted(true);
    if (selectedOption?.isCorrect) {
      setCompletedPuzzles((prev) => ({ ...prev, [puzzle.id]: true }));
    }
  };

  const handleNext = () => {
    if (currentIdx < CAUSE_EFFECT_PUZZLES.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionId(null);
      setHasSubmitted(false);
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  const totalCompleted = Object.values(completedPuzzles).filter(Boolean).length;

  return (
    <section className="rounded-3xl bg-stone-900 border border-stone-800 p-6 md:p-8 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Puzzle className="w-3.5 h-3.5" />
            <span>Interactive Story Connection</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-100 tracking-tight">
            Cause &amp; Effect: Why Sections Connect
          </h2>
          <p className="text-sm text-stone-400 max-w-2xl mt-1 leading-relaxed">
            Memorising names is easy when you understand the story! Solve these narrative puzzles to discover why Frances Rings sequenced each section in this exact order.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-xs font-semibold text-stone-300 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>
              Solved: <strong className="text-amber-400">{totalCompleted}</strong> of {CAUSE_EFFECT_PUZZLES.length}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {CAUSE_EFFECT_PUZZLES.map((p, idx) => {
          const isDone = completedPuzzles[p.id];
          const isCurrent = idx === currentIdx;
          return (
            <button
              key={p.id}
              onClick={() => {
                setCurrentIdx(idx);
                setSelectedOptionId(null);
                setHasSubmitted(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 border flex items-center gap-1.5 ${
                isCurrent
                  ? "bg-amber-600 text-stone-950 border-amber-500"
                  : isDone
                  ? "bg-emerald-950/40 text-emerald-400 border-emerald-800/60"
                  : "bg-stone-950/70 text-stone-400 border-stone-800 hover:text-stone-200"
              }`}
            >
              <span>#{idx + 1}</span>
              {isDone && <CheckCircle2 className="w-3 h-3" />}
            </button>
          );
        })}
      </div>

      {/* Main Puzzle Card */}
      <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-6">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-400 text-xs font-bold uppercase tracking-wider">
            Act {puzzle.actNumber} • {puzzle.promptTheme}
          </span>
          <span className="text-xs text-stone-500 font-mono">
            Puzzle {currentIdx + 1} of {CAUSE_EFFECT_PUZZLES.length}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-stone-100 leading-snug">
          {puzzle.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {puzzle.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            let optStyle = "bg-stone-900/60 border-stone-800/80 text-stone-300 hover:bg-stone-800/60 hover:border-stone-700";

            if (hasSubmitted) {
              if (opt.isCorrect) {
                optStyle = "bg-emerald-950/50 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/50";
              } else if (isSelected && !opt.isCorrect) {
                optStyle = "bg-rose-950/50 border-rose-500 text-rose-200 ring-1 ring-rose-500/50";
              } else {
                optStyle = "opacity-40 bg-stone-900/40 border-stone-800 text-stone-500";
              }
            } else if (isSelected) {
              optStyle = "bg-amber-600/20 border-amber-500 text-amber-200 ring-1 ring-amber-500/50";
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={hasSubmitted}
                className={`w-full text-left p-4 rounded-xl border text-xs md:text-sm transition-all duration-150 flex items-start gap-3 ${optStyle}`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${
                    isSelected
                      ? "bg-amber-500 text-stone-950"
                      : "bg-stone-800 text-stone-400"
                  }`}
                >
                  {opt.id.toUpperCase()}
                </div>
                <div className="flex-1 leading-relaxed">{opt.text}</div>
              </button>
            );
          })}
        </div>

        {/* Post-Submit Feedback Banner */}
        {hasSubmitted && selectedOption && (
          <div
            className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 animate-fadeIn ${
              isCorrect
                ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-200"
                : "bg-rose-950/30 border-rose-800/60 text-rose-200"
            }`}
          >
            <div className="flex items-center gap-2 font-bold">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Correct!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>Not quite yet!</span>
                </>
              )}
            </div>
            <p>{selectedOption.feedback}</p>
            <div className="pt-2 border-t border-stone-800/80 flex items-start gap-2 text-stone-300">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Deeper Insight: </strong>
                {puzzle.deeperInsight}
              </div>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-2">
          {!hasSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOptionId}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-amber-900/30"
            >
              Check Answer
            </button>
          ) : (
            <div className="flex items-center gap-3 w-full justify-between">
              {!isCorrect ? (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Try Again
                </button>
              ) : <div />}

              {currentIdx < CAUSE_EFFECT_PUZZLES.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-amber-900/30 ml-auto"
                >
                  <span>Next Puzzle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 ml-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>All Narrative Puzzles Completed!</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
