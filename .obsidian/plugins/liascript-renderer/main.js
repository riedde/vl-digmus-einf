var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LiaScriptRenderer
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var INLINE_PATTERNS = [
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
    }
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
    }
  },
  // {{|>}} oder {|>} → TTS-Playback-Icon
  {
    regex: /\{+\|>\}+/g,
    createElement: () => {
      const span = document.createElement("span");
      span.className = "lia-tts-marker";
      span.title = "Text-to-Speech (LiaScript)";
      span.textContent = "\u{1F50A}";
      return span;
    }
  },
  // --{{Sprechnotiz}}-- → eingeklappter Notiz-Block
  // (muss vor {{N}} kommen, weil es auch {{ enthält)
  {
    regex: /--\{\{([^}]*)\}\}--/g,
    createElement: (m) => {
      const details = document.createElement("details");
      details.className = "lia-speaker-note";
      const summary = document.createElement("summary");
      summary.textContent = `\u{1F399} ${m[1] || "Sprechnotiz"}`;
      details.appendChild(summary);
      return details;
    }
  },
  // {{N}} / {{N-M}} / {{N-}} → Animationsschritt-Badge
  {
    regex: /\{\{(\d+(?:-\d*)?)\}\}/g,
    createElement: (m) => {
      const badge = document.createElement("span");
      badge.className = "lia-step-badge";
      badge.title = `LiaScript Animation Schritt ${m[1]}`;
      badge.textContent = `\u25B6 ${m[1]}`;
      return badge;
    }
  },
  // Multiple-Choice: [[X]] / [[ ]] (korrekte Antwort / Option)
  {
    regex: /\[\[(X|x| )\]\]/g,
    createElement: (m) => {
      const span = document.createElement("span");
      const correct = m[1].toLowerCase() === "x";
      span.className = "lia-quiz-mc" + (correct ? " lia-quiz-correct" : "");
      span.title = correct ? "Korrekte Antwort" : "Falsche Antwort";
      span.textContent = correct ? "\u2611" : "\u2610";
      return span;
    }
  },
  // Single-Choice: [(X)] / [( )]
  {
    regex: /\[\((X|x| )\)\]/g,
    createElement: (m) => {
      const span = document.createElement("span");
      const correct = m[1].toLowerCase() === "x";
      span.className = "lia-quiz-sc" + (correct ? " lia-quiz-correct" : "");
      span.title = correct ? "Korrekte Antwort" : "Option";
      span.textContent = correct ? "\u29BF" : "\u25CB";
      return span;
    }
  }
];
function parseLiaFrontMatter(raw) {
  const match = raw.match(/<!--([\s\S]*?)-->/);
  if (!match) return null;
  const result = /* @__PURE__ */ new Map();
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
var FRONT_MATTER_LABELS = {
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
  comment: "Beschreibung"
};
function buildFrontMatterBlock(meta) {
  var _a;
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
    const label = (_a = FRONT_MATTER_LABELS[key]) != null ? _a : key;
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
var LiaScriptRenderer = class extends import_obsidian.Plugin {
  async onload() {
    console.log("LiaScript Renderer: geladen");
    this.addLiaStyle();
    this.registerMarkdownPostProcessor(
      (el, ctx) => {
        this.processElement(el, ctx);
      }
    );
  }
  onunload() {
    var _a;
    (_a = document.getElementById("liascript-style")) == null ? void 0 : _a.remove();
    console.log("LiaScript Renderer: entladen");
  }
  // ─── Haupt-Prozessor ──────────────────────────────────────────────────────
  processElement(el, ctx) {
    this.processFrontMatter(el, ctx);
    this.processCodeBlocks(el);
    el.querySelectorAll("p, li, td, th, blockquote").forEach(
      (node) => this.applyInlinePatterns(node)
    );
  }
  // ─── Front-Matter (synchron via getSectionInfo) ───────────────────────────
  processFrontMatter(el, ctx) {
    const info = ctx.getSectionInfo(el);
    if (!info) return;
    if (info.lineStart !== 0) return;
    const lines = info.text.split("\n");
    const sectionRaw = lines.slice(info.lineStart, info.lineEnd + 1).join("\n").trim();
    if (!sectionRaw.startsWith("<!--")) return;
    const meta = parseLiaFrontMatter(sectionRaw);
    if (!meta) return;
    while (el.firstChild) el.removeChild(el.firstChild);
    el.appendChild(buildFrontMatterBlock(meta));
  }
  // -------------------------------------------------------------------------
  // Code-Blöcke (eingerückte LiaScript-Marker wie {{N}})
  // -------------------------------------------------------------------------
  processCodeBlocks(el) {
    el.querySelectorAll("pre > code").forEach((code) => {
      var _a, _b, _c;
      const text = (_a = code.textContent) != null ? _a : "";
      const trimmed = text.trim();
      const stepOnly = trimmed.match(/^\{\{(\d+(?:-\d*)?)\}\}$/);
      if (stepOnly) {
        const badge = document.createElement("div");
        badge.className = "lia-step-block";
        badge.innerHTML = `<span class="lia-step-badge">\u25B6 Schritt ${stepOnly[1]}</span>`;
        (_b = code.closest("pre")) == null ? void 0 : _b.replaceWith(badge);
        return;
      }
      if (/^\{+\|>\}+$/.test(trimmed)) {
        const icon = document.createElement("span");
        icon.className = "lia-tts-marker";
        icon.title = "Text-to-Speech (LiaScript)";
        icon.textContent = "\u{1F50A}";
        (_c = code.closest("pre")) == null ? void 0 : _c.replaceWith(icon);
        return;
      }
    });
  }
  // -------------------------------------------------------------------------
  // Inline-Muster anwenden
  // -------------------------------------------------------------------------
  applyInlinePatterns(container) {
    for (const pat of INLINE_PATTERNS) {
      this.replacePatternInContainer(container, pat);
    }
  }
  replacePatternInContainer(container, pat) {
    var _a, _b, _c;
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    for (const textNode of textNodes) {
      const text = (_a = textNode.textContent) != null ? _a : "";
      pat.regex.lastIndex = 0;
      if (!pat.regex.test(text)) continue;
      pat.regex.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match;
      while ((match = pat.regex.exec(text)) !== null) {
        const matchIndex = (_b = match.index) != null ? _b : 0;
        if (matchIndex > lastIndex) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, matchIndex)));
        }
        const replaced = pat.createElement(match);
        fragment.appendChild(replaced != null ? replaced : document.createTextNode(match[0]));
        lastIndex = pat.regex.lastIndex;
      }
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }
      (_c = textNode.parentNode) == null ? void 0 : _c.replaceChild(fragment, textNode);
    }
  }
  // -------------------------------------------------------------------------
  // Styles
  // -------------------------------------------------------------------------
  addLiaStyle() {
    if (document.getElementById("liascript-style")) return;
    const style = document.createElement("style");
    style.id = "liascript-style";
    style.textContent = `
      /* \u2500\u2500 Front Matter \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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

      /* \u2500\u2500 Animationsschritt-Badge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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

      /* \u2500\u2500 TTS-Marker \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      .lia-tts-marker {
        cursor: default;
        margin-right: 0.3em;
      }

      /* \u2500\u2500 Sprechnotizen \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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

      /* \u2500\u2500 Quiz-Optionen \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      .lia-quiz-mc,
      .lia-quiz-sc {
        font-size: 1.15em;
        margin-right: 0.3em;
        cursor: default;
      }
      .lia-quiz-correct {
        color: var(--color-green);
      }

      /* \u2500\u2500 Medien \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      audio, video {
        display: block;
        margin: 0.5em 0;
        max-width: 100%;
      }
    `;
    document.head.appendChild(style);
  }
};
