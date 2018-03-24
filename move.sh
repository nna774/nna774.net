#! /bin/bash -xe

YEARS=(2014 2015 2016 2017 2018)

for YEAR in ${YEARS[@]}; do
    echo ${YEAR}
    for FILE in `find "source/blog/${YEAR}/" -name '*.md'`; do
	[[ ${FILE} =~ source/blog/[0-9]+/([0-9]+)/([0-9]+)-(.*) ]]
	MONTH=${BASH_REMATCH[1]}
	DAY=${BASH_REMATCH[2]}
	NAME=${BASH_REMATCH[3]}

	mkdir -p "source/blog/${YEAR}/${MONTH}/${DAY}"
	git mv "${FILE}" "source/blog/${YEAR}/${MONTH}/${DAY}/${NAME}"
    done
done
