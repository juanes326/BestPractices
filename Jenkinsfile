pipeline {
    agent any

    stages {

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Instalar browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Ejecutar tests') {
            steps {
                // Tus dos test específicos
                bat 'npx playwright test tests/example.spec.ts:3 tests/example.spec.ts:10'
            }
        }
    }

    post {
        always {
            echo 'Publicando reportes de Playwright...'
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}
