import { Button } from "@/components/ui/button"
import { Outlet, Link } from "react-router-dom"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Home } from "lucide-react"

export default function HomeLayout() {
    return (
        <div className="mx-auto w-[90%] sm:w-3/4 mt-4 mb-4">
            <header className="mb-4">
                <div className="lg:hidden flex justify-between">
                    <div><Link to="/"><Home /></Link></div>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                        <DropdownMenuContent className="w-80 mr-3">
                            <DropdownMenuItem className="text-xl"><a href="#">Forum</a></DropdownMenuItem>
                            <DropdownMenuItem className="text-xl"><a href="#">Discord</a></DropdownMenuItem>
                            <DropdownMenuItem className="text-xl" asChild><Link to="/how-to-access-server">Cum accessez serverul</Link></DropdownMenuItem>
                            <DropdownMenuItem className="text-xl" asChild><Link to="/login">User Control Panel</Link></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <nav className="hidden lg:flex justify-between">
                    <div><Link to="/"><Home /></Link></div>
                    <ul className="flex gap-6 absolute left-1/2 -translate-x-1/2">
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><Link to="/how-to-access-server">Cum accessez serverul</Link></li>
                    </ul>
                    <Button asChild>
                        <Link to="/login">User Control Panel</Link>
                    </Button>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}