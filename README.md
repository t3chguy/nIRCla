# Node-JS Internet Relay Chat Log Analyzer

IRC statistics generator powered by JavaScript

## What's the status currently?

[![Build Status](https://travis-ci.org/Web-Development-Guru/nIRCla.svg?branch=master)](https://travis-ci.org/Web-Development-Guru/nIRCla)


## What is this?

Generates statistics of IRC logs. If you don't know what IRC is, you probably don't care either.


## Why is this?

I grew bored of looking at the old pisg etc. stats. Thought I'd make my own stats, with a more
modern look.

The code in NIRCLA should also be somewhat easy to manage, and themeing should be pretty easy,
if you get sick of the default theme. There's a widget system for adding content areas, 
e.g. "Most referenced words" in a somewhat simple way.


## What log formats are supported?

NIRCLA supports the default log formats (with optional seconds in timestamps) of:

 - eggdrop
 - irssi
 - weechat
 - supybot


## What are the requirements, how to use it?

Tested with NodeJS v0.12, v0.10
Requires the packages listed in the package.json:

 - ejs
 - utf8
 - async