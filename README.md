# P_FileServer

docker build -t fserver_image .

docker run -p 3002:3000 --network=sd_network --name file_server -d fserver_image

docker cp file_server:/usr/src/server_data/photo_2.jpg ./photo_2.jpg