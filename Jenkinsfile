pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.48.2-jammy'
            args '-u root'
        }
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm ci || npm install'
            }
        }

        stage('Ejecutar tests') {
            steps {
                sh 'npx playwright test tests/example.spec.ts:3 tests/example.spec.ts:10'
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
