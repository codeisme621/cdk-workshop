import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class WorkShopPipeLine extends cdk.Stack{
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps){
        super(scope, id, props)
    }
}