pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                /* echo 'Building..'
                echo 'Hello, NodeApp' */
                nodejs('NodeJS') {
                    sh 'node --version'
                    sh 'npm --version'
                    sh 'npm install -save-dev mocha && npm install'
                }
            }
        }
        stage('Test') {
            steps {
                /* echo 'Testing..'
                echo 'Hello, NodeApp' */
                nodejs('NodeJS') {
                    sh 'npm run test'
                }
            }
        }
        stage('Image Build') {
            steps {
                echo 'Image in building....'
                // 1- build une image
                sh 'docker build -t nodeapp .'
                // 2- connexion à dockerhub
                // 3- tag de l image
                // 4- push de l image
            }
        }
    }
}