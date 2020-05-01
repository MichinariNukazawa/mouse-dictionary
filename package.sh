#!/bin/bash
#
# Author: michinari.nukazawa@gmail.com
#

set -eu
set -o pipefail

trap 'echo "error:$0($LINENO) \"$BASH_COMMAND\" \"$@\""' ERR


SCRIPT_DIR=$(cd $(dirname $0); pwd)
ROOT_DIR=${SCRIPT_DIR}
SOURCE_DIR=${ROOT_DIR}
PACKAGE_DIR=${ROOT_DIR}/tmp
RELEASE_DIR=${ROOT_DIR}

#PACKAGE_NAME=lina-dicto-wemd
#DIR_NAME=dist-firefox
#"firefox" or "chrome"
BROWSER=$1
PACKAGE_NAME=lina-dicto-wemd-${BROWSER}
DIR_NAME=dist-${BROWSER}

## packaging
rm -rf ${PACKAGE_DIR}
mkdir -p ${PACKAGE_DIR}

cp -r ${ROOT_DIR}/${DIR_NAME}/* ${PACKAGE_DIR}/

pushd ${PACKAGE_DIR}

rm -f ${RELEASE_DIR}/${PACKAGE_NAME}.zip
zip -r ${RELEASE_DIR}/${PACKAGE_NAME}.zip *
rm -rf ${PACKAGE_DIR}

popd

