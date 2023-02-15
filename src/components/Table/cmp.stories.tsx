import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from 'storybook-addon-designs'
import Table from "./cmp";
import Icon from "../Icon";
import { TableProps } from "./types";
import { data, Person, Pets } from './fixture/data'

export default {
  title: "Components/UI/Table",
  component: Table,
  decorators: [withDesign],
} as ComponentMeta<typeof Table>;

const defaultArgs: Partial<TableProps> = {
  data,
  columns: [
    {
      label: 'Name',
      selector: (row: Person) => row.name,
      sortable: true,
      cell: (row: Person) => (
        <div>
          <strong>{row.name}</strong>
          {
            row.gender !== 'undisclosed' &&
            <>
              &nbsp;
              <Icon name={row.gender === 'female' ? 'venus' : 'mars'} color="red" />
            </>
          }
        </div>
      ),
    },
    {
      label: 'Age',
      selector: (row: Person) => row.age,
      sortable: true,
    },
    {
      label: 'Job',
      selector: (row: Person) => row.job,
      sortable: false
    },
    {
      label: 'Number of pets',
      selector: (row: Person): number => (
        Object.values(row.pets as Pets)
        .reduce((acc: number, curr:number): number => acc + curr, 0)
      ),
      sortable: true,
    }
  ]
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=174%3A6044&t=TVHylrq00voSyAB6-1',
  },
}

// ---

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
Default.parameters = {
  ...defaultParams,
}
