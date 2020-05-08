import postcss from 'postcss'
import webpack from 'webpack'
import { ConfigurationContext } from '../../../utils'
import { getClientStyleLoader } from './client'
import { getCssModuleLocalIdent } from './getCssModuleLocalIdent'

export function getCssModuleLoader(
  ctx: ConfigurationContext,
  postCssPlugins: readonly postcss.AcceptedPlugin[],
  preProcessors: readonly webpack.RuleSetUseItem[] = []
): webpack.RuleSetUseItem[] {
  const loaders: webpack.RuleSetUseItem[] = []

  if (ctx.isClient) {
    // Add appropriate development more or production mode style
    // loader
    loaders.push(
      getClientStyleLoader({
        isDevelopment: ctx.isDevelopment,
        assetPrefix: ctx.assetPrefix,
      })
    )
  }

  // Resolve CSS `@import`s and `url()`s
  loaders.push({
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1 + preProcessors.length,
      sourceMap: true,
      onlyLocals: ctx.isServer,
      modules: {
        // Disallow global style exports so we can code-split CSS and
        // not worry about loading order.
        // mode: 'pure',
        /**
         * @custom 使用 local 以便于兼容旧的项目
         */
        mode: 'local',
        // Generate a friendly production-ready name so it's
        // reasonably understandable. The same name is used for
        // development.
        // TODO: Consider making production reduce this to a single
        // character?
        // getLocalIdent: getCssModuleLocalIdent,
        /**
         * @custom 生成环境使用更精简的类名
         *
         */
        localIdentName: ctx.isDevelopment ? undefined : '[hash:base64:5]',
        getLocalIdent: ctx.isDevelopment ? getCssModuleLocalIdent : undefined,
      },
    },
  })

  // Compile CSS
  loaders.push({
    loader: require.resolve('next/dist/compiled/postcss-loader'),
    options: {
      ident: '__nextjs_postcss',
      plugins: postCssPlugins,
      sourceMap: true,
    },
  })

  loaders.push(
    // Webpack loaders run like a stack, so we need to reverse the natural
    // order of preprocessors.
    ...preProcessors.slice().reverse()
  )

  return loaders
}
