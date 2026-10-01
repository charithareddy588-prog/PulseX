import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProtectedButton({
  children,
  onClick,
  className = "",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    const user = localStorage.getItem("pulseUser");

    if (!user) {
      toast.error(
        "Please login to continue"
      );

      navigate("/login");

      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default ProtectedButton;