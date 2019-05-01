#!/usr/bin/osascript

tell application "Finder"
    set aCurrentPath to folder of (path to me) as Unicode text
    set aPosixCurrentPath to get POSIX path of aCurrentPath
end tell

do shell script ("sh " & aPosixCurrentPath & "/src/slack_restore_backup.sh") with administrator privileges