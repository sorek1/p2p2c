#!/bin/bash

# First, we need wget
yum install -y wget

# Let's get the static site generator 
wget https://github.com/getzola/zola/releases/download/v0.5.1/zola-v0.5.1-x86_64-unknown-linux-gnu.tar.gz
tar -xvzf zola-v0.5.1-x86_64-unknown-linux-gnu.tar.gz

# It's an interactive CLI so let's pipe our answers to it
cat inputs.txt | ./zola init my_site

# Go into the site
cd my_site

# Build it
../zola build
