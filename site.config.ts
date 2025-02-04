import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '303288b3663743078cd1dc86c9556a31',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '昂的分流站',
  domain: 'www.angforever.top',
  author: 'ANGJustinl',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'angustinl_',
  github: 'ANGJustinl',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null, //＂cdn-angforever.test.upcdn.net/favicon.ico＂,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.8,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'About 关于我',
       pageId: 'ee4fc517e94e4dab831a9caca1ff9d26'
     },
     {
       title: '昂昂bot',
       pageId: '6717a9ceef034ca6b010547ada8f15f9'
     }
   ]
})
