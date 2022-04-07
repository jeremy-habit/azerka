import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Home(): ReactElement {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("welcome")}</h2>
    </div>
  );
}
