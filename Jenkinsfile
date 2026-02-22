pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }

    stages {
        stage('Install & Test') {
            steps {
				dir('ui-tests') {
					//sh 'npm ci'
					sh 'npx playwright test'
				}
            }
        }
    }
    post {
        always {
			 publishHTML([
				allowMissing: false,
				alwaysLinkToLastBuild: true,
				keepAll: true,
				reportDir: 'ui-tests/playwright-report',
				reportFiles: 'index.html',
				reportName: 'Playwright Report'
            ])
        }
    }
}