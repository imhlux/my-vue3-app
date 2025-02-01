import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Привет, тестирование!' },
    });
    expect(wrapper.text()).toBe('Привет, тестирование!');
  });
});