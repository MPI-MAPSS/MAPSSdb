#! /bin/bash

APP_FOLDER=${WEB_ROOT}/${ARCHES_PROJECT_DIR}
run_webpack() {
	echo ""
	echo "----- *** RUNNING WEBPACK DEVELOPMENT SERVER *** -----"
	echo ""
	cd ${APP_FOLDER}
    echo "Running Webpack"
	exec sh -c "cd /web_root/MAPSSdb/mapss && yarn install && wait-for-it mapss:80 -t 1200 && yarn start"
}

run_webpack