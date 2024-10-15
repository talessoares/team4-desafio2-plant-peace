import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

const RedirectHandler: React.FC = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [newPath, setNewPath] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has('__clerk_db_jwt')) {
      // Se o JWT estiver na URL, armazene a nova URL sem o parâmetro
      urlParams.delete('__clerk_db_jwt'); // Remove o parâmetro
      setNewPath(`${location.pathname}?${urlParams.toString()}`); // Define o novo caminho
      setShouldRedirect(true); // Atualiza o estado para indicar que deve redirecionar
    }
  }, [location]);

  // Redireciona para a nova URL sem o JWT
  if (shouldRedirect) {
    return <Navigate to={newPath} replace />;
  }

  return null; // Retorna null enquanto não redireciona
};

export default RedirectHandler;
