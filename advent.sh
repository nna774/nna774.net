#! /bin/sh

YEAR=`date -d tomorrow +"%Y"`
MONTH=`date -d tomorrow +"%m"`
DAY=`date -d tomorrow +"%d"`
TIME="00:00"
ZONE="JST"

TITLE=$1
if [ -z "${TITLE}" ]; then
    TITLE="advent"
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
echo "title: ${TITLE}" >> "${PATH}"
echo "directory_index: false" >> "${PATH}"
echo "date: ${DATE}"  >> "${PATH}"
echo "tags: "  >> "${PATH}"
echo "---"  >> "${PATH}"

echo "${PATH} created"

/usr/bin/emacsclient -nw -a "" "${PATH}"
