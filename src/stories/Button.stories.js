import Button from '../lib/Button.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'QUISP/Button',
  component: Button,
  argTypes: {
    type: { control: 'select', options: ['submit', 'reset'] },
    title: { control: 'text' }
  }
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  type: 'submit',
  title: 'Submit',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'reset',
  title: 'Cancel',
};
