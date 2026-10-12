#!/usr/bin/env bash
DIR="$DOCS"/Website/uqtmiller.github.io/Imogen_Dance

echo $DIR

cp -r * "$DIR"
cd "$DIR"
rm sample_exam_questions.docx
rm Dance_concepts_and_skills.docx
rm terrain_7-10.pdf
git pull
git add -A
git commit -m "Update Imogen dance project"
git push origin main
cd -
