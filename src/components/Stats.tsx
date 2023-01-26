import { createStyles, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons";

// const useStyles = createStyles((theme) => ({
//   root: {
//     padding: theme.spacing.xl * 1.5,
//   },

//   value: {
//     fontSize: 24,
//     fontWeight: 700,
//     lineHeight: 1,
//   },

//   diff: {
//     lineHeight: 1,
//     display: "flex",
//     alignItems: "center",
//   },

//   icon: {
//     color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
//   },

//   title: {
//     fontWeight: 700,
//     textTransform: "uppercase",
//   },
// }));
const data: StatsGridType[] = [
  {
    title: "Revenue",
    icon: "receipt",
    value: "13,456",
    diff: 34,
  },
  {
    title: "Profit",
    icon: "coin",
    value: "4,145",
    diff: -13,
  },
  {
    title: "New customers",
    icon: "user",
    value: "188",
    diff: -30,
  },
  {
    title: "Revenue",
    icon: "receipt",
    value: "13,456",
    diff: 34,
  },
  {
    title: "Profit",
    icon: "coin",
    value: "4,145",
    diff: -13,
  },
  {
    title: "New customers",
    icon: "user",
    value: "188",
    diff: -30,
  },
  {
    title: "Revenue",
    icon: "receipt",
    value: "13,456",
    diff: 34,
  },
  {
    title: "Profit",
    icon: "coin",
    value: "4,145",
    diff: -13,
  },
  {
    title: "New customers",
    icon: "user",
    value: "188",
    diff: -30,
  },
  {
    title: "Revenue",
    icon: "receipt",
    value: "13,456",
    diff: 34,
  },
  {
    title: "Profit",
    icon: "coin",
    value: "4,145",
    diff: -13,
  },
  {
    title: "New customers",
    icon: "user",
    value: "188",
    diff: -30,
  },
  {
    title: "Revenue",
    icon: "receipt",
    value: "13,456",
    diff: 34,
  },
  {
    title: "Profit",
    icon: "coin",
    value: "4,145",
    diff: -13,
  },
];

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

type StatsGridType = {
  title: string;
  icon: keyof typeof icons;
  value: string;
  diff: number;
};

export const Stats = () => {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="md" weight="bolder" color="dimmed">
            {stat.title}
          </Text>
          <Icon size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text size={24} weight="bold">
            {stat.value}
          </Text>
          <Text color={stat.diff > 0 ? "teal" : "red"} size="sm" weight={500}>
            <span>{stat.diff}%</span>
            <DiffIcon size={16} stroke={1.5} />
          </Text>
        </Group>

        <Text size="xs" color="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  return (
    <div>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {stats}
      </SimpleGrid>
    </div>
  );
};
