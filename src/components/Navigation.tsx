import { Link } from "react-router-dom";
import { Book, FileText, Folder, Mail, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <NavigationMenu className="flex justify-center w-full">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                <User className="mr-2 h-4 w-4" />
                About Me
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/education" className={navigationMenuTriggerStyle()}>
                <Book className="mr-2 h-4 w-4" />
                Education
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects" className={navigationMenuTriggerStyle()}>
                <Folder className="mr-2 h-4 w-4" />
                Projects
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle()}>
                <Mail className="mr-2 h-4 w-4" />
                Contact and Socials
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/other" className={navigationMenuTriggerStyle()}>
                <FileText className="mr-2 h-4 w-4" />
                Other
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
