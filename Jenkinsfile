pipeline {
    agent any

    stages {

        stage('Clonar repositorio') {
            steps {
                git url: 'https://github.com/juanes326/BestPractices.git',
                    branch: 'main'
            }
        }

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
                bat 'npx playwright test tests/example.spec.ts:3 tests/example.spec.ts:10'
            }
        }
    }

    post {
    always {
        echo 'Publicando reportes de Playwright...'
        
        // Artefactos
        archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        
        }
    }
}