<h1 align="center">Lux</h1>

<p align="center">
  <strong>Adaptive brightness based on screen contents.</strong></br>
  Made with love & <a href="http://electron.atom.io/">Electron</a>.</br></br>
  <a href="https://github.com/epilande/lux/releases/latest"><img height="200px" src="lux.png"/></a></br></br>
  <em>Lux was inspired by <a href="https://github.com/anishathalye/lumen">Lumen</a>.</em></br>
</p>


## Install
[**Download the latest version**](https://github.com/epilande/lux/releases/latest), unzip, and move `Lux.app` into your Applications folder.


## Usage
Do you work late at night with the lights off? Do you squint every time you
switch between apps with light & dark themes?

**Lux** fixes this problem by automatically adjusting your screen brightness.
Color samples are taken from your screen & based on that, Lux will automagically
lighten/darken your screen brightness.

### Important
While Lux is running you're not able to change your brightness level, simply
turn off Lux to get back full control.

Make sure "**Automatically adjust brightness**" is disabled, you can find it in `System Preferences` ->
`Displays`.


## Dev
Install dependencies.

```
$ npm install
```

Launch dev environment.

```
$ npm run start
```

Package app.

```
$ npm run build
```

If you receive this [`Error: Module version mismatch`](https://github.com/octalmage/robotjs/issues/244), run the following
command:

```
$ npm run rebuild
```
