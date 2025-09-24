pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'docker build -t jenkins-cicd .'
      }
    }
    stage('Test') {
      steps {
        bat 'docker run --rm jenkins-cicd npm test'
      }
    }
    stage('Deploy') {
      steps {
        bat 'docker run -d -p 3000:3000 jenkins-cicd'
      }
    }
  }
}
