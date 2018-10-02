#!/bin/sh
export NODE_ENV=production
export DB_PRD_HOST=dellstore2.cohobyukovto.ap-south-1.rds.amazonaws.com
export DB_PRD_USER=dellstoreaws
export DB_PRD_PASS=dellstoreaws
export NODE_HOST=localhost
export NODE_PORT=8080
node /myapp/index.js&
exit 0
