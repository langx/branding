/**
 * Right-to-left copy on goldie's canvas.
 *
 * goldie and feature.mjs set type on a canvas whose base direction is
 * left-to-right. The bidi algorithm gives a neutral character - a full stop,
 * a comma, a dash - the direction of the strong letters on both sides of it,
 * so between two Arabic words it reads right to left; but at the end of a
 * line one side is the paragraph's own direction, and the full stop is drawn
 * at the right-hand end, where the line starts. Wrapping makes any
 * punctuation mark the last one on its line, not only the final one.
 *
 * An invisible U+200F (RIGHT-TO-LEFT MARK) after each mark gives it a strong
 * right-to-left neighbour wherever the line breaks, so it stays at the end
 * the reader reaches last. Mid-line the mark changes nothing.
 */
export const RTL = new Set(["ar"]);

const RLM = "‏";

/** The copy for `locale`, with each punctuation mark anchored if the locale is right to left. */
export const anchorRtl = (text, locale) =>
  RTL.has(locale) && typeof text === "string" ? text.replace(/([\p{P}\p{S}])(?!‏)/gu, `$1${RLM}`) : text;
