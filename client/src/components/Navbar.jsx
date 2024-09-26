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
      <Menubar className="fixed top-0 left-0 w-full bg-gray-100 border-b border-gray-400 h-16 flex items-center justify-between px-4 md:px-8 z-20">
        {/* Heading on the left */}
        <div className="flex-shrink-0">
          <span className="text-black text-3xl md:text-4xl font-bold">
            Virtual Garden
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
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger className="text-black hover:bg-gray-200">
                  Find
                </MenubarSubTrigger>
                <MenubarSubContent className="bg-gray-800 text-white">
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-black hover:bg-gray-200 p-3 rounded-md">
              e-Library
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-white border border-gray-700">
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">latest Books</MenubarRadioItem>
                <MenubarRadioItem value="andy">All Books</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Contact Us</MenubarRadioItem>
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
                  <Link to="/contact">
                  
                  Contact Us
                  </Link>
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
