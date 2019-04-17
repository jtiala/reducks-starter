#!/bin/sh

function usage() {
  echo "Usage: $0 [-bhm] [FOLDER]\n"
  echo "Deploy FOLDER to GitHub Pages.\n"
  echo "  -b TARGET_BRANCH   GitHub pages branch. Default: gh-pages"
  echo "  -m COMMIT_MESSAGE  Commit message. Default: Deploy"
  echo "  -h                 Display help."
  echo "\nIf GH_NAME or GH_EMAIL environment variables are set, they will replace git config user.name and user.email. Useful for CI."
}

OPTIND=1
TARGET_BRANCH="gh-pages"
COMMIT_MESSAGE="Deploy"

while getopts hb:m: opt; do
  case $opt in
  h)
    usage
    exit 0
    ;;
  b)
    TARGET_BRANCH=$OPTARG
    ;;
  m)
    COMMIT_MESSAGE=$OPTARG
    ;;
  *)
    usage
    exit 1
    ;;
  esac
done

shift $((OPTIND - 1))

[ "${1:-}" = "--" ] && shift

DIST="${@:-dist}"
MAIN_BRANCH=$(git symbolic-ref --short HEAD)

# Set git configs from env variables if available.
[ ! -z "$GH_NAME" ] && git config user.name "$GH_NAME"
[ ! -z "$GH_EMAIL" ] && git config user.email "$GH_EMAIL"

git stash
git branch --delete --force $TARGET_BRANCH
git checkout --orphan $TARGET_BRANCH
git add -f $DIST
git commit -m "$COMMIT_MESSAGE"
git filter-branch -f --prune-empty --subdirectory-filter $DIST
git push -f origin $TARGET_BRANCH
git checkout $MAIN_BRANCH
git stash apply || :
