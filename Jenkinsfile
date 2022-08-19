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
                sh 'docker login -u gkiori -p Fargier11'
                // 3- tag de l image
                sh 'docker tag nodeapp:latest gkiori/nodeapp:1.1.0'
                // 4- push de l image
                sh 'docker push gkiori/nodeapp:1.1.0'
            }
        }
    }
}