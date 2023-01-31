#!/usr/bin/env bash

echo "####################"
echo "###     build.sh ###"
echo "####################"
echo "### Inspired by Jessica Bunk ###"

# check line processes are secure
function my_trap_handler()
{
        MYSELF="$0"               # equals to my script name
        LASTLINE="$1"            # argument 1: last line of error occurence
        LASTERR="$2"             # argument 2: error code of last command
        echo "${MYSELF}: line ${LASTLINE}: exit status of last command: ${LASTERR}"
        exit $2
}

# trap commands with non-zero exit code
#
trap 'my_trap_handler ${LINENO} $?' ERR

WORKSPACE=$(pwd)
echo "This is my workspace $WORKSPACE"

BUILDVERSION=1.0
# Endpoint to push artifact to... We need this!
echo "This is my Docker Repository $DOCKERREPO" 
echo "Build Image Version is $BUILDVERSION"

echo "####################"
echo "###  Build Tools ###"
echo "####################"
echo "docker $(docker -v)"

### Collect Build Artifacts ###
echo "Setup deploy folder"
cd $WORKSPACE
[ -d deploy/ ] && rm -r deploy/
mkdir -p deploy/
echo "Setup deploy folder - finished"

if [ "$BUILD_PROJECT" = "true" ]; then
    #docker rmi -f $PROJECT
    docker build -t $PROJECT -f docker/Dockerfile .
    #docker run -v $WORKSPACE/:/source $PROJECT
    #docker rmi --force $PROJECT
fi

### Create docker image for backend-build
if [ "$BUILD_PROJECT" = "true" ] && [ "$DEPLOY_DOCKER" = "true" ]; then
    ### build and push backend image
    docker build -t $DOCKERREPO/$PROJECT:$VERSION -f docker/Dockerfile .
    #docker push $DOCKERREPO/$PROJECT:$VERSION
    #docker rmi --force $DOCKERREPO/$PROJECT:$VERSION
fi

echo "exporting $DOCKERREPO and $VERSION to docker-compose.yml"
cp docker-compose.yml deploy/
cp .env deploy/

# sed -i "s/dockerRepo/$DOCKERREPO/g" "deploy/docker-compose-dev.yml"
# sed -i "s/nextVersion/$VERSION/g" "deploy/docker-compose-dev.yml"
