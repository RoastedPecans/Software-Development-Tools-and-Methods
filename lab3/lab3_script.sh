#!/bin/bash
# Author: Connor Thompson
# Date: 9/20/19

#Problem 1 Code:
echo "Enter a file to scan: "
read fileName
echo "Enter a regex string to search the file with: "
read regexCmd

grep $regexCmd $fileName

echo "Number of phone numbers in file: "
grep -c "^[0-9]\{3\}-[0-9]\{3\}-[0-9]\{4\}$" "regex_practice.txt"

echo "Number of emails in file: "
grep -c "[0-z]@\{1\}" "regex_practice.txt"

echo "Number of 303 area codes in file: "
grep "^303" "regex_practice.txt"

echo "Saving all geocities emails to email_results.txt."
grep "@geocities.com" "regex_practice.txt" >> email_results.txt

