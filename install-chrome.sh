#!/bin/bash

sudo apt-get update && sudo apt-get install -y wget gnupg unzip

sudo wget -O google-chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

sudo dpkg -i google-chrome.deb || sudo apt-get -fy install
