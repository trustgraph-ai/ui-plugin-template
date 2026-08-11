import { useState } from "react";
import { RawGraphExplorer, SimpleRagView, RagExplainView, useTheme, Button } from "@trustgraph/trustkit";

type ViewMode = "hello" | "graph" | "rag" | "explain";

export function TemplateExplorer() {
  const { theme, sz } = useTheme();
  const [mode, setMode] = useState<ViewMode>("hello");

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
          <Button size="sm" active={mode === "hello"} onClick={() => setMode("hello")}>Hello</Button>
          <Button size="sm" active={mode === "graph"} onClick={() => setMode("graph")}>Graph</Button>
          <Button size="sm" active={mode === "rag"} onClick={() => setMode("rag")}>RAG</Button>
          <Button size="sm" active={mode === "explain"} onClick={() => setMode("explain")}>Explain</Button>
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
            fontFamily: theme.font.sans,
            fontWeight: 600,
            color: theme.text.primary,
          }}>
            Hello, World
          </div>
          <div style={{
            fontSize: sz(12),
            fontFamily: theme.font.mono,
            color: theme.text.hint,
          }}>
            Plugin loaded successfully
          </div>
        </div>
      )}
    </div>
  );
}
