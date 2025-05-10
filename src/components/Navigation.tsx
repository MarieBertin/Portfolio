
import { Link } from "react-router-dom";
import { Book, FileText, Folder, Mail, Menu, User, Book as VeilleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const isMobile = useIsMobile();

  const navigationItems = [
    { to: "/", icon: User, label: "About Me" },
    { to: "/education", icon: Book, label: "Education" },
    { to: "/projects", icon: Folder, label: "Projects" },
    { to: "/contact", icon: Mail, label: "Contacts" },
    { to: "/veille", icon: VeilleIcon, label: "Veille" },
    { to: "/other", icon: FileText, label: "Other" },
  ];

  const NavigationItems = () => (
    <>
      {navigationItems.map((item) => (
        <NavigationMenuItem key={item.to}>
          <Link to={item.to} className={navigationMenuTriggerStyle()}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  );

  if (isMobile) {
    return (
      <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-4 py-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <NavigationMenu className="flex justify-center w-full">
          <NavigationMenuList className="flex justify-center gap-6 w-full">
            <NavigationItems />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
