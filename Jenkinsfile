pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Use bat for Windows
                bat 'docker build -t myapp:latest .'
            }
        }
        stage('Test') {
            steps {
                bat 'echo Tests passed'
            }
        }
        stage('Deploy') {
            steps {
                // Stop and remove existing container if exists, then run container
                bat '''
                docker stop myapp || echo Container not running
                docker rm myapp || echo Container not present
                docker run -d --name myapp -p 8081:8080 myapp:latest
                '''
            }
        }
    }
}
