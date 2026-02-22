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
					sh 'npm ci'
					sh 'npm run test:ci'
				}
            }
        }
    }
    post {
        always {
			 sh 'ls -la ui-tests/playwright-report'
            publishHTML(target: [
                reportDir: 'ui-tests/playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true
            ])
        }
    }
}