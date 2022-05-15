import React from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
    themes,
    createTheme
  } from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#92A8D1',
    },
    date: {
      backgroundColor: '#0074D9',
    },
    marker: {
      borderColor: '#0074D9',
    },
    timelineTrack: {
      backgroundColor: '#0074D9',
    },
  });

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='page'>
                <h1 className='header typeWriter'>Resume</h1>
                <Timeline theme={customTheme}>
                    <Events>
                    <TextEvent date="Oct 2021 - Present" text="**DevOps Engineer - National Australia Bank (NAB)** <br>
                    <br>As a DevOps Engineer behind the nabONE application used across all NAB branches, my role includes:
                    <br>
                    <br>• Building and optimising a variety of CI/CD pipelines on Jenkins, for the frontend and backend applications.
                    <br>• Deploying and managing AWS infrastructure including ECS clusters, EC2 instances, ASGs, Load Balancers, RDS databases, IAM permissions, KMS Keys & SSL certs, Security Groups & ACLs, Route 53 hosted zones, S3 buckets, and custom AMI creation & patching. IaC tools used are Terraform, Cloudformation and Ansible.
                    <br>• Migrating on-prem service engines from IBM Websphere to Azure infrastructure.
                    <br>• Implementing application observability to AppDynamics and logging to Splunk & CloudWatch.
                    <br>• Remediating security vulnerabilities and maintaining configuration compliance.
                    <br>• Right-sizing cloud resources and implementing power management to minimise costs. Generating monthly reports for analysis.
                    <br>• Modernising the Jenkins platforms including fresh deployments, upgrades, and configuration of new agents on EC2 spot fleet." 
                    />
                    <TextEvent date="Feb 2019 - Oct 2021" text="**Integration Engineer - Ericsson** <br>
                    <br>• Delivered network solution design, integration and testing in both model and live environments for NBN's broadband core network managing 600,000+ subscribers
                    <br>• Deployed and maintained network resources including Cisco Catalyst switches, Juniper SRX firewalls, F5 Load Balancers, Ericsson SSR routers and 3GPP network functions on Linux servers
                    <br>• Integrated nodes from multiple vendors with Splunk Indexer for centralised logging
                    <br>• Developed a software pipeline using Python, Selenium and Openpyxl to run an audit of all NBN Fixed Wireless sites
                    <br>• Integrated Ericsson Network Manager (ENM) with 50+ nodes and managed services platforms
                    <br>• Delivered the full life cycle upgrade of the 3GPP PCRF solution, including upgrades on BSP 8100, Host Linux OS, and the SAPC application
                    <br>• Authored method of procedure, test cases, high level and low level design documents, network impact reports and security analysis reports"
                    />
                    <TextEvent date="Nov 2018 - Jan 2019" text="**Developer Intern - National Australia Bank (NAB)** <br>
                    <br>• Developed software pipelines with various AWS products including DynamoDB, Lambda and SQS
                    <br>• Delivered an advanced search platform based on Elasticsearch as a Proof of Concept (POC), having contributed to both the front end and back end components
                    <br>• Worked together with teams running on Agile Framework"
                    />
                    <TextEvent date="Sep 2017 - Feb 2018" text="**Network Engineer Intern - Cisco Systems** <br>
                    <br>• Maintained the Customer Proof of Concept (CPOC) lab’s infrastructure and built testing environments for network solutions
                    <br>• Collaborated with System Engineers in the Global Service Provider (GSP) in providing pre-sales support to the account teams
                    <br>• Took charge in training and mentoring a newly employed intern"
                    />
                    <TextEvent date="Jan 2015 - Sep 2017" text="**Mathematics Instructor - Self Employed** <br>
                    <br>• Taught primary and secondary Maths
                    <br>• Communicated complex concepts in a simple and understandable language
                    <br>• Tuned my teaching techniques in accordance to the students' learning styles
                    <br>• Kept track of the students’ improvement" />
                    </Events>

                </Timeline>
            </div>
        )
    }
    
}


export default Resume;