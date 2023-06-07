import { twMerge } from "tailwind-merge";

const ThemeBar = ({ theme, setTheme, themeList }) => {
  return (
    <section
      className={twMerge(
        "grid w-2/3 mx-auto rounded-2xl overflow-hidden",
        "grid-cols-2 md:grid-cols-4"
      )}
    >
      {themeList.map((item) => (
        <button
          key={item}
          className={twMerge(
            "btn rounded-none",
            item === theme && "btn-primary"
          )}
          onClick={() => setTheme(item)}
        >
          {item}
        </button>
      ))}
    </section>
  );
};

export default ThemeBar;
