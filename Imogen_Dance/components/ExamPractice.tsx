"use client";

import React, { useState, useEffect } from "react";
import { TERRAIN_SECTIONS } from "@/data/terrainData";
import {
  generateExamQuestion,
  evaluateStudentAnswer,
  getStoredApiKey,
  GeneratedQuestion,
  ExamAttempt,
} from "@/lib/gemini";
import {
  PenTool,
  Sparkles,
  Key,
  CheckCircle,
  HelpCircle,
  MessageSquareQuote,
  Clock,
  History,
  Send,
  Loader2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ExamPracticeProps {
  onOpenApiKeyModal: () => void;
}

export default function ExamPractice({ onOpenApiKeyModal }: ExamPracticeProps) {
  const [apiKey, setApiKey] = useState<string>("");
  const [selectedSectionSlug, setSelectedSectionSlug] = useState<string>("any");
  const [selectedFocus, setSelectedFocus] = useState<string>("any");

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeQuestion, setActiveQuestion] = useState<GeneratedQuestion | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // History of attempts (newest on top)
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [expandedAttemptId, setExpandedAttemptId] = useState<string | null>(null);

  useEffect(() => {
    const key = getStoredApiKey();
    setApiKey(key);

    // Load saved attempts from localStorage
    try {
      const saved = localStorage.getItem("terrain_exam_attempts");
      if (saved) {
        setAttempts(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const saveAttemptsToStorage = (updated: ExamAttempt[]) => {
    setAttempts(updated);
    try {
      localStorage.setItem("terrain_exam_attempts", JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleGenerateQuestion = async () => {
    const currentKey = getStoredApiKey();
    if (!currentKey) {
      onOpenApiKeyModal();
      return;
    }

    setIsGenerating(true);
    setErrorMsg("");

    try {
      const preferredSec = selectedSectionSlug !== "any" ? selectedSectionSlug : undefined;
      const preferredFoc = selectedFocus !== "any" ? selectedFocus : undefined;
      const newQ = await generateExamQuestion(currentKey, preferredSec, preferredFoc);
      setActiveQuestion(newQ);
      setCurrentAnswer("");
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to generate question. Please check your API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!activeQuestion || !currentAnswer.trim()) return;
    const currentKey = getStoredApiKey();
    if (!currentKey) {
      onOpenApiKeyModal();
      return;
    }

    setIsEvaluating(true);
    setErrorMsg("");

    const newAttemptId = "att-" + Date.now();
    const tentativeAttempt: ExamAttempt = {
      id: newAttemptId,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      question: activeQuestion,
      studentAnswer: currentAnswer,
      isLoadingFeedback: true,
    };

    // Place newest on top immediately
    const updatedWithLoading = [tentativeAttempt, ...attempts];
    saveAttemptsToStorage(updatedWithLoading);
    setExpandedAttemptId(newAttemptId);

    try {
      const feedback = await evaluateStudentAnswer(currentKey, activeQuestion, currentAnswer);
      const finishedAttempt: ExamAttempt = {
        ...tentativeAttempt,
        feedback,
        isLoadingFeedback: false,
      };

      const finalAttempts = [finishedAttempt, ...attempts];
      saveAttemptsToStorage(finalAttempts);
      // Reset active question input for next question
      setActiveQuestion(null);
      setCurrentAnswer("");
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to evaluate answer. Please try again.");
      // Remove loading state from the tentative attempt
      const cleaned = attempts.filter((a) => a.id !== newAttemptId);
      saveAttemptsToStorage(cleaned);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <section className="rounded-3xl bg-stone-900 border border-stone-800 p-6 md:p-8 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <PenTool className="w-3.5 h-3.5" />
            <span>Exam Simulator &amp; Socratic Coach</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-100 tracking-tight">
            Practice Written Exam Questions
          </h2>
          <p className="text-sm text-stone-400 max-w-2xl mt-1 leading-relaxed">
            Generate questions on demand connecting the meaning of individual sections in <em>Terrain</em> to dance concepts and choreographic devices. Receive approximate grading (out of 10) with celebratory praise and Socratic questions to deepen your analysis.
          </p>
        </div>

        {/* API Key Status Pill */}
        <button
          onClick={onOpenApiKeyModal}
          className="px-3.5 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-xs font-semibold text-stone-300 hover:border-amber-500/50 transition flex items-center gap-2 shrink-0"
        >
          <Key className="w-3.5 h-3.5 text-amber-400" />
          <span>{apiKey ? "Gemini Key Connected" : "Connect Gemini Key"}</span>
        </button>
      </div>

      {/* Question Generator Controls */}
      <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Generate an On-Demand Exam Question</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Section Picker */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-400 mb-1">
              Select Terrain Section
            </label>
            <select
              value={selectedSectionSlug}
              onChange={(e) => setSelectedSectionSlug(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
            >
              <option value="any">🎲 Surprise Me (Any Section)</option>
              {TERRAIN_SECTIONS.map((sec) => (
                <option key={sec.slug} value={sec.slug}>
                  {sec.id}. {sec.title} ({sec.actTitle.split(":")[0]})
                </option>
              ))}
            </select>
          </div>

          {/* Focus Area Picker */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-400 mb-1">
              Focus Dance Concept
            </label>
            <select
              value={selectedFocus}
              onChange={(e) => setSelectedFocus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
            >
              <option value="any">🎲 Mixed / Comprehensive</option>
              <option value="Elements of Dance (Levels, Shape, Dynamics, Relationships)">
                Elements of Dance (Space, Time, Dynamics)
              </option>
              <option value="Choreographic Devices (Unison, Canon, Accumulation, Contrast)">
                Choreographic Devices (Unison, Contrast, etc.)
              </option>
              <option value="Production Elements (Costumes, Lighting, Sound Design, Sets)">
                Production Elements (Costume, Light, Music)
              </option>
              <option value="Technical and Expressive Skills (Balance, Alignment, Focus)">
                Technical &amp; Expressive Skills
              </option>
            </select>
          </div>

          {/* Generator Button */}
          <div className="flex items-end">
            <button
              onClick={handleGenerateQuestion}
              disabled={isGenerating}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Drafting Question...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate New Question</span>
                </>
              )}
            </button>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300">
            {errorMsg}
          </div>
        )}
      </div>

      {/* Active Question & Writing Area */}
      {activeQuestion && (
        <div className="p-6 rounded-2xl bg-stone-950 border border-amber-500/50 shadow-2xl space-y-5 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-stone-950 text-xs font-black">
                {activeQuestion.sectionTitle}
              </span>
              <span className="text-xs text-stone-400">{activeQuestion.actTitle}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-800">
                {activeQuestion.focusArea}
              </span>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              Generated at {activeQuestion.createdAt}
            </span>
          </div>

          {/* Stated Meaning */}
          <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800/80 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Stated Section Meaning:
            </span>
            <p className="text-xs text-stone-300 leading-relaxed">
              {activeQuestion.statedMeaning}
            </p>
          </div>

          {/* Question Text */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Exam Task:
            </span>
            <h3 className="text-base md:text-lg font-bold text-stone-100 leading-snug">
              {activeQuestion.questionText}
            </h3>
          </div>

          {/* Guiding Hints */}
          {activeQuestion.hints && activeQuestion.hints.length > 0 && (
            <div className="p-3.5 rounded-xl bg-stone-900/50 border border-stone-800/50 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-300">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Hints to Include:</span>
              </div>
              <ul className="list-disc list-inside text-xs text-stone-400 space-y-0.5">
                {activeQuestion.hints.map((hint, i) => (
                  <li key={i}>{hint}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Free-form Answer Textarea */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-stone-300">
              Your Written Analysis:
            </label>
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="In Terrain, Frances Rings effectively uses... (Describe specific dancer movements, name concepts such as levels/dynamics/unison, and explain how they communicate the meaning)..."
              rows={7}
              className="w-full p-4 rounded-xl bg-stone-900 border border-stone-700 text-xs md:text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 leading-relaxed font-sans"
            />
          </div>

          {/* Submit Action */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveQuestion(null)}
              className="text-xs text-stone-400 hover:text-stone-200 transition"
            >
              Dismiss Question
            </button>
            <button
              onClick={handleSubmitAnswer}
              disabled={isEvaluating || !currentAnswer.trim()}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-amber-900/30 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isEvaluating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Evaluating Answer...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit for Coaching &amp; Feedback</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* History of Past Attempts (Newest on Top) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center gap-2 text-sm font-bold text-stone-200">
            <History className="w-4 h-4 text-amber-400" />
            <span>Practice History &amp; Coaching Log ({attempts.length})</span>
          </div>
          {attempts.length > 0 && (
            <button
              onClick={() => {
                if (confirm("Clear all past practice attempts?")) {
                  saveAttemptsToStorage([]);
                }
              }}
              className="text-[11px] text-stone-500 hover:text-rose-400 transition"
            >
              Clear History
            </button>
          )}
        </div>

        {attempts.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-stone-950/60 border border-stone-800 text-stone-500 text-xs">
            No completed practice attempts yet. Generate a question above to start practicing!
          </div>
        ) : (
          <div className="space-y-4">
            {attempts.map((att) => {
              const isExpanded = expandedAttemptId === att.id || att.isLoadingFeedback;
              return (
                <div
                  key={att.id}
                  className="rounded-2xl bg-stone-950 border border-stone-800 overflow-hidden shadow-lg transition"
                >
                  {/* Collapsible Header */}
                  <div
                    onClick={() =>
                      setExpandedAttemptId(isExpanded ? null : att.id)
                    }
                    className="p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-stone-900/40 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {att.feedback ? (
                        <div className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black shrink-0">
                          {att.feedback.score}/10
                        </div>
                      ) : (
                        <div className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-400 text-xs font-mono shrink-0">
                          Reviewing...
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-stone-200 truncate">
                          {att.question.sectionTitle}: {att.question.questionText}
                        </div>
                        <div className="text-[11px] text-stone-500 truncate mt-0.5">
                          Submitted at {att.timestamp}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {att.feedback && (
                        <span className="text-[11px] font-semibold text-emerald-400 hidden sm:inline-block">
                          {att.feedback.scoreLabel}
                        </span>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-stone-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="p-5 pt-0 space-y-5 border-t border-stone-800/80 animate-fadeIn">
                      {/* Question Stated Meaning */}
                      <div className="text-xs text-stone-400 bg-stone-900/50 p-3 rounded-xl border border-stone-800/50 mt-4">
                        <span className="font-bold text-stone-300">Meaning of {att.question.sectionTitle}: </span>
                        {att.question.statedMeaning}
                      </div>

                      {/* Student's Answer */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                          Your Written Response:
                        </span>
                        <div className="p-4 rounded-xl bg-stone-900 text-xs text-stone-200 leading-relaxed whitespace-pre-wrap border border-stone-800">
                          {att.studentAnswer}
                        </div>
                      </div>

                      {/* Loading Feedback State */}
                      {att.isLoadingFeedback && (
                        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-300 flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating coaching feedback and questions...</span>
                        </div>
                      )}

                      {/* Feedback Output */}
                      {att.feedback && (
                        <div className="space-y-4 pt-2 border-t border-stone-800">
                          {/* Score Header */}
                          <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-900/80 border border-stone-800">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-stone-400">
                                Approximate Grade:
                              </span>
                              <span className="text-base font-extrabold text-amber-400">
                                {att.feedback.score} / 10
                              </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                              {att.feedback.scoreLabel}
                            </span>
                          </div>

                          {/* 1. What You DID Well! (Positive Celebration) */}
                          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                              <CheckCircle className="w-4 h-4" />
                              <span>What You Did Well!</span>
                            </div>
                            <ul className="list-disc list-inside text-xs text-emerald-200/90 space-y-1">
                              {att.feedback.praise.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          {/* 2. Questions to Deepen Your Thinking (Socratic Guidance) */}
                          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/60 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                              <HelpCircle className="w-4 h-4" />
                              <span>Questions to Deepen Your Thinking (What&rsquo;s Missing?)</span>
                            </div>
                            <ul className="list-disc list-inside text-xs text-amber-200/90 space-y-1.5 leading-relaxed">
                              {att.feedback.socraticQuestions.map((q, i) => (
                                <li key={i}>{q}</li>
                              ))}
                            </ul>
                          </div>

                          {/* 3. Model Inspiration */}
                          {att.feedback.modelSuggestions && (
                            <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1 text-xs text-stone-300">
                              <div className="flex items-center gap-1.5 font-bold text-stone-400">
                                <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Inspiration Sentence Idea:</span>
                              </div>
                              <p className="italic text-stone-300 leading-relaxed">
                                &ldquo;{att.feedback.modelSuggestions}&rdquo;
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
