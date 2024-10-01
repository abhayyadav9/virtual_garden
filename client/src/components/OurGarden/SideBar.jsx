import React from "react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarContent,
  MenubarTrigger,
  MenubarMenu,
} from "@/components/ui/menubar";

const SideBar = () => {
  return (
    <div className="w-1/4 fixed bg-gray-200 p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Garden Home</h1>
      <ul className="space-y-2">
        <li>
          <Link
            to="plantgallery"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Plants Overview
          </Link>
        </li>
        <li>
          <Link
            to="3dparts"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Plants part
          </Link>
        </li>
        <li>
          <Link
            to="/section3"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Plant
          </Link>
        </li>
        <li>
          <Link
            to="/section4"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Tools and Equipment
          </Link>
        </li>
        <li>
          <Link
            to="/section5"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Contact Gardener
          </Link>
        </li>
      </ul>

      {/* Menubar placed outside of the ul to avoid layout issues */}
      <Menubar className="bg-gray-300 justify-start    h-10 flex   px-4 md:px-8 mt-4">
        <div className="flex gap-4 text-xl md:text-2xl ">
          <MenubarMenu>
            <MenubarTrigger className="text-black hover:bg-gray-200 p-1 rounded-md">
              3D view
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-white border border-gray-700">
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="latest">
                  <Link to="neem">Neem</Link>
                  </MenubarRadioItem>
                <MenubarRadioItem value="all">
                <Link to="tulsi">Tulsi</Link>

                </MenubarRadioItem>
                <MenubarRadioItem value="contact">
                <Link to="bodhi">Bodhi</Link>

                </MenubarRadioItem>

              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
};

export default SideBar;
