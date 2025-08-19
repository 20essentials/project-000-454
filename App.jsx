import React from "react";
import ReactDOM from "react-dom/client";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  body: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    placeContent: "center",
    background: "linear-gradient(90deg, #ffc0d6, #e0709f)",
  },
  loader: {
    width: "720px",
    height: "160px",
    backgroundColor: "#525252",
    transformStyle: "preserve-3d",
    transformOrigin: "bottom",
    position: "relative",
    transform: "perspective(500px) rotateX(30deg)",
    "@media (width <= 1111px)": {
      zoom: "0.35",
    },
    "::before": {
      content: '""',
      position: "absolute",
      height: "12px",
      width: "100%",
      backgroundImage:
        "linear-gradient(to right, #fff 0%, #fff 70%, #525252 70%, #525252)",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundSize: "120px",
      animationName: {
        "0%": { backgroundPosition: "0px" },
        "100%": { backgroundPosition: "-120px" },
      },
      animationDuration: "0.4s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
    "::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "30px",
      bottom: "-30px",
      backgroundColor: "#525252",
      left: "0",
      transformOrigin: "top",
      transform: "perspective(500px) rotateX(-25deg)",
    },
  },
});

function App() {
  return (
    <div {...stylex.props(styles.body)}>
      <aside {...stylex.props(styles.loader)} />
    </div>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
