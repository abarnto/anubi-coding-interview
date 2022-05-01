import { useMemo, useState } from "react";
import { TransactionNature } from "../types";
import Image from "next/image";
import { TransactionNatureCode } from "../enums";

import classes from "../styles/TransactionNatureIcon.module.css";

const TransactionNatureIcon = (props: TransactionNature) => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const source = useMemo(() => {
    const { code } = props;
    switch (code) {
      case TransactionNatureCode.Withdraw:
        return "https://img.icons8.com/dusk/64/000000/safe-out.png"; // https://icons8.com/icon/53832/cassaforte-out
      case TransactionNatureCode.Deposit:
        return "https://img.icons8.com/dusk/64/000000/safe-in.png"; // https://icons8.com/icon/53833/cassaforte-in
      case TransactionNatureCode.Interest:
        return "https://img.icons8.com/dusk/64/000000/visible--v1.png"; // https://icons8.com/icon/42866/visibile
      case TransactionNatureCode.Rewards:
        return "https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-reward-cryptocurrency-sbts2018-outline-color-sbts2018.png";
      // https://icons8.com/icon/AgvxFmtNhoME/reward
    }
  }, [props]);

  return (
    <div className="flex items-center justify-center">
      <span
        style={{ visibility: tooltipShown ? "visible" : "hidden" }}
        className={classes.tooltip}
      >
        {props.code}
      </span>
      <Image
        width={64}
        height={64}
        src={source}
        alt="transaction_nature"
        onMouseOver={() => setTooltipShown(true)}
        onMouseOut={() => setTooltipShown(false)}
      />
    </div>
  );
};

export default TransactionNatureIcon;
