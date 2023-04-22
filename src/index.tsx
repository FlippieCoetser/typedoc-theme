import {
  Application,
  JSX,
  DefaultTheme,
  PageEvent,
  Reflection,
  DefaultThemeRenderContext,
  Options,
} from 'typedoc';

import { icons } from './icon';

export class Context extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
    super(theme, page, options);
  }
}

export class Theme extends DefaultTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>): Context {
    return new Context(this, pageEvent, this.application.options);
  }
}

export function load(app: Application) {
  app.renderer.hooks.on('head.end', () => (
    <script>
      <JSX.Raw html="console.log('theme loaded');" />
    </script>
  ));
  app.renderer.defineTheme('my-theme', Theme);
}
