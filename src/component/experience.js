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
import Card from 'react-bootstrap/Card'
import nab_logo from '../images/nab-logo.png'


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

class Experience extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='workExperiencePage'>
              <div className='h1Wrapper'>
              <h1 className='typeWriter'>Professional Experience</h1>
              </div>
                
                <Timeline theme={customTheme} className="timeline">
                    <Events>
                    <TextEvent date="Jan 2024 - Present" text="**Senior Platform Engineer - Belong** <br>
                    <br>Tech Stack: AWS, Kubernetes, Terraform, Python, Bash, Jenkins, GitLab, New Relic, Windows AD"
                    />
                    <TextEvent date="Dec 2022 - Jan 2024" text="**Senior DevOps Engineer - National Australia Bank (NAB)** <br>
                    <br>• Migrated 35+ microservices & micro-frontends onto EKS & AKS clusters, Hashicorp Vault secret management and Harness CI/CD pipelines.
                    <br>• Implemented a mechanism for weekly auto-rotation of credentials for Redis Cache clusters.
                    <br>• Automated weekly patching of EC2 instances with thorough verification and status reporting.
                    <br>• Remediated critical security vulnerabilities across the application team's infrastructure.
                    <br>• Introduced SSL certificate renewal workflow that enabled new certificates to be deployed into production with 75% improved time efficiency and reducing production incidents.
                    <br>• Travelled to NAB Vietnam office to onboard and train DevOps BAU squad over a span of 4 weeks.
                    <br>• Executed DR tests for multi-cloud workloads and resolved gaps in the high availability architecture."
                    />
                    <TextEvent date="Oct 2021 - Dec 2022" text="**DevOps Engineer - National Australia Bank (NAB)** <br>
                    <br>• Built and optimised a variety of CI/CD pipelines on Jenkins for the frontend and backend applications.
                    <br>• Deployed and managed AWS & Azure infrastructure across compute, network and storage components, using Terraform, CloudFormation and Ansible.
                    <br>• Migrated on-prem applications to Azure, enabling decommission of legacy infrastructure.
                    <br>• Right-sized cloud resources and implementing power management to minimise costs, resulting in 25% cloud cost reduction in FY22.
                    <br>• Implemented application observability to AppDynamics and logging to Splunk."
                    />
                    <TextEvent date="Feb 2019 - Oct 2021" text="**Infrastructure Engineer - Ericsson** <br>
                    <br>• Delivered private cloud infrastructure solutions for NBN broadband core network managing 600,000+ subscribers.
                    <br>• Developed a software pipeline using Python and Selenium to run audits of 24,000 fixed wireless sites.
                    <br>• Integrated 50+ nodes from multiple vendors with Splunk Indexer for centralised logging.
                    <br>• Nominated for the Ericsson Rising Star Award for 2 consecutive years."
                    />
                    <TextEvent date="Nov 2018 - Jan 2019" text="**Developer Intern - National Australia Bank (NAB)** <br>
                    <br>• Developed software pipelines with various AWS products including DynamoDB, Lambda and SQS.
                    <br>• Delivered an advanced search platform as a Proof of Concept (POC), using Nodejs and Elasticsearch."
                    />
                    <TextEvent date="Sep 2017 - Feb 2018" text="**Network Engineer Intern - Cisco Systems** <br>
                    <br>• Built infrastructure test environments to deliver Proof of Concepts (PoC) for potential customers.
                    <br>• Collaborated with System Engineers in providing pre-sales support to the account teams."
                    />
                    <TextEvent date="Jan 2015 - Sep 2017" text="**Mathematics Instructor - Self Employed** <br>
                    <br>• Taught primary and secondary Maths.
                    <br>• Communicated complex concepts in a simple and understandable language." />
                    </Events>


                </Timeline>
                {/* <Card.Footer className="text-muted footer">Ali Qasimi</Card.Footer> */}
            </div>
        )
    }
    
}


export default Experience;