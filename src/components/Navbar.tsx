import Logo from "@/components/svgs/Logo";
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="w-screen px-4 py-4 bg-white flex justify-between">
            <Link href={"/"} className="w-32">
                <Logo />
            </Link>
            <div className="flex gap-6">
                <button className="cursor-not-allowed" disabled>Foodboxes</button>
                <button className="cursor-not-allowed" disabled>Settings</button>
                <button
                    disabled
                    className="button button-shadow opacity-50 bg-theme-purple text-theme-orange px-12 cursor-not-allowed"
                >
                    <span className="text-white">Log in</span>
                </button>
            </div>
        </nav>
    );
}
