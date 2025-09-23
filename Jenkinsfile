pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t nodejs-demo-app .'
      }
    }
    stage('Test') {
      steps {
        sh 'docker run --rm nodejs-demo-app npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 nodejs-demo-app'
      }
    }
  }
}

