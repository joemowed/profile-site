#!/bin/bash
npm --prefix ./portfolio install
npm --prefix ./portfolio run build
firebase deploy
