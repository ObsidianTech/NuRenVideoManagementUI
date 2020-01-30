# Initializing Variables
_env=$1
_imagetag=nurenmanagement-$_env
echo $_imagetag

#Stop container
docker stop $_imagetag

#Remove container
docker rm --force $_imagetag

#Remove image
docker rmi $_imagetag

#Build new image
docker build --no-cache --build-arg PROJECTENV=$_env -t "$_imagetag" .

#Run new _imagetag based on env
docker run -d -p 3002:80 --name "$_imagetag" $_imagetag

echo $_imagetag new version up! 

exit 0