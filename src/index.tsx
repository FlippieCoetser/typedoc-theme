import { Theme } from './Theme';
import { Application, JSX } from 'typedoc';

/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
export function load(app: Application) {
  app.renderer.hooks.on('head.end', () => (
    <script>
      <JSX.Raw html="alert('hi!');" />
    </script>
  ));
  app.renderer.defineTheme('my-theme', Theme);
}
