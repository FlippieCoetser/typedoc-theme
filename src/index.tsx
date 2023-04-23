import {
  Application,
  JSX,
  DefaultTheme,
  PageEvent,
  Reflection,
  DefaultThemeRenderContext,
  Options,
  RenderTemplate,
} from 'typedoc';

import { clearSeenIconCache, icons } from './icon';

export class Context extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
    super(theme, page, options);
    this.icons = icons;
  }
}

export class Theme extends DefaultTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>): Context {
    return new Context(this, pageEvent, this.application.options);
  }
  override render = (
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>,
  ): string => {
    clearSeenIconCache();
    return super.render(page, template);
  };
}

export function load(app: Application) {
  app.renderer.hooks.on('head.end', () => (
    <script>
      <JSX.Raw html="console.log('theme loaded');" />
    </script>
  ));
  app.renderer.defineTheme('my-theme', Theme);
}
