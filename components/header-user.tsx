'use client'
import {
    BadgeCheck,
    ChevronsDown,
    LogOut,
    Sparkles
} from "lucide-react"
  
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { sidebar } from "@/data/sidebar"

  
function HeaderUser() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center gap-4 mx-6 p-2"
                >
                    <Avatar className="h-8 w-8 rounded-full">
                        <AvatarImage src={sidebar.user.avatar} alt={sidebar.user.name} />
                        <AvatarFallback className="rounded-lg bg-primary text-primary-foreground text-sm font-bold">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{sidebar.user.name}</span>
                        <span className="truncate text-xs">{sidebar.user.email}</span>
                    </div>
                    <ChevronsDown className="ml-auto size-4" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src={sidebar.user.avatar} alt={sidebar.user.name} />
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">{sidebar.user.name}</span>
                            <span className="truncate text-xs">{sidebar.user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Sparkles />
                        Upgrade to Pro
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BadgeCheck />
                        Account
                    </DropdownMenuItem>                    
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HeaderUser