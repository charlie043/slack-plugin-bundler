#!/bin/bash

APP_NAME='Slack.app'
APPLICATION_ROOT='/Applications'
USER_APPLICATION_ROOT=$HOME'/Applications'

SLACK_APPLICATION_ROOT='/NO_ROOT/'

if [ -d $APPLICATION_ROOT/$APP_NAME ]; then
  SLACK_APPLICATION_ROOT=$APPLICATION_ROOT/$APP_NAME
elif [ -d $USER_APPLICATION_ROOT/$APP_NAME ]; then
  SLACK_APPLICATION_ROOT=$USER_APPLICATION_ROOT/$APP_NAME
fi

if [ ! -d $SLACK_APPLICATION_ROOT ]; then
  osascript -e 'tell application "System Events" to display alert "Slack is not found."'
  exit 0;
fi

SCRIPT_FOLDER='/Contents/Resources/app.asar.unpacked/src/static/'
OVERRIDE_FILE_NAME='ssb-interop.js'
BACKUP_FILE_NAME='ssb-interop.backup.js'
TEMP_FILE_NAME='ssb-interop.temp.js'

SCRIPT_FILE="$SLACK_APPLICATION_ROOT$SCRIPT_FOLDER$OVERRIDE_FILE_NAME"
SCRIPT_BACKUP_FILE="$SLACK_APPLICATION_ROOT$SCRIPT_FOLDER$BACKUP_FILE_NAME"
SCRIPT_TEMP_FILE="$SLACK_APPLICATION_ROOT$SCRIPT_FOLDER$TEMP_FILE_NAME"

APPLICATION_SCRIPT_FILE=$(cd $(dirname $0); pwd)/../dist/index.js

if [ -e $SCRIPT_FILE ]; then

  # create backup file if not exist
  if [ ! -e $SCRIPT_BACKUP_FILE ]; then
    sudo mv $SCRIPT_FILE $SCRIPT_BACKUP_FILE
  fi

  # create temp file if not exist
  if [ -e $SCRIPT_TEMP_FILE ]; then
    sudo rm $SCRIPT_TEMP_FILE
    sudo touch $SCRIPT_TEMP_FILE
  fi

  echo '
    ;(function() {
      console.log("SLACK CUSTOMIZER");
      window.addEventListener("DOMContentLoaded", function() {
        const $html = $("<slack-customizer></slack-customizer>");
        $("body").append($html);

  ' >> $SCRIPT_TEMP_FILE
  cat "$APPLICATION_SCRIPT_FILE" >> $SCRIPT_TEMP_FILE
  echo '
      ;})
    })();
  ' >> $SCRIPT_TEMP_FILE

  # append backup code to temp file
  cat $SCRIPT_BACKUP_FILE >> $SCRIPT_TEMP_FILE

  # temp file to original script path
  sudo mv $SCRIPT_TEMP_FILE $SCRIPT_FILE

  osascript -e 'tell application "System Events" to display alert "Plugins are installed! Restart Slack!"'
fi