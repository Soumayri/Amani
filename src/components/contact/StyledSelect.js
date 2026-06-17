import { useTranslation } from "react-i18next";

/**
 * Custom-styled native <select>. Stays a real <select> for accessibility
 * and mobile UX, just visually dressed up with a small chevron + the
 * site's glassy/beige tokens (see _contact.scss .styled-select).
 */
function StyledSelect({ id, name, value, onChange, options, required }) {
  const { t } = useTranslation();

  return (
    <div className="styled-select">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="styled-select__control"
      >
        <option value="" disabled>
          {t("Select an option")}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {t(option)}
          </option>
        ))}
      </select>
      <svg
        className="styled-select__chevron"
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 1.5L7 7.5L13 1.5"
          stroke="#365b6d"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default StyledSelect;
