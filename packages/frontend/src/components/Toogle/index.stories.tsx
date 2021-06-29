import React from 'react'
import { Meta, Story } from '@storybook/react'
import Toogle from './index'

export default {
  title: 'Components/Toogle',
  component: Toogle,
  argTypes: {},
} as Meta

const Template: Story = (args) => {
  return <Toogle {...args} />
}

export const ToogleTemplate = Template.bind({})

ToogleTemplate.parameters = {}
ToogleTemplate.args = {
  isListItem: true,
}
