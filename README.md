# Slack Plugin Bundler for Mac

## Install

1. [Download Zip](https://github.com/charlie043/slack-plugin-bundler/archive/master.zip)

2. Unzip folder

3. open `install.command`

4. Restart Slack

Note:  
Bundler is removed when reinstall or update Slack app. But plugin data is stored in localStorage.
Plugins are restored when reinstall Bundler.

## Uninstall ( Restore from backup )

1. open `uninstall.command`

2. Restart Slack

## Add Plugin

- Enable fetch raw css or javascript from url
  - input url and click `fetch raw`
- Enable fetch JSON from url
  - input url and click `fetch json`
  ```json
  // JSON must have name, type, raw field.
  // type: "css"|"javascript"
  {
    "name": "plugin name",
    "type": "css",
    "raw": "raw css or javascript"
  }
  ```
- Input all field yourself :)

## Samples
### import plugin from json
1. copy url
2. paste url to `Fetch from url` field
3. click `fetch json`
4. applying code with `save` button

### try some plugins
- css
  - set background image: [url](https://gist.githubusercontent.com/charlie043/1eb4cbf11f80f84130a83f6b1f9ab4b4/raw/bb690757f61720c04e2b5f322ad19443b0fb0c0d/background-image.json)
  - split each messages: [url](https://gist.githubusercontent.com/charlie043/8913452890c2572b634368945e105621/raw/791ad768e205a6f96a8402484729e0b3cd68d7e4/split-each-messages.json)

## Develop Plugins

```sh
# Enable developer mode on Slack
# Execute on Terminal
export SLACK_DEVELOPER_MENU=true
open -a /Applications/Slack.app
```

- Open WebInspector on Slack and write code!
