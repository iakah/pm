import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useEffect } from "react";
import { roleMap } from "./helper";
import { useCookies } from "react-cookie";

const OnboardingRouter = () => {
  const { onboardingState, setOnboardingState, selectRole, setLoggedIn, isLoggedIn } =
    useUser();
  const { roles, openingRole } = onboardingState;
  const navigate = useNavigate();
  
  const pageToNavigate = isLoggedIn ? "/privateProfileName" : "/profileName";
  useEffect(() => {
    if (roles.length === 0) {
      selectRole(openingRole);
      setLoggedIn(true);
      const { dashboardUrl } = roleMap[openingRole] ?? "/";
      navigate(dashboardUrl);
    } else {
      const nextRole = roles.shift();
      if (!openingRole) {
        setOnboardingState({
          ...onboardingState,
          openingRole: nextRole,
        });
      }
      selectRole(nextRole);
      navigate(pageToNavigate);
    }
  }, []);

  return null;
};

export default OnboardingRouter;
