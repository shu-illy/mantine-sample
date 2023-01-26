import React from "react";
import { RingProgress, Text, SimpleGrid, Paper, Center, Group, Stack } from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons";
import { RingProgresses } from "./RingProgresses";
import { Stats } from "./Stats";

export const DashboardContents = () => {
  return (
    <Stack m={16}>
      <RingProgresses />
      <Stats />
    </Stack>
  );
};
