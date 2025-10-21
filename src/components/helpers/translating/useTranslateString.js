import { useEffect, useState } from "react";
import { translateMyText } from "./index";

/**
 * Returns a translated version of the provided text, defaulting to the source
 * string until the translation resolves.
 */
export default function useTranslateString(sourceText) {
  const [translated, setTranslated] = useState(sourceText);

  useEffect(() => {
    let isCurrent = true;

    if (!sourceText) {
      setTranslated("");
      return () => {
        isCurrent = false;
      };
    }

    const runTranslation = async () => {
      try {
        const result = await translateMyText(sourceText);
        if (isCurrent && typeof result === "string") {
          setTranslated(result);
        }
      } catch {
        if (isCurrent) {
          setTranslated(sourceText);
        }
      }
    };

    runTranslation();

    return () => {
      isCurrent = false;
    };
  }, [sourceText]);

  return translated;
}
