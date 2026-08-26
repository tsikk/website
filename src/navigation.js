import { createContext, useContext } from "react";

export const NavigationContext = createContext({
  path: "/",
  navigate: () => {},
});

export function useNavigation() {
  return useContext(NavigationContext);
}

export function Link({ to, className, children, onClick, ...props }) {
  const { path, navigate } = useNavigation();
  const isInternal = to.startsWith("/") && !to.startsWith("/#");
  const isActive = isInternal && (to === "/" ? path === "/" : path === to);
  const resolvedClass = typeof className === "function" ? className({ isActive }) : className;

  return (
    <a
      href={to}
      className={resolvedClass}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }
        if (!isInternal) {
          return;
        }
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.altKey ||
          event.shiftKey ||
          event.button !== 0
        ) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
