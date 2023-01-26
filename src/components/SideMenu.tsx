import { ContentType } from "@/pages";
import { Navbar, NavLink, Stack, Text, Tooltip } from "@mantine/core";
import { TablerIcon, IconHome2, IconGauge, IconUser, IconTicket } from "@tabler/icons";
import React, { FC, useState, Dispatch, SetStateAction } from "react";

type mockdataType = {
  icon: TablerIcon;
  label: string;
  type: ContentType;
};

const mockdata: mockdataType[] = [
  { icon: IconGauge, label: "ダッシュボード", type: "dashboard" },
  { icon: IconUser, label: "ユーザー", type: "users" },
  { icon: IconTicket, label: "購入履歴", type: "purchases" },
];

type NavbarLinkProps = {
  icon: TablerIcon;
  label: string;
  contentType: ContentType;
  activeContent: ContentType;
  onClick?(): void;
};

type Props = {
  activeContent: ContentType;
  setActiveContent: Dispatch<SetStateAction<ContentType>>;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ icon: Icon, label, contentType, activeContent, onClick }) => {
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <NavLink label={label} icon={<Icon stroke={1.5} />} active={contentType === activeContent} onClick={onClick} />
    </Tooltip>
  );
};

export const SideMenu: FC<Props> = ({ activeContent, setActiveContent }) => {
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      contentType={link.type}
      activeContent={activeContent}
      onClick={() => setActiveContent(link.type)}
    />
  ));

  return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
      <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Navbar.Section grow mt={24}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
      </Navbar>
    </Navbar>
  );
};
