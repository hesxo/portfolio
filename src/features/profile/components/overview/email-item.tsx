"use client";

import { MailIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import { IntroItem } from "./intro-item";

export function EmailItem({ email }: { email: string }) {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(email);

  return (
    <IntroItem
      icon={MailIcon}
      content={isClient ? emailDecoded : "[Email protected]"}
      // Open Gmail using the user's preferred compose URL (opens compose in inbox).
      href={isClient ? "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRspgxltzblxBgtMWhNlNtZvVnhXDscgnRsPNHqvGDrwcZPszJTNQvLGwLZXrScRvkHNQwl" : "#"}
    />
  );
}
