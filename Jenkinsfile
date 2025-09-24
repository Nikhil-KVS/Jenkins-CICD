pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'docker build -t Jenkins-CICD .'
      }
    }
    stage('Test') {
      steps {
        bat 'docker run --rm Jenkins-CICD npm test'
      }
    }
    stage('Deploy') {
      steps {
        bat 'docker run -d -p 3000:3000 Jenkins-CICD'
      }
    }
  }
}
