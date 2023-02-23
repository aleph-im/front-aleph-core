import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import Navbar from './cmp'
import { NavbarProps } from './types'
import Button from '../Button'

export default {
  title: 'Components/UI/Navbar',
  component: Navbar,
  decorators: [withDesign],
} as ComponentMeta<typeof Navbar>

const defaultArgs: Partial<NavbarProps> = {
  withLabel: true,
  withLogo: true,
  navLinks: [
    () => <a href="#">Solutions</a>,
    () => <a href="#">Indexing</a>,
    () => <a href="#">Roadmap</a>,
    () => <a href="#">Insights</a>,
    () => <a href="#">Team</a>,
  ],
  navButtons: [
    () => (
      <Button variant="secondary" color="main0" kind="neon" size="regular">
        Whitepaper
      </Button>
    ),
  ],
}

// ---

const Template: ComponentStory<typeof Navbar> = (args) => (
  <>
    <Navbar {...args} />

    <h1>A random title</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
  </>
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  controls: { exclude: ['color', 'size'] },
}