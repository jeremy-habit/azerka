import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Home(): ReactElement {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h2>{t("Welcome to React")}</h2>
    </div>
  );
}
