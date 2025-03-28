import { authClient } from "@/clients/auth-client";

const Header: React.FC = () => {
  const handleOnClick = () => {
    authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <header>
      <h2>Edoba</h2>
      <button onClick={handleOnClick}>signup</button>
    </header>
  );
};

export default Header;
