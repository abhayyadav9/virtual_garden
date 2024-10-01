import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="relative z-20">
      <Menubar className="fixed top-0 left-0 w-full bg-gray-200 border-b border-gray-400 h-16 flex items-center justify-between px-4 md:px-8 z-20">
        {/* Heading on the left */}
        <div className="flex-shrink-0">
          <span className="text-black text-3xl md:text-4xl font-bold">
            AYUSH  SARTHI
          </span>
        </div>

        {/* Menu items on the right */}
        <div className="flex gap-4 text-xl md:text-2xl ml-auto">
          <MenubarMenu>
            <MenubarTrigger className="text-black hover:bg-gray-200 p-3 rounded-md">
              <Link to="/"> Home</Link>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-black hover:bg-gray-200 p-3 rounded-md">
              <Link to="/garden"> Our Garden</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-black hover:bg-gray-200 p-3 rounded-md">
              Consultant
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-white border border-gray-700">
              <MenubarSeparator />

              <MenubarSeparator />
              <MenubarItem>
                <Link to="/our-expert"> Our Expert</Link></MenubarItem>
              <MenubarItem>
                <Link to="/consult-doctor">
                Consult Doctor
                </Link>
              </MenubarItem>

            </MenubarContent>
            
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-black hover:bg-gray-200 p-3 rounded-md">
              e-Library
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-white border border-gray-700">
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">
                  <Link to="/latest-book">    latest Books</Link></MenubarRadioItem>
                <MenubarRadioItem value="andy">
                  <Link to="/all-book">All Books</Link></MenubarRadioItem>

              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-black hover:bg-gray-200 p-3 rounded-md">
              Services
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-white border border-gray-700">
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">
                  <Link to="/subscription"> Subscription </Link>
                </MenubarRadioItem>
                <MenubarRadioItem value="andy">
                  <Link to="/help"> Help</Link>
                </MenubarRadioItem>
                <MenubarRadioItem value="Luis">
                  <Link to="/contact">Contact Us</Link>
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
}
