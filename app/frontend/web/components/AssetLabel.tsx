import { useMemo } from "react";
import { Asset } from "../enums";

import classes from "../styles/TransactionTable.module.css";

const AssetLabel = ({ children }: { children: Asset }) => {
  const color = useMemo(() => {
    switch (children) {
      case "ETH":
        return "#434976";
      case "DOT":
        return "#E6007A";
      default:
      case "BTC":
        return "#C4B000";
    }
  }, [children]);

  return (
    <div className={classes.asset} style={{ color }}>
      {children}
    </div>
  );
};

export default AssetLabel;
