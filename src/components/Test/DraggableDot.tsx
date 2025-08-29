import { motion } from "motion/react";
import { useRef } from "react";

type Props = {
  caption?: string;
};

const DraggableDot = (props: Props) => {
  const boundingBox = useRef(null);

  return (
    <div className="my-8 flex flex-col items-center justify-center">
      <div
        ref={boundingBox}
        className="bg-background border-border relative h-72 w-full overflow-hidden rounded-lg border"
      >
        <motion.div
          drag
          dragElastic={0.2}
          dragConstraints={boundingBox}
          initial={{ scale: 0, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="absolute h-12 w-12 cursor-grab rounded-full bg-yellow-300 active:cursor-grabbing"
        />
      </div>
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </div>
  );
};

export default DraggableDot;
