#!/bin/bash

set -e

npm test -- --coverage
cp static/hack4impact-icon.png coverage/lcov-report/favicon.png

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed "-i" "" "-e" "s/Code coverage report for All files/Code Coverage | Hack4Impact's VS Code Extension/g" "coverage/lcov-report/index.html"
else
  sed "-i" "-e" "s/Code coverage report for All files/Code Coverage | Hack4Impact's VS Code Extension/g" "coverage/lcov-report/index.html"
fi
