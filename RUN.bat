@echo off
start chrome 127.0.0.1:8080 && npm i --production && npm run dev
@echo on
