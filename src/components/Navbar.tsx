import Logo from "@/components/svgs/Logo";
export default function Navbar() {
    return (
        <nav className="w-screen px-4 py-4 bg-white flex justify-between">
            <div className="w-32">
                <Logo />
            </div>
            <div className="flex gap-6">
                <button>Foodboxes</button>
                <button>Settings</button>
                <button className="button button-shadow bg-theme-purple text-theme-orange px-12">
                    <span className="text-white">Log in</span>
                </button>
            </div>
        </nav>
    );
}
