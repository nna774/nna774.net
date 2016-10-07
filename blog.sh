#! /bin/sh

YEAR=`date +"%Y"`
MONTH=`date +"%m"`
DAY=`date +"%d"`
TIME=`date +"%H:%M"`
ZONE="JST"

TITLE=$1
if [ -z "${TITLE}" ]; then
    echo need title
    exit 255
fi

NAME="${DAY}-${TITLE}.html.md"
DATE="${YEAR}-${MONTH}-${DAY} ${TIME} ${ZONE}"
DIR="source/blog/${YEAR}/${MONTH}"

mkdir -p "${DIR}"

PATH="${DIR}/${NAME}"
if [ -e "${PATH}" ]; then
    echo already exist!
    exit 255
fi

echo "---" > "${PATH}"
echo "directory_index: false" >> "${PATH}"
echo "title: ${TITLE}" >> "${PATH}"
echo "date: ${DATE}"  >> "${PATH}"
echo "tags: "  >> "${PATH}"
echo "---"  >> "${PATH}"

echo "${PATH} created"
