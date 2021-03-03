#!/bin/bash

set -e

npm test -- --coverage
cp static/hack4impact-icon.png coverage/lcov-report/favicon.png
