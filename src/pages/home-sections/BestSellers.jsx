import { useTranslation } from "react-i18next";

const BestSellers = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bestSellers">
      <h2>{t("home-sections.home-bestsellers.home_bestsellers_title")}</h2>
    </div>
  );
};

export default BestSellers;