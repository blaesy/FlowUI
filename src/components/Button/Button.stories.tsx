import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Primary"
    }
}

export const Secondary: Story = {
    args: {
        children: "Secondary"
    }
}

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;