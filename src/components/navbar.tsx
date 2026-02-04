import Link from "next/link";
import { AuthDialog } from "./authDialog";
import { useAuth } from "@/contexts/authContext";
import { signOutUser } from "../../actions/auth-action";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { isLogin, isUser, setIsLogin } = useAuth();
  async function handleLogout() {
    try {
      const response = await signOutUser();
      if (response.ok) {
        setIsLogin(false);
      }
    } catch (error) {
      console.log("Logout error >>>", error);
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center w-full p-7 sm:px-18">
        <div className="flex">
          <Link href="/">Logo</Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href="/design">Design</Link>
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
        </div>

        {isLogin ? (
          <>
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-black">{isUser}</h1>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </>
        ) : (
          <div className="flex flex-row gap-4">
            <AuthDialog />
          </div>
        )}
      </div>
    </div>
  );
}
