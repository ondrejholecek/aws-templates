# aws-templates
Helper scripts for TAC engineers to test FortiGate A-P HA in AWS

## Create HA step-by-step

  - [Single-zone A-P HA](https://ondrejholecek.github.io/aws-templates/#apha-same-zone)
  - [Multi-zone A-P HA](https://ondrejholecek.github.io/aws-templates/#apha-multi-zone)


## Launch preconfigured stack

Each of these stacks contain 2 FortiGates with A-P HA configuration and client instance connected to internal subnet of FortiGate.

| Single-zone | Multi-zone |
| --- | --- |
| [![Launch Stack](https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=FortiGate-APHA-singlezone&templateURL=https://emea-tac-public-templates.s3-eu-west-1.amazonaws.com/fgt-ha-ap-single-zone.json) | [![Launch Stack](https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=FortiGate-APHA-multizone&templateURL=https://emea-tac-public-templates.s3-eu-west-1.amazonaws.com/fgt-ha-ap-multi-zone.json) |
