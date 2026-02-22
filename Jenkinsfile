pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests in Parallel') {
            parallel {

                stage('Chromium Tests') {
                    steps {
                        sh 'npx playwright test --project=Chromium'
                    }
                }

                stage('Firefox Tests') {
                    steps {
                        sh 'npx playwright test --project=Firefox'
                    }
                }

                stage('WebKit Tests') {
                    steps {
                        sh 'npx playwright test --project=WebKit'
                    }
                }
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}