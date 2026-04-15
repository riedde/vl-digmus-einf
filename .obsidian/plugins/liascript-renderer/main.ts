import { Plugin, MarkdownPostProcessorContext } from "obsidian";

// ---------------------------------------------------------------------------
// Typen
// ---------------------------------------------------------------------------

interface LiaPattern {
  regex: RegExp;
  createElement: (match: RegExpMatchArray) => HTMLElement | null;
}

// ---------------------------------------------------------------------------
// Inline-Muster (werden in Textknotenersetzung angewendet)
// Reihenfolge: spezifischere zuerst
// ---------------------------------------------------------------------------

const INLINE_PATTERNS: LiaPattern[] = [
  // !?[label](url) → <video>
  {
    regex: /!\?\[([^\]]*)\]\(([^)]+)\)/g,
    createElement: (m) => {
      const v = document.createElement("video");
      v.controls = true;
      v.src = m[2];
      v.title = m[1];
      v.style.maxWidth = "100%";
      return v;
    },
  },
  // ?[label](url) → <audio>
  {
    regex: /\?\[([^\]]*)\]\(([^)]+)\)/g,
    createElement: (m) => {
      const a = document.createElement("audio");
      a.controls = true;
      a.src = m[2];
      a.title = m[1];
      return a;
    },
  },
  // {{|>}} oder {|>} → TTS-Playback-Icon
  {
    regex: /\{+\|>\}+/g,
    createElement: () => {
      const span = document.createElement("span");
      span.className = "lia-tts-marker";
      span.title = "Text-to-Speech (LiaScript)";
      span.textContent = "🔊";
      return span;
    },
  },
  // --{{Sprechnotiz}}-- → eingeklappter Notiz-Block
  // (muss vor {{N}} kommen, weil es auch {{ enthält)
  {
    regex: /--\{\{([^}]*)\}\}--/g,
    createElement: (m) => {
      const details = document.createElement("details");
      details.className = "lia-speaker-note";
      const summary = document.createElement("summary");
      summary.textContent = `🎙 ${m[1] || "Sprechnotiz"}`;
      details.appendChild(summary);
      return details;
    },
  },
  // {{N}} / {{N-M}} / {{N-}} → Animationsschritt-Badge
  {
    regex: /\{\{(\d+(?:-\d*)?)\}\}/g,
    createElement: (m) => {
      const badge = document.createElement("span");
      badge.className = "lia-step-badge";
      badge.title = `LiaScript Animation Schritt ${m[1]}`;
      badge.textContent = `▶ ${m[1]}`;
      return badge;
    },
  },
  // Multiple-Choice: [[X]] / [[ ]] (korrekte Antwort / Option)
  {
    regex: /\[\[(X|x| )\]\]/g,
    createElement: (m) => {
      const span = document.createElement("span");
      const correct = m[1].toLowerCase() === "x";
      span.className = "lia-quiz-mc" + (correct ? " lia-quiz-correct" : "");
      span.title = correct ? "Korrekte Antwort" : "Falsche Antwort";
      span.textContent = correct ? "☑" : "☐";
      return span;
    },
  },
  // Single-Choice: [(X)] / [( )]
  {
    regex: /\[\((X|x| )\)\]/g,
    createElement: (m) => {
      const span = document.createElement("span");
      const correct = m[1].toLowerCase() === "x";
      span.className = "lia-quiz-sc" + (correct ? " lia-quiz-correct" : "");
      span.title = correct ? "Korrekte Antwort" : "Option";
      span.textContent = correct ? "⦿" : "○";
      return span;
    },
  },
];

// ---------------------------------------------------------------------------
// Hilfsfunktion: LiaScript-Front-Matter-Kommentar parsen
// ---------------------------------------------------------------------------

function parseLiaFrontMatter(raw: string): Map<string, string[]> | null {
  // Akzeptiert sowohl den vollständigen Dokumenttext als auch nur den Comment-Block
  const match = raw.match(/<!--([\s\S]*?)-->/);
  if (!match) return null;

  const result = new Map<string, string[]>();
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^\s*([\w.@-]+)\s*:\s*(.+)$/);
    if (kv) {
      const key = kv[1].trim();
      const val = kv[2].trim();
      const existing = result.get(key);
      if (existing) existing.push(val);
      else result.set(key, [val]);
    }
  }
  return result.size > 0 ? result : null;
}

const FRONT_MATTER_LABELS: Record<string, string> = {
  author: "Autor",
  email: "E-Mail",
  version: "Version",
  language: "Sprache",
  narrator: "Narrator",
  tags: "Tags",
  import: "Import",
  link: "Link",
  font: "Font",
  date: "Datum",
  comment: "Beschreibung",
};

function buildFrontMatterBlock(meta: Map<string, string[]>): HTMLElement {
  const wrap = document.createElement("div");
  wrap.className = "lia-frontmatter";

  const header = document.createElement("div");
  header.className = "lia-frontmatter-header";
  const badge = document.createElement("span");
  badge.className = "lia-frontmatter-badge";
  badge.textContent = "LiaScript";
  const titleSpan = document.createElement("span");
  titleSpan.textContent = " Kurs-Metadaten";
  header.appendChild(badge);
  header.appendChild(titleSpan);
  wrap.appendChild(header);

  const table = document.createElement("table");
  table.className = "lia-frontmatter-table";
  const tbody = document.createElement("tbody");

  for (const [key, values] of meta.entries()) {
    const label = FRONT_MATTER_LABELS[key] ?? key;
    const joined = values.join(", ");
    const tr = document.createElement("tr");
    const keyTd = document.createElement("td");
    keyTd.className = "lia-fm-key";
    keyTd.textContent = label;
    const valTd = document.createElement("td");
    valTd.className = "lia-fm-val";
    if (key === "email") {
      const a = document.createElement("a");
      a.href = `mailto:${joined}`;
      a.textContent = joined;
      valTd.appendChild(a);
    } else {
      valTd.textContent = joined;
    }
    tr.appendChild(keyTd);
    tr.appendChild(valTd);
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

// ---------------------------------------------------------------------------
// Plugin
// ---------------------------------------------------------------------------

export default class LiaScriptRenderer extends Plugin {
  async onload() {
    console.log("LiaScript Renderer: geladen");
    this.addLiaStyle();
    this.registerMarkdownPostProcessor(
      (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
        this.processElement(el, ctx);
      }
    );
  }

  onunload() {
    document.getElementById("liascript-style")?.remove();
    console.log("LiaScript Renderer: entladen");
  }

  // ─── Haupt-Prozessor ──────────────────────────────────────────────────────

  private processElement(el: HTMLElement, ctx: MarkdownPostProcessorContext) {
    // 1. Preamble synchron über getSectionInfo – keine Race Condition
    this.processFrontMatter(el, ctx);

    // 2. <pre><code>-Blöcke mit LiaScript-Markern ersetzen
    this.processCodeBlocks(el);

    // 3. Inline-Muster in Textblöcken
    el.querySelectorAll<HTMLElement>("p, li, td, th, blockquote").forEach(
      (node) => this.applyInlinePatterns(node)
    );
  }

  // ─── Front-Matter (synchron via getSectionInfo) ───────────────────────────

  private processFrontMatter(
    el: HTMLElement,
    ctx: MarkdownPostProcessorContext
  ) {
    // getSectionInfo liefert den Rohtext synchron – kein async nötig
    const info = ctx.getSectionInfo(el);
    if (!info) return;

    // Nur die erste Sektion (lineStart === 0) kann eine Preamble enthalten
    if (info.lineStart !== 0) return;

    const lines = info.text.split("\n");
    const sectionRaw = lines
      .slice(info.lineStart, info.lineEnd + 1)
      .join("\n")
      .trim();

    if (!sectionRaw.startsWith("<!--")) return;

    const meta = parseLiaFrontMatter(sectionRaw);
    if (!meta) return;

    // Element leeren und Properties-Block einfügen
    while (el.firstChild) el.removeChild(el.firstChild);
    el.appendChild(buildFrontMatterBlock(meta));
  }

  // -------------------------------------------------------------------------
  // Code-Blöcke (eingerückte LiaScript-Marker wie {{N}})
  // -------------------------------------------------------------------------

  private processCodeBlocks(el: HTMLElement) {
    el.querySelectorAll<HTMLElement>("pre > code").forEach((code) => {
      const text = code.textContent ?? "";

      // Nur reine LiaScript-Marker-Blöcke transformieren (kein echter Code)
      // Erkennungsmerkmal: Der gesamte Block besteht nur aus LiaScript-Syntax
      const trimmed = text.trim();

      // Animationsschritt-Block: nur "{{N}}" oder "{{N-M}}"
      const stepOnly = trimmed.match(/^\{\{(\d+(?:-\d*)?)\}\}$/);
      if (stepOnly) {
        const badge = document.createElement("div");
        badge.className = "lia-step-block";
        badge.innerHTML = `<span class="lia-step-badge">▶ Schritt ${stepOnly[1]}</span>`;
        code.closest("pre")?.replaceWith(badge);
        return;
      }

      // TTS-Marker-Block: nur "{{|>}}"
      if (/^\{+\|>\}+$/.test(trimmed)) {
        const icon = document.createElement("span");
        icon.className = "lia-tts-marker";
        icon.title = "Text-to-Speech (LiaScript)";
        icon.textContent = "🔊";
        code.closest("pre")?.replaceWith(icon);
        return;
      }
    });
  }

  // -------------------------------------------------------------------------
  // Inline-Muster anwenden
  // -------------------------------------------------------------------------

  private applyInlinePatterns(container: HTMLElement) {
    for (const pat of INLINE_PATTERNS) {
      this.replacePatternInContainer(container, pat);
    }
  }

  private replacePatternInContainer(container: HTMLElement, pat: LiaPattern) {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) {
      textNodes.push(node as Text);
    }

    for (const textNode of textNodes) {
      const text = textNode.textContent ?? "";
      pat.regex.lastIndex = 0;
      if (!pat.regex.test(text)) continue;

      pat.regex.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match: RegExpMatchArray | null;

      while ((match = pat.regex.exec(text)) !== null) {
        const matchIndex = match.index ?? 0;
        if (matchIndex > lastIndex) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, matchIndex)));
        }
        const replaced = pat.createElement(match);
        fragment.appendChild(replaced ?? document.createTextNode(match[0]));
        lastIndex = pat.regex.lastIndex;
      }

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }

      textNode.parentNode?.replaceChild(fragment, textNode);
    }
  }

  // -------------------------------------------------------------------------
  // Styles
  // -------------------------------------------------------------------------

  private addLiaStyle() {
    if (document.getElementById("liascript-style")) return;
    const style = document.createElement("style");
    style.id = "liascript-style";
    style.textContent = `
      /* ── Front Matter ─────────────────────────────────────────────── */
      .lia-frontmatter {
        border: 1px solid var(--color-accent);
        border-radius: 6px;
        padding: 0.6em 1em;
        margin-bottom: 1.2em;
        background: var(--background-secondary);
        font-size: 0.88em;
      }
      .lia-frontmatter-header {
        font-weight: bold;
        margin-bottom: 0.4em;
        color: var(--color-accent);
      }
      .lia-frontmatter-logo {
        background: var(--color-accent);
        color: var(--background-primary);
        border-radius: 3px;
        padding: 0 4px;
        font-size: 0.85em;
        margin-right: 4px;
      }
      .lia-frontmatter-table {
        width: 100%;
        border-collapse: collapse;
        margin: 0;
      }
      .lia-frontmatter-table td {
        padding: 2px 6px;
        border: none;
        vertical-align: top;
      }
      .lia-fm-key {
        color: var(--text-muted);
        white-space: nowrap;
        width: 6em;
        font-weight: 500;
      }
      .lia-fm-val {
        color: var(--text-normal);
      }

      /* ── Animationsschritt-Badge ─────────────────────────────────── */
      .lia-step-badge {
        display: inline-block;
        background: var(--color-accent);
        color: var(--background-primary);
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.8em;
        font-weight: bold;
        vertical-align: middle;
        margin: 0 2px;
        opacity: 0.85;
      }
      .lia-step-block {
        margin: 0.3em 0;
      }

      /* ── TTS-Marker ──────────────────────────────────────────────── */
      .lia-tts-marker {
        cursor: default;
        margin-right: 0.3em;
      }

      /* ── Sprechnotizen ───────────────────────────────────────────── */
      details.lia-speaker-note {
        border-left: 3px solid var(--color-accent);
        padding: 0.3em 0.8em;
        margin: 0.5em 0;
        background: var(--background-secondary);
        border-radius: 4px;
        font-size: 0.9em;
        color: var(--text-muted);
      }
      details.lia-speaker-note summary {
        cursor: pointer;
        font-weight: bold;
        color: var(--color-accent);
      }

      /* ── Quiz-Optionen ───────────────────────────────────────────── */
      .lia-quiz-mc,
      .lia-quiz-sc {
        font-size: 1.15em;
        margin-right: 0.3em;
        cursor: default;
      }
      .lia-quiz-correct {
        color: var(--color-green);
      }

      /* ── Medien ──────────────────────────────────────────────────── */
      audio, video {
        display: block;
        margin: 0.5em 0;
        max-width: 100%;
      }
    `;
    document.head.appendChild(style);
  }
}
