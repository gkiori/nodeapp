pipeline {
    agent none

    stages {
        stage('Build') {
            agent { docker 'node:latest'}
            steps {
                echo 'Building..'
                echo 'Hello, NodeJS'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install -g mocha && npm install'
            }
        }
        stage('Test') {
            agent { docker 'node:latest'}
            steps {
                echo 'Testing..'
                echo 'Hello, NodeJS'
                sh 'node run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'

            }
        }
    }
}