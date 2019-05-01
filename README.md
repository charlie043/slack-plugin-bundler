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

## Develop Plugins

```sh
# Enable developer mode on Slack
# Execute on Terminal
export SLACK_DEVELOPER_MENU=true
open -a /Applications/Slack.app
```

- Open WebInspector on Slack and write code!
