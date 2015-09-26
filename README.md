# helyeah-web
Web application for Helyeah project

#BUILD:
$ docker build -t wkicior/helyeah-web .

#RUN:
docker run --privileged=true -it -v [absolute path to project directory]:/app:rw --rm -p 8088:8080 wkicior/helyeah-web
