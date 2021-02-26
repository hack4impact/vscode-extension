#!/bin/bash

set -e

find . -name "*.md" | grep -v node_modules | while read -r line; do
  linkinator $line --markdown --config "$(pwd)/.linkinatorrc"
done
