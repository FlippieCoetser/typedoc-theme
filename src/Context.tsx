import { DefaultThemeRenderContext } from 'typedoc';
import { DefaultTheme } from 'typedoc';
import { Options } from 'typedoc';
import { PageEvent } from 'typedoc';
import { Reflection } from 'typedoc';

export class Context extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
    super(theme, page, options);
    this.init();
  }
  init() {}
}
