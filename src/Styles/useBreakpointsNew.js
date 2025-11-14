import { useEffect, useMemo, useRef, useState } from "react";

const BREAKPOINTS = [
  { name: "desktop", query: "(min-width: 1280px)" },
  { name: "smallScreen", query: "(min-width: 960px)" },
  { name: "tablet", query: "(min-width: 600px)" },
];

const getBreakpointName = (matches) => matches.find((match) => match.matches)?.name ?? "mobile";

const useBreakpointsNew = () => {
  const isClient = typeof window !== "undefined";
  const mediaList = useRef([]);
  const listeners = useRef(new Map());
  const [breakpoint, setBreakpoint] = useState("mobile");

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }

    mediaList.current = BREAKPOINTS.map(({ name, query }) => {
      const mediaQueryList = window.matchMedia(query);
      return { name, mediaQueryList };
    });

    // Derive the current breakpoint whenever a media query toggles.
    const updateBreakpoint = () => {
      const matches = mediaList.current.map(({ name, mediaQueryList }) => ({
        name,
        matches: mediaQueryList.matches,
      }));
      const nextBreakpoint = getBreakpointName(matches);
      setBreakpoint((prev) => (prev === nextBreakpoint ? prev : nextBreakpoint));
    };

    updateBreakpoint();

    mediaList.current.forEach(({ mediaQueryList }) => {
      const listener = () => updateBreakpoint();
      listeners.current.set(mediaQueryList, listener);
      mediaQueryList.addEventListener("change", listener);
      if (mediaQueryList.matches) {
        updateBreakpoint();
      }
    });

    // Clean up listeners so the hook behaves well across mounts.
    return () => {
      listeners.current.forEach((listener, mediaQueryList) => {
        mediaQueryList.removeEventListener("change", listener);
      });
      listeners.current.clear();
    };
  }, [isClient]);

  return useMemo(
    () => ({
      breakpoint,
      isMobile: breakpoint === "mobile",
      isTablet: breakpoint === "tablet",
      isSmallScreen: breakpoint === "smallScreen",
      isDesktop: breakpoint === "desktop",
    }),
    [breakpoint]
  );
};

export default useBreakpointsNew;
