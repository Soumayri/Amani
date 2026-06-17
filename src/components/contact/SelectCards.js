import { useTranslation } from "react-i18next";

/**
 * Elegant single-select "card" group — replaces administrative-style
 * checkboxes/radio inputs with a row of pill/card buttons.
 */
function SelectCards({ name, options, value, onChange }) {
  const { t } = useTranslation();

  return (
    <div className="select-cards" role="radiogroup" aria-label={name}>
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            className={`select-card${selected ? " select-card--selected" : ""}`}
            onClick={() => onChange(name, option)}
          >
            {t(option)}
          </button>
        );
      })}
    </div>
  );
}

export default SelectCards;
