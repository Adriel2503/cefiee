import type { CSSProperties } from "react";

type FlowVars = CSSProperties & {
  "--circuit-dur"?: string;
  "--circuit-delay"?: string;
};

const flow = (color: string, dur: string, delay = "0s"): FlowVars => ({
  color,
  "--circuit-dur": dur,
  "--circuit-delay": delay,
});

export function HeroBg() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dot grid */}
      <div className="hero-bg-dots absolute inset-0" />

      {/* Circuit board */}
      <svg
        viewBox="0 0 1280 320"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        {/* Static traces (base layer) */}
        <g fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="1">
          {/* Animated paths (will host signals) */}
          <path d="M 0 70 H 240 V 35 H 540 V 90 H 760" />
          <path d="M 1280 200 H 980 V 160 H 720" />
          <path d="M 0 270 H 200 V 220 H 380 V 285" />
          <path d="M 1130 0 V 130 H 1230 V 320" />
          <path d="M 480 285 H 720 V 245 H 900" />
          <path d="M 600 105 H 820 V 50 H 1080" />
          <path d="M 0 25 H 120 V 100" />
          {/* Static-only (no signal — adds PCB density) */}
          <path d="M 380 65 V 25 H 480" />
          <path d="M 320 320 V 280 H 480" />
          <path d="M 1080 320 V 280 H 1180" />
          <path d="M 760 90 V 130 H 880" />
        </g>

        {/* Junction dots */}
        <g fill="white" fillOpacity="0.18">
          <circle cx="240"  cy="70"  r="2" />
          <circle cx="240"  cy="35"  r="2" />
          <circle cx="540"  cy="35"  r="2" />
          <circle cx="540"  cy="90"  r="2" />
          <circle cx="980"  cy="200" r="2" />
          <circle cx="980"  cy="160" r="2" />
          <circle cx="200"  cy="270" r="2" />
          <circle cx="200"  cy="220" r="2" />
          <circle cx="380"  cy="220" r="2" />
          <circle cx="380"  cy="285" r="2" />
          <circle cx="1130" cy="130" r="2" />
          <circle cx="1230" cy="130" r="2" />
          <circle cx="720"  cy="285" r="2" />
          <circle cx="720"  cy="245" r="2" />
          <circle cx="820"  cy="105" r="2" />
          <circle cx="820"  cy="50"  r="2" />
          <circle cx="120"  cy="25"  r="2" />
          <circle cx="120"  cy="100" r="2" />
          <circle cx="380"  cy="65"  r="2" />
          <circle cx="380"  cy="25"  r="2" />
          <circle cx="320"  cy="280" r="2" />
          <circle cx="1080" cy="280" r="2" />
          <circle cx="760"  cy="130" r="2" />
        </g>

        {/* Animated signal — gold (eléctrica) */}
        <path d="M 0 70 H 240 V 35 H 540 V 90 H 760"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={flow("#E8A500", "6s")} />
        {/* Animated signal — electronic blue */}
        <path d="M 1280 200 H 980 V 160 H 720"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={flow("#60A5FA", "8s", "1.2s")} />
        {/* Animated signal — cyber green */}
        <path d="M 0 270 H 200 V 220 H 380 V 285"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={flow("#34D399", "7s", "2.5s")} />
        {/* Animated signal — gold vertical (right) */}
        <path d="M 1130 0 V 130 H 1230 V 320"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={flow("#E8A500", "9s", "3.8s")} />
        {/* Animated signal — telecom red */}
        <path d="M 480 285 H 720 V 245 H 900"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={flow("#FCA5A5", "5.5s", "0.8s")} />
        {/* Animated signal — biomedical purple */}
        <path d="M 600 105 H 820 V 50 H 1080"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={flow("#C4B5FD", "7.5s", "2s")} />
        {/* Animated signal — yellow (eléctrica light) */}
        <path d="M 0 25 H 120 V 100"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={flow("#FCD34D", "4.5s", "4s")} />

        {/* Pulse glows at signal endpoints */}
        <circle cx="760"  cy="90"  r="6" fill="currentColor"
          className="circuit-node" style={flow("#E8A500", "6s")} />
        <circle cx="720"  cy="160" r="6" fill="currentColor"
          className="circuit-node" style={flow("#60A5FA", "8s", "1.2s")} />
        <circle cx="380"  cy="285" r="6" fill="currentColor"
          className="circuit-node" style={flow("#34D399", "7s", "2.5s")} />
        <circle cx="1230" cy="320" r="6" fill="currentColor"
          className="circuit-node" style={flow("#E8A500", "9s", "3.8s")} />
        <circle cx="900"  cy="245" r="6" fill="currentColor"
          className="circuit-node" style={flow("#FCA5A5", "5.5s", "0.8s")} />
        <circle cx="1080" cy="50"  r="6" fill="currentColor"
          className="circuit-node" style={flow("#C4B5FD", "7.5s", "2s")} />
        <circle cx="120"  cy="100" r="6" fill="currentColor"
          className="circuit-node" style={flow("#FCD34D", "4.5s", "4s")} />
      </svg>

      {/* Gold ambient glow */}
      <div className="hero-bg-glow absolute -bottom-32 -right-32" />
    </div>
  );
}
