import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="w-full px-6  h-16 flex items-center justify-between ">
      <p>NavBar</p>
      <div className="flex items-center gap-3">
        <UserButton afterSignOutUrl="/" />
        <Tabs defaultValue="dark">
          <TabsList className="border dark-border-neutral-800 dark:bg-[#030303]">
            <TabsTrigger value="light" onClick={() => setTheme("light")}>
              <SunIcon className="h-5 w-5" />
            </TabsTrigger>
            <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
              <MoonIcon className="h-5 w-5 rotate-90 transition-all dark:rotate-0" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </nav>
  );
};

export default NavBar;
