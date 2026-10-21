import { redirect } from "next/navigation";
import { auth } from "@/libs/auth";
import config from "@/config";
import UserSidebar from "./UserSidebar";
import UserMobileHeader from "./UserMobileHeader";

export default async function LayoutPrivate({ children }) {
  const session = await auth();
  if (!session) redirect(config.auth.loginUrl);
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-bg">
      <input id="user-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-bg">
        <UserMobileHeader />
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12">{children}</div>
      </div>
      <UserSidebar />
    </div>
  );
}
