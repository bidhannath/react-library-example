import { Meta, StoryObj } from "@storybook/react";
import { Box } from ".";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
