import AssetLabel from "./AssetLabel";
import { Asset } from "../enums";
import classes from "../styles/BalanceCard.module.css";

const BalanceCard = ({
  asset,
  amount,
}: {
  asset: Asset;
  amount: number;
}) => {
  return (
    <div className={classes.card}>
      <AssetLabel>{asset}</AssetLabel>
      <div>{amount}</div>
    </div>
  );
};

export default BalanceCard;
