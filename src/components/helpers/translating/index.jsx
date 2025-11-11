import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import languagesAndCodes from "./languagesAndCodes.json";
import {
  Button,
  Menu,
  MenuItem,
  IconButton,
  TextField,
  Typography,
  Fade,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Select from "../../../images/select.svg";
import translate from "translate";
import useStyles from "./translateStyles.js";
import { useLanguage } from "./LanguageContext.jsx";

translate.key = "AIzaSyA-LWuIlquldSBDqQWlgr3nJE8h3AMTDCE";

export default function TranslateMe({ scroll }) {
  const {
    dropDownButton,
    menu,
    searchInput,
    navButtons,
    pageInfo,
    searchRow,
    closeIcon,
  } = useStyles();

  const { languageIndex, setLanguageIndex } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const pageSize = 10;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearch("");
    setPage(0);
  };

  const handleChange = (index) => {
    scroll();
    // Update LanguageContext (which also saves to localStorage)
    setLanguageIndex(index);
    handleClose();
  };

  const filtered = languagesAndCodes.languages.filter((item) =>
    item.lang.toLowerCase().includes(search.toLowerCase())
  );
  const currentLanguages = filtered.slice(
    page * pageSize,
    (page + 1) * pageSize
  );
  const pageCount = Math.ceil(filtered.length / pageSize);

  return (
    <div>
      <Button
        className={dropDownButton}
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {languageIndex === 0
          ? "Select Language"
          : languagesAndCodes.languages[languageIndex].lang}
        <img alt="down arrow" src={Select} />
      </Button>

      <Menu
        className={menu}
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={300}
      >
        <div className={searchRow}>
          <TextField
            placeholder="Search language"
            variant="outlined"
            size="small"
            className={searchInput}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
          />
          <IconButton size="small" onClick={handleClose}>
            <ExpandLessIcon className={closeIcon} />
          </IconButton>
        </div>

        {currentLanguages.map(({ lang }, index) => (
          <MenuItem
            key={index + page * pageSize}
            onClick={() =>
              handleChange(filtered.indexOf(currentLanguages[index]))
            }
          >
            {lang}
          </MenuItem>
        ))}

        <div className={navButtons}>
          <IconButton
            size="small"
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>

          <Typography className={pageInfo}>
            {page + 1} / {pageCount || 1}
          </Typography>

          <IconButton
            size="small"
            onClick={() =>
              setPage((p) => ((p + 1) * pageSize < filtered.length ? p + 1 : p))
            }
            disabled={(page + 1) * pageSize >= filtered.length}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
      </Menu>
    </div>
  );
}

TranslateMe.propTypes = {
  scroll: PropTypes.func.isRequired,
};

export async function translateMyText(text = "", languageIndex = 0) {
  const { languages } = languagesAndCodes;
  const lang = languages[languageIndex];

  if (!lang) {
    console.warn(`Language index ${languageIndex} not found`);
    return text;
  }

  try {
    const result = await translate(text, lang.code);
    return result;
  } catch (err) {
    if (err.name !== "AbortError") {
      console.error("Translation error:", err);
    }
    return text;
  }
}

export function WithTransLate({ text, returnRaw = false }) {
  const [translatedText, setTranslatedText] = useState(text);
  const { languageIndex } = useLanguage() || { languageIndex: 0 };

  useEffect(() => {
    const abortController = new AbortController();

    translateMyText(text, languageIndex)
      .then((res) => {
        // Only update if component hasn't unmounted
        if (!abortController.signal.aborted) {
          setTranslatedText(res);
        }
      })
      .catch((err) => {
        // Handle AbortError gracefully
        if (err.name !== "AbortError" && !abortController.signal.aborted) {
          console.error("Translation failed:", err);
          setTranslatedText(text); // Fallback to original text
        }
      });

    // Cleanup: cancel request if component unmounts or dependencies change
    return () => {
      abortController.abort();
    };
  }, [text, languageIndex]); // Re-translate when text or language changes

  // Return raw string if requested, otherwise wrap in fragment for JSX
  return returnRaw ? translatedText : <>{translatedText}</>;
}

WithTransLate.propTypes = {
  text: PropTypes.string.isRequired,
  returnRaw: PropTypes.bool,
};
