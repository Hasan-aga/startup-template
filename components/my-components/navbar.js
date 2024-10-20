import Title from "@/components/my-components/title"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import ShinyButton from "@/components/ui/shiny-button"
import Link from "next/link"
import { Features } from "./features"
import GetStartedButton from "./getStartedButton"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card"

export default function Navbar() {
  return (
    <div className="w-full flex justify-center fixed top-0 backdrop-blur-lg bg-white/15 z-50">
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
                    <ul className="grid gap-3 p-4 lg lg:w-[500px] h-1/2">
                      <Features />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 grid-cols-2 lg lg:w-[500px] h-1/2">
                      <Card>
                        <CardHeader>
                          <CardTitle>SEO</CardTitle>
                          <CardDescription>
                            Get a free SEO report
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Responsive Design</CardTitle>
                          <CardDescription>
                            Impress your clients with a responsive website
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Fast Website</CardTitle>
                          <CardDescription>
                            Users love fast loading websites
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Animation </CardTitle>
                          <CardDescription>
                            Get ahead of the competition with animations
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </ul>
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
