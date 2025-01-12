import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((state) => state.user.username);
  if (!username) return;

  return <div className="text-sm font-semibold md:block">{username}</div>;
};

export default Username;
