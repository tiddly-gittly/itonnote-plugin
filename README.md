# Itonnote plugin for TidGi desktop + TiddlyWiki5

## 功能

预配置了一系列琐碎的内容，一般来自各插件的Readme和论坛讨论，但大多数人懒得看Readme，故在此直接帮忙配置好了。

具体预置内容介绍可见[文档站](https://tiddly-gittly.github.io/itonnote-plugin/)。

## Development

See [tiddly-gittly/Tiddlywiki-WikiText-Plugin-Template](https://github.com/tiddly-gittly/Tiddlywiki-WikiText-Plugin-Template) for detail.

There are some scripts you can run to boost your development.

After `npm i`:

- `npm run dev` to auto pack the plugin and run a demo site. Your change in the src directory will automatically refresh the site.
- `npm run dev-html` to see demo site with packed plugin after you finish your development, this can be your final check, this runs slower than `npm run dev`

### After the plugin is complete

#### Publish

Enable github action in your repo (in your github repo - setting - action - general) if it is not allowed, and when you tagging a new version `vx.x.x` in a git commit and push, it will automatically publish to the github release.

#### Demo

You will get a Github Pages demo site automatically after publish. If it is 404, you may need to manually enable Github Pages in your github repo:

Settings - Pages (on left side) - Build and deployment- Source - choose `"Github Actions"`

Next time you trigger a publish, the site will be updated. You can see the site link in Settings - Pages
