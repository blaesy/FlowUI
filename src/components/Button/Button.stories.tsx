import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: "primary",
        children: 'Click me',
    }
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: 'Click me',
    }
}

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;