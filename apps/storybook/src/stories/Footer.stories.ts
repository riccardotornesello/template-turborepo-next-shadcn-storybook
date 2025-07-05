import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Footer } from "@workspace/components/components/footer"

const meta = {
  title: "UI/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: { name: "My Name" },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
