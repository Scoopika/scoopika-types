export type stringBool = "y" | "n";

export interface Widget {
  id: string;
  userId: string;
  name: string;
  agentId: string;
  store: string;
  audio: stringBool;
  vision: stringBool;
  pdf: stringBool;
  sessions: stringBool;
  type: "voice" | "chat";
  styleType: "popup" | "page";
  theme: "bordered" | "solid" | "light" | "ghost";
  welcomeMsg: string | undefined;
  radius: string;
  primaryColor: string;
  primaryTextColor: string;
  bgColor: string;
  textColor: string;
  waveColor: string;
  secondaryColor: string;
  borderColor: string;
  allowedSources: string[];
  themeMode: "dark" | "light";
  actions: {
    id: string;
    title: string;
    link: string;
    target: string;
  }[];
}
