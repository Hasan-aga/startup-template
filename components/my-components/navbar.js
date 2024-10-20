import Title from "@/components/my-components/title"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import ShinyButton from "@/components/ui/shiny-button"
import Link from "next/link"
import GetStartedButton from "./getStartedButton"

export default function Navbar() {
  return (
    <div className="w-full flex justify-center backdrop-blur-sm ">
      <div className="grid w-2/3 grid-cols-3 items-center">
        <div className="col-span-2 flex justify-start">
          <Link href="/">
            <Title text="Startup" />
          </Link>
        </div>
        <div className="col-span-1 flex justify-center">
          <div className="w-full flex justify-center items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link 2</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost">Blog</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex gap-2">
              <ShinyButton>Login</ShinyButton>
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
