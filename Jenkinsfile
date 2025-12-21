pipeline {
  agent any

  parameters {
    choice(name: 'TEST_SUITE', choices: ['smoke', 'regression', 'all'], description: 'Qué suite quieres correr')
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        script {
          if (isUnix()) sh 'npm install'
          else bat 'npm install'
        }
      }
    }

    stage('Instalar browsers') {
      steps {
        script {
          if (isUnix()) sh 'npx playwright install'
          else bat 'npx playwright install'
        }
      }
    }

    stage('Ejecutar tests') {
      steps {
        script {
          def cmd = ''
          if (params.TEST_SUITE == 'smoke') {
            cmd = 'npx playwright test --grep @smoke'
          } else if (params.TEST_SUITE == 'regression') {
            cmd = 'npx playwright test --grep @regression'
          } else {
            cmd = 'npx playwright test'
          }

          if (isUnix()) sh cmd
          else bat cmd
        }
      }
    }
  }

  post {
    always {
      echo 'Publicando reportes de Playwright...'
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
    }
  }
}