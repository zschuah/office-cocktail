import { twMerge } from "tailwind-merge";

const Card = ({ children, className }) => {
  return (
    <div
      className={twMerge("m-4 p-4 border rounded-2xl shadow-2xl", className)}
    >
      {children}
    </div>
  );
};

export default Card;
