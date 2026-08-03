import { useState } from "react";
import { RawGraphExplorer, SimpleRagView, RagExplainView, useTheme } from "@trustgraph/trustkit";

type ViewMode = "hello" | "graph" | "rag" | "explain";

export function TemplateExplorer() {
  const { theme, sz } = useTheme();
  const [mode, setMode] = useState<ViewMode>("hello");

  const buttonStyle = (active: boolean) => ({
    padding: "5px 12px",
    borderRadius: 6,
    border: `1px solid ${active ? theme.palette.cyan + "44" : theme.border.default}`,
    background: active ? `${theme.palette.cyan}1a` : "transparent",
    color: active ? theme.palette.cyan : theme.text.subtle,
    fontSize: sz(11),
    fontFamily: "'IBM Plex Mono', monospace",
    cursor: "pointer" as const,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "var(--page-height)" }}>
      <div style={{
        padding: "8px 28px",
        borderBottom: `1px solid ${theme.border.default}`,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        <div style={{ display: "flex", gap: 2 }}>
          <button onClick={() => setMode("hello")} style={buttonStyle(mode === "hello")}>
            Hello
          </button>
          <button onClick={() => setMode("graph")} style={buttonStyle(mode === "graph")}>
            Graph
          </button>
          <button onClick={() => setMode("rag")} style={buttonStyle(mode === "rag")}>
            RAG
          </button>
          <button onClick={() => setMode("explain")} style={buttonStyle(mode === "explain")}>
            Explain
          </button>
        </div>
        <div style={{ flex: 1 }} />
      </div>

      {mode === "graph" ? (
        <RawGraphExplorer />
      ) : mode === "rag" ? (
        <SimpleRagView />
      ) : mode === "explain" ? (
        <RagExplainView />
      ) : (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          gap: 16,
          background: theme.surface.base,
        }}>
          <div style={{
            fontSize: sz(24),
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 600,
            color: theme.text.primary,
          }}>
            Hello, World
          </div>
          <div style={{
            fontSize: sz(12),
            fontFamily: "'IBM Plex Mono', monospace",
            color: theme.text.hint,
          }}>
            Plugin loaded successfully
          </div>
        </div>
      )}
    </div>
  );
}
