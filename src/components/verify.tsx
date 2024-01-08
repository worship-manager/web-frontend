import { useState, useEffect } from "react";

function useVerificaiton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [msg, setMsg] = useState("");

  const verificationSecret = new URLSearchParams(location.search).get("secret");
  const url = `${import.meta.env.PUBLIC_SERVER_URL}/api/user/verify/${verificationSecret}`;

  useEffect(() => {
    setIsError(true);
    if (!verificationSecret) {
      setMsg("Invalid verification token");
      return;
    }
    setIsLoading(true);
    fetch(url)
      .then(async (res) => {
        if (res.status === 500) {
          setMsg("Could not send verification email. Please try again later.");
          return;
        }

        if (res.status !== 200) {
          const json = await res.json();
          setMsg(json.cause);
          return;
        }

        const msg = await res.text();
        setMsg(msg);
        setIsError(false);
        setTimeout(() => (location.href = "/account"), 3000);
      })
      .catch((e) => {
        console.error(e);
        setMsg("Something went wrong. Please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, msg, isError };
}

export default function VerifyEmailComponent() {
  const { isLoading, msg, isError } = useVerificaiton();
  return (
    <div className="text-center">
      {isLoading && <div>Loading...</div>}
      {!isLoading && isError && <div className="text-red-500">{msg}</div>}
      {!isLoading && !isError && <div className="text-green-500">{msg}</div>}
    </div>
  );
}
