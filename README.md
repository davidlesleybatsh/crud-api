# crud-api
A simple CRUD API

### Start
- git clone THIS_REPO
- cd crud-api
- npm i
- npm run dev
<br />
<br />

### Build Docker image
- docker build -f docker/Dockerfile -t tag-name .
- docker run -p public-port:container-port tag-name-of-container

- check if everythings working like it should, lets curl !!!
    - curl -i localhost:3333/api/v1/items
<br />
<br />

### Docker compose, Build.sh and Dockerfile
- create build.sh with docker build & run commands
- create docker-compose.yml
- docker-compose  -f docker-compose.yml up

<br />

### Pipeline Commands

- export BUILD_PROJECT=true PROJECT=myProjectName && ./build.sh
- docker-compose -f deploy/docker-compose.yml up && DockerPush



curl -i localhost:3333/api/v1/items