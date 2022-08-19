pipeline {
    agent none

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo 'Hello, NodeApp'
                nodejs('NodeJS') {
                    sh 'node --version'
                    sh 'npm --version'
                    sh 'npm install -save-dev mocha && npm install'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo 'Hello, NodeApp'
                nodejs('NodeJS') {
                    sh 'node run test'
                }

            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'

            }
        }
    }
}