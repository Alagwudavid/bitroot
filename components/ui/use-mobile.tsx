import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== "undefined"
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false // SSR fallback
  );

  React.useEffect(() => {
    setMounted(true);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    window.addEventListener("resize", onChange);
    // Set initial value again in case of hydration mismatch
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => window.removeEventListener("resize", onChange);
  }, []);

  // Return undefined during SSR or before mount to prevent hydration mismatch
  if (!mounted) {
    return undefined;
  }

  return isMobile;
}
