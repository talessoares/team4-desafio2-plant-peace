import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

const RedirectHandler: React.FC = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [newPath, setNewPath] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("__clerk_db_jwt")) {
      urlParams.delete("__clerk_db_jwt");
      setNewPath(`${location.pathname}?${urlParams.toString()}`);
      setShouldRedirect(true);
    }
  }, [location]);

  if (shouldRedirect) {
    return <Navigate to={newPath} replace />;
  }

  return null;
};

export default RedirectHandler;
