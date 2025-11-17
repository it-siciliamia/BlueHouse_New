import { useEffect, useState } from "react";

import { translateMyText } from "./index";
import { useLanguage } from "./LanguageContext";

/**
 * Returns a translated version of the provided text, defaulting to the source
 * string until the translation resolves.
 */
export default function useTranslateString(sourceText) {
  const { languageIndex } = useLanguage() || { languageIndex: 0 };
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
        const result = await translateMyText(sourceText, languageIndex);
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
  }, [sourceText, languageIndex]);

  return translated;
}
