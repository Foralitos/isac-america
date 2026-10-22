import { notFound } from "next/navigation";
import { getCoach } from "@/libs/data";
import UserSidebar from "../UserSidebar";
import UserMobileHeader from "../UserMobileHeader";

// Todo lo que cuelga de /dashboard/[coach] comparte el técnico: el sidebar lo muestra y las páginas leen params.coach.
export default async function CoachLayout({ children, params }) {
  const { coach: key } = await params;
  const coach = await getCoach(key);
  if (!coach) notFound();
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-bg">
      <input id="user-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-bg">
        <UserMobileHeader coach={coach} />
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12">{children}</div>
      </div>
      <UserSidebar coach={coach} />
    </div>
  );
}
