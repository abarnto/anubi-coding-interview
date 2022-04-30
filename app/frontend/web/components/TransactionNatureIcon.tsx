import { useMemo } from "react";
import { TransactionNature } from "../types";
import Image from "next/image";
import { TransactionNatureCode } from "../enums";

const TransactionNatureIcon = (props: TransactionNature) => {
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

  return <Image width={64} height={64} src={source} alt="transaction_nature" />;
};

export default TransactionNatureIcon;
