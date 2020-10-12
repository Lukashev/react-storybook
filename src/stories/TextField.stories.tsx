import React from "react"
import { Meta, Story } from "@storybook/react"
import TextField, { Props } from "../components/TextField/TextField"

export default {
  title: "TextField",
  component: TextField,
  argTypes: {
    onChange: { action: "onchange" },
  },
} as Meta

const Template: Story<Props> = (args) => <TextField {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Email",
  value: "foobar@gmail.com",
}
