import { DefaultTheme, PageEvent, Reflection } from 'typedoc';
import { Context } from './Context';

export class Theme extends DefaultTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>): Context {
    return new Context(this, pageEvent, this.application.options);
  }
}
