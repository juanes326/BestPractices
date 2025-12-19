pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Instalar browsers') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx playwright install'
                    } else {
                        bat 'npx playwright install'
                    }
                }
            }
        }

        stage('Ejecutar tests') {
            steps {
                script {
                    def cmd = 'npx playwright test tests/example.spec.ts:3 tests/example.spec.ts:10'
                    if (isUnix()) {
                        sh cmd
                    } else {
                        bat cmd
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Publicando reportes de Playwright...'
            archiveArtifacts artifacts: 'playwright-report/**', onlyIfSuccessful: false
        }
    }
}
