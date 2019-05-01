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

if [ -e $SCRIPT_BACKUP_FILE ]; then
  sudo rm $SCRIPT_FILE
  sudo mv $SCRIPT_BACKUP_FILE $SCRIPT_FILE
  osascript -e 'tell application "System Events" to display alert "Restore from backup."'
else
  osascript -e 'tell application "System Events" to display alert "Backup file is not found."'
fi
