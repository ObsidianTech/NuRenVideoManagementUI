# Initializing Variables
_env=$1
_imagetag=nurenvideomanagementui-$_env
echo $_imagetag

# Initializing functions
buildImage()
{    
    docker build --no-cache --build-arg VUE_APP_ENVIRONMENT=$_env -t "$_imagetag" .
}

awsLogin()
{
    aws ecr get-login --no-include-email --region us-east-2 | bash
}

ecrPush()
{
    docker tag $_imagetag:latest 614222560511.dkr.ecr.us-east-2.amazonaws.com/$_imagetag:latest
    docker push 614222560511.dkr.ecr.us-east-2.amazonaws.com/$_imagetag:latest
}

buildImage

awsLogin

ecrPush


exit 0