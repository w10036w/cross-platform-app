# Cross Platform App

## Guide

- reset react-native cache
  - `npm cache clean -f`
  - `npm i`
  - `watchman watch-del-all`
  - kill watchman daemon process
  - `rm -fr $TMPDIR/metro*`