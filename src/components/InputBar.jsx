import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const InputBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/drink/" + input);
    setInput("");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setIsExpanded(false);
    }
  }, [location]);

  return (
    <section className="flex flex-col items-center">
      <p
        className="p-2 underline cursor-pointer hover:opacity-80"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        I know a drink!
      </p>

      <div
        className={twMerge(
          "grid grid-rows-[0fr] transition-all",
          isExpanded && "grid-rows-[1fr]"
        )}
      >
        <form onSubmit={handleSubmit} className="overflow-hidden join">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary join-item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary join-item">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default InputBar;
