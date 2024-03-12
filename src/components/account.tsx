import { useEffect, useState } from "react";

interface IAccount {
  name: string;
  email: string;
  emailVerified: boolean;
  subscription: string;
  subscriptionEndDate?: Date;
  activeDevices: number;
}

const reqUrl = import.meta.env.PUBLIC_SERVER_URL;

export default function AccountComponent() {
  const [isLoading, setLoading] = useState(false);
  const [account, setAccount] = useState<IAccount | null>(null);
  const [error, setError] = useState<string>("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  const sendVerificationEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetch(reqUrl + "/api/user/verify", { method: "POST", credentials: "include" })
      .then(async (res) => {
        if (res.status !== 200) {
          const json = await res.json();
          setError(json.cause);
          return;
        }
        const text = await res.text();
        console.log(text);
        setVerificationSent(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(reqUrl + "/api/user", { credentials: "include", cache: "default" })
      .then(async (res) => {
        setLoading(false);
        if (res.status === 500) {
          setError("Cannot fetch account information. Please try again later.");
          return;
        }

        if (res.status !== 200) {
          setError("Failed to fetch account information. Redirecting to login...");
          setTimeout(() => {
            location.href = "/auth/login";
          }, 2000);
          return;
        }

        const json = await res.json();
        setAccount(json);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong. Please try again later.");
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!account) {
    if (error) {
      return <div className="text-red-500">{error}</div>;
    }
    return <div className="text-red-500">No account information</div>;
  }

  return (
    <>
      <p className="text-red-500 text-sm">{error}</p>
      <form className="text-left w-full mt-16 flex flex-col gap-4">
        <label>
          Name
          <input
            defaultValue={account.name}
            disabled={!isEditMode}
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          />
        </label>
        <div>
          <label>
            Email
            <input
              defaultValue={account.email}
              disabled={!isEditMode}
              className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
            />
          </label>
          {!account.emailVerified && (
            <div>
              {verificationSent ? (
                <p className="text-green-500 text-sm mt-1">Verification email sent</p>
              ) : (
                <button
                  onClick={sendVerificationEmail}
                  className="text-yellow-500 text-sm mt-1 underline">
                  Verfiy your email. Click to send verification email.
                </button>
              )}
            </div>
          )}
        </div>
        <label>
          Account Type
          <input
            defaultValue={`${account.subscription} (Expires: ${
              account.subscriptionEndDate
                ? new Date(account.subscriptionEndDate).toDateString()
                : "NEVER"
            })`}
            disabled
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          />
        </label>
      </form>
    </>
  );
}
