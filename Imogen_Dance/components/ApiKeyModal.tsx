"use client";

import React, { useState, useEffect } from "react";
import { Key, CheckCircle, XCircle, ExternalLink, ShieldCheck, Trash2 } from "lucide-react";
import { getStoredApiKey, storeApiKey, clearApiKey, callGeminiWithFallback } from "@/lib/gemini";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeySaved: (key: string) => void;
}

export default function ApiKeyModal({ isOpen, onClose, onKeySaved }: ApiKeyModalProps) {
  const [keyInput, setKeyInput] = useState("");
  const [status, setStatus] = useState<"idle" | "testing" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      const existing = getStoredApiKey();
      setKeyInput(existing);
      setStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveAndTest = async () => {
    const trimmed = keyInput.trim();
    if (!trimmed) {
      setErrorMessage("Please enter a valid Gemini API key.");
      setStatus("error");
      return;
    }

    setStatus("testing");
    setErrorMessage("");

    try {
      // Test key with fallback across current models
      await callGeminiWithFallback(trimmed, "Hello! Reply with one word: Ready", false);

      storeApiKey(trimmed);
      setStatus("success");
      onKeySaved(trimmed);
      setTimeout(() => {
        onClose();
      }, 900);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to verify Gemini API key. Check key and connection.");
    }
  };

  const handleRemoveKey = () => {
    clearApiKey();
    setKeyInput("");
    setStatus("idle");
    onKeySaved("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-stone-900 border border-stone-700/80 rounded-2xl shadow-2xl p-6 text-stone-100">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-100">Gemini API Key</h2>
              <p className="text-xs text-stone-400">Stored safely in your browser cookie for exam practice</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-200 transition p-1.5 rounded-lg hover:bg-stone-800"
          >
            ✕
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <p className="text-xs text-stone-300 leading-relaxed">
            To generate personalized dance exam questions and receive AI feedback with Socratic coaching, enter your Google Gemini API key.
          </p>

          <div className="relative">
            <label className="block text-xs font-semibold text-stone-400 mb-1.5">
              API Key
            </label>
            <input
              type="text"
              value={keyInput}
              onChange={(e) => {
                setKeyInput(e.target.value);
                setStatus("idle");
              }}
              placeholder="AQ.Ab8... or AIzaSy..."
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-mono"
            />
          </div>

          {status === "testing" && (
            <div className="flex items-center gap-2 text-xs text-amber-400 animate-pulse">
              <span className="inline-block w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
              Testing your Gemini API key with Google servers...
            </div>
          )}

          {status === "success" && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-lg">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Key verified and saved in your cookie! Practice questions are ready.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-2 text-xs text-rose-400 bg-rose-950/40 border border-rose-800/60 p-2.5 rounded-lg">
              <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="p-3 bg-stone-950/70 rounded-xl border border-stone-800/80 text-xs text-stone-400 space-y-2">
            <div className="flex items-center gap-2 text-stone-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Client-Side Privacy Guarantee</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Your key never touches any middleman server. Requests go straight from your browser to Google&rsquo;s official Gemini API endpoint.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium text-[11px] transition"
            >
              Get a free API key at Google AI Studio <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-stone-800">
            {keyInput ? (
              <button
                type="button"
                onClick={handleRemoveKey}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-rose-400 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Remove Key
              </button>
            ) : <span />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-300 hover:text-stone-100 transition rounded-xl hover:bg-stone-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveAndTest}
                disabled={status === "testing"}
                className="px-5 py-2 text-xs font-semibold rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 transition font-medium disabled:opacity-50 shadow-lg shadow-amber-900/30"
              >
                {status === "testing" ? "Verifying..." : "Save & Verify"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
