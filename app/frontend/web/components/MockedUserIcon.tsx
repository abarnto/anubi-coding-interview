import { useMemo } from "react";
import { User } from "../types";
import Image from "next/image";

const MockedUserIcon = ({
  data = { id: "n.d." },
  ...props
}: {
  data: User;
}) => {
  const source = useMemo(() => {
    const { id } = data;
    switch (id) {
      case "u1":
        return "https://img.icons8.com/officel/80/000000/circled-user-male-skin-type-6.png"; // https://icons8.com/icon/EvfjU4d05f0I/cerchiato-utente-maschio-tipo-di-pelle-6
      case "u2":
        return "https://img.icons8.com/officel/80/000000/circled-user-female-skin-type-5.png"; // https://icons8.com/icon/DV1y8Nr40Nii/cerchiato-utente-donna-tipo-di-pelle-5
      default:
      case "u3":
        return "https://img.icons8.com/officel/80/000000/circled-user-male-skin-type-4.png"; // https://icons8.com/icon/wv-0bGJAQKNu/cerchiato-utente-maschio-tipo-di-pelle-4
    }
  }, [data]);

  return (
    <Image
      width={48}
      height={48}
      src={source}
      alt="transaction_nature"
      {...props}
    />
  );
};

export default MockedUserIcon;
