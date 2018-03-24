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

NAME="${TITLE}.html.md"
DATE="${YEAR}-${MONTH}-${DAY} ${TIME} ${ZONE}"
DIR="source/blog/${YEAR}/${MONTH}/${DAY}"

mkdir -p "${DIR}"

ARTICLE_PATH="${DIR}/${NAME}"
if [ -e "${ARTICLE_PATH}" ]; then
    echo already exist!
    exit 255
fi

echo "---" > "${ARTICLE_PATH}"
echo "title: ${TITLE}" >> "${ARTICLE_PATH}"
echo "directory_index: false" >> "${ARTICLE_PATH}"
echo "date: ${DATE}"  >> "${ARTICLE_PATH}"
echo "tags: "  >> "${ARTICLE_PATH}"
echo "---"  >> "${ARTICLE_PATH}"

echo "${ARTICLE_PATH} created"

emacsclient -nw -a "" "${ARTICLE_PATH}"
