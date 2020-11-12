import { useEffect } from "react";

const useScript = ({ url, isAsync, id, scriptText }) => {
  useEffect(() => {
    const isScriptExist = id && Boolean(document.getElementById(id));
    if (!isScriptExist) {
      const script = document.createElement("script");

      if (url) script.src = url;
      if (isAsync) script.async = true;
      if (scriptText) script.innerHTML = scriptText;
      if (id) script.id = id;

      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [url]);
};

export default useScript;
