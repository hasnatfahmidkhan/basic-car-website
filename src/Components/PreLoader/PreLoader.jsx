import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PreLoader = () => {
  const items = [1, 2, 3, 4, 5];
  const [newItems, setNewItems] = useState(items);
  const removeItem = (rmItem) => {
    const updateItems = newItems.filter((item) => item !== rmItem);
    setNewItems(updateItems);
  };
  return (
    <div className="flex items-center  justify-center gap-10 h-screen bg-base-200">
      <motion.ul className="space-y-2">
        <AnimatePresence>
          {newItems.map((item) => (
            <motion.li
              layout
            //   initial={{
            //     opacity: 0,
            //   }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              onClick={() => removeItem(item)}
              key={item}
              className="bg-blue-500 text-white px-10 py-2 rounded-sm cursor-pointer"
            >
              item {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default PreLoader;
