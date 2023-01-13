#!/bin/bash

RESPONSE=$(curl https://floral-shape-8320.fly.dev/health)
if [ $RESPONSE="ok" ]
then
    echo "success"
    exit 0
else
    echo "fail"
    exit 1
fi
