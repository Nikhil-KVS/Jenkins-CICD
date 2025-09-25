pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t jenkins-cicd .'
      }
    }
    stage('Test') {
      steps {
        sh 'docker run --rm jenkins-cicd npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 jenkins-cicd'
      }
    }
  }
}
