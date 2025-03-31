
import React, { useState } from "react";

export default function QuoteGenerator() {
  const [service, setService] = useState("Assignment");
  const [level, setLevel] = useState("Undergraduate");
  const [wordCount, setWordCount] = useState(1000);
  const [urgency, setUrgency] = useState("7+ Days");
  const [extras, setExtras] = useState({
    turnitin: false,
    slides: false,
    references: false,
  });

  const basePrices = {
    Diploma: 0.03,
    Undergraduate: 0.04,
    Masters: 0.05,
    PhD: 0.06,
  };

  const urgencyMultiplier = {
    "7+ Days": 1.0,
    "4-6 Days": 1.2,
    "2-3 Days": 1.5,
    "24 Hours": 2.0,
  };

  const extraPrices = {
    turnitin: 5,
    slides: 10,
    references: 3,
  };

  const calculateQuote = () => {
    let base = basePrices[level] * wordCount * urgencyMultiplier[urgency];
    let extrasTotal = Object.entries(extras)
      .filter(([key, value]) => value)
      .reduce((sum, [key]) => sum + extraPrices[key], 0);
    return (base + extrasTotal).toFixed(2);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "Arial", border: "1px solid #eee", borderRadius: "12px" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src="/logo.png" alt="Logo" style={{ height: "80px" }} />
        <h1 style={{ fontSize: "28px", marginTop: "10px" }}>Get a Quick Quote</h1>
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        <label>
          Service:
          <select value={service} onChange={e => setService(e.target.value)} style={{ width: "100%", padding: "8px" }}>
            <option>Assignment</option>
            <option>Final Year Project</option>
            <option>Dissertation</option>
            <option>Case Study</option>
          </select>
        </label>

        <label>
          Academic Level:
          <select value={level} onChange={e => setLevel(e.target.value)} style={{ width: "100%", padding: "8px" }}>
            <option>Diploma</option>
            <option>Undergraduate</option>
            <option>Masters</option>
            <option>PhD</option>
          </select>
        </label>

        <label>
          Word Count:
          <input type="number" value={wordCount} onChange={e => setWordCount(Number(e.target.value))} style={{ width: "100%", padding: "8px" }} />
        </label>

        <label>
          Urgency:
          <select value={urgency} onChange={e => setUrgency(e.target.value)} style={{ width: "100%", padding: "8px" }}>
            <option>7+ Days</option>
            <option>4-6 Days</option>
            <option>2-3 Days</option>
            <option>24 Hours</option>
          </select>
        </label>

        <fieldset>
          <legend style={{ fontWeight: "bold" }}>Extras:</legend>
          <label><input type="checkbox" checked={extras.turnitin} onChange={e => setExtras({ ...extras, turnitin: e.target.checked })} /> Turnitin Report (+£5)</label><br />
          <label><input type="checkbox" checked={extras.slides} onChange={e => setExtras({ ...extras, slides: e.target.checked })} /> PowerPoint Slides (+£10)</label><br />
          <label><input type="checkbox" checked={extras.references} onChange={e => setExtras({ ...extras, references: e.target.checked })} /> Reference List (+£3)</label>
        </fieldset>

        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px", textAlign: "center" }}>
          Estimated Quote: £{calculateQuote()}
        </div>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <a href="https://wa.me/447729563785" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: "#d00000", color: "#fff", textDecoration: "none", borderRadius: "8px" }}>
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
