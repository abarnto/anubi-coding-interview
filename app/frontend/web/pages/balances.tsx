import { useCallback, useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

import MockedUserIcon from "../components/MockedUserIcon";
import BalanceCard from "../components/BalanceCard";
import { User, Balance } from "../types";
import { Asset } from "../enums";

const Balance: NextPage = () => {
  const [balances, setBalances] = useState<Balance>({});

  const getBalances = useCallback(() => {
    fetch("http://localhost:3081/v1/balances")
      .then((res) => res.json())
      .then(setBalances)
      .catch(console.error);
  }, []);

  useEffect(getBalances, [getBalances]);

  const users: User[] = useMemo(
    () => Object.keys(balances).map((id) => ({ id })),
    [balances]
  );

  return (
    <div className="flex flex-col">
      <Head>
        <title>Balances</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <h1 className="text-5xl self-center mt-8">Balances</h1>
      {users.map((u) => (
        <div key={u.id} className="w-4/5 flex flex-col self-center">
          <div className="mt-16">
            <div className="pl-8">
              <MockedUserIcon data={u} width={80} height={80} />
            </div>
            <div className="w-full h-1 bg-slate-300" />
          </div>

          <div className="flex pr-8">
            {Object.keys(balances[u.id]).map((asset: string) => (
              <BalanceCard
                key={asset}
                asset={asset as Asset}
                amount={balances[u.id][asset]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Balance;
