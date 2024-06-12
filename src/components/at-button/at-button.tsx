import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'at-button',
  styleUrl: 'at-button.css',
  shadow: true,
})
export class AtButton {
  @Prop() text: string;
  render() {
    return <button class="button">{this.text}</button>;
  }
}
