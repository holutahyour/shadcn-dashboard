"use client"

import {
  Command
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { sidebar } from "@/data/sidebar"
import { SidebarOptInForm } from "./sidebar-opt-in-form"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Shadcn</span>
                  <span className="truncate text-xs">Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebar.navMain} />
        {sidebar.projects && <NavProjects projects={sidebar.projects} />}
        {sidebar.navSecondary && <NavSecondary items={sidebar.navSecondary} className="mt-auto" />}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={sidebar.user} /> */}
        <SidebarFooter>
          <div className="p-1">
            <SidebarOptInForm />
          </div>
        </SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
