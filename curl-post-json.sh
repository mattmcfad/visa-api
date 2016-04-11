#!/bin/bash

data='{"name":"dev-test","age":0,"lang":"JS","email":"fake@email.com"}'

url="localhost:8000/api/v1/test"

curl -v\
     -H "Content-Type: application/json"\
     -X POST -d $data $url
