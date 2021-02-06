# Test Lambda microservice using CDK to deploy and nest js as the framework!

## Make sure you have the cdk tool installed globally

## Useful commands

- cd into the lambda/api folder and run `npm i && npm run build`
- then in the root of the project run `cdk deploy`
- once deployed yo will be given the api gateway url . i.e `https://21g57kgzfk.execute-api.eu-west-1.amazonaws.com/prod/`. add api/ onto the end and then hit the get, put and post endpoints
- `cdk destroy` to strip down the poc ( IMPORTANT SO YOU DONT INCUR ANY CHARGES)
