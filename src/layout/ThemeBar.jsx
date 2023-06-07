import { twMerge } from "tailwind-merge";

const ThemeBar = ({ theme, setTheme, themeList }) => {
  return (
    <section
      className={twMerge(
        "flex flex-col sm:flex-row justify-center",
        "join join-vertical sm:join-horizontal",
        "w-32 mx-auto sm:w-auto"
      )}
    >
      {themeList.map((item) => (
        <button
          key={item}
          className={twMerge("btn join-item", item === theme && "btn-primary")}
          onClick={() => setTheme(item)}
        >
          {item}
        </button>
      ))}
    </section>
  );
};

export default ThemeBar;
