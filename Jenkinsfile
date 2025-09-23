pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t Jenkins-CICD .'
      }
    }
    stage('Test') {
      steps {
        sh 'docker run --rm Jenkins-CICD npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 Jenkins-CICD'
      }
    }
  }
}

