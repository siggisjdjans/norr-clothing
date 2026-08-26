export default function GradientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob animate-blob"
        style={{
          top: "-10%",
          left: "-5%",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, #c4b5fd 0%, transparent 70%)",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          top: "10%",
          right: "-8%",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, #fbcfe8 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "560px",
          height: "560px",
          background: "radial-gradient(circle, #fed7aa 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
