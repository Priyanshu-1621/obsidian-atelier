import { useEffect, useState } from "react";

export function CursorInteraction() {
  const [state, setState] = useState({ x: -100, y: -100, active: false, visible: false });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: MouseEvent) => setState((value) => ({ ...value, x: event.clientX, y: event.clientY, visible: true }));
    const over = (event: MouseEvent) => { const target = event.target as HTMLElement; setState((value) => ({ ...value, active: Boolean(target.closest("a, button, [data-cursor-view]")) })); };
    const leave = () => setState((value) => ({ ...value, visible: false }));
    window.addEventListener("mousemove", move); document.addEventListener("mouseover", over); document.documentElement.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); document.documentElement.removeEventListener("mouseleave", leave); };
  }, []);
  return <div className={`custom-cursor ${state.active ? "is-active" : ""} ${state.visible ? "is-visible" : ""}`} style={{ transform: `translate3d(${state.x}px, ${state.y}px, 0)` }}><span>{state.active ? "VIEW ↗" : ""}</span></div>;
}
