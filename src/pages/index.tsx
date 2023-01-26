import { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { AppShell, Container, Header, SimpleGrid, Text, useMantineTheme } from "@mantine/core";
import { SideMenu } from "@/components/SideMenu";
import { DashboardContents } from "@/components/DashboardContents";
import { UsersContents } from "@/components/UsersContents";
import { PurchasesContents } from "@/components/PurchasesContents";

const inter = Inter({ subsets: ["latin"] });

export type ContentType = "dashboard" | "users" | "purchases";

const contentDisplayed = (type: ContentType) => {
  switch (type) {
    case "dashboard":
      return <DashboardContents />;
    case "users":
      return <UsersContents />;
    case "purchases":
      return <PurchasesContents />;
    default:
      const unreachable: never = type;
      break;
  }
};

export default function Home() {
  const theme = useMantineTheme();
  const [activeContent, setActiveContent] = useState<ContentType>("dashboard");

  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <AppShell
        padding={16}
        navbar={<SideMenu activeContent={activeContent} setActiveContent={setActiveContent} />}
        header={
          <Header height={60} py="md" px="xl">
            <Container>
              <Text weight="bold" size={24}>
                管理画面
              </Text>
            </Container>
          </Header>
        }
      >
        {contentDisplayed(activeContent)}
      </AppShell>
    </>
  );
}
