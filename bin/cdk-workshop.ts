#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';
import {WorkShopPipeLine} from '../lib/pipeline-stack'

const app = new cdk.App();
new WorkShopPipeLine(app, 'CdkWorkshopPipeline')
// new CdkWorkshopStack(app, 'CdkWorkshopStack');
