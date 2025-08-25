import { useMotionValue, useSpring, useTransform } from "framer-motion";

// This could be a custom hook if used for setting up motion values and providing event handlers
export const useCardTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mousex = e.clientX - rect.left;
    const mousey = e.clientY - rect.top;

    const xPercent = mousex/width - 0.5;
    const yPercent = mousey/height - 0.5;

    x.set(xPercent);
    y.set(yPercent);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  // Return whatever values or functions should be available to the component
  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};
