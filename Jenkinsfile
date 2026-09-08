pipeline {
    agent any

    environment {
        // Variável de ambiente padrão para ferramentas CI
        CI = 'true'
    }

    tools {
        // Requer o plugin NodeJS instalado no Jenkins.
        // O nome 'nodejs' deve corresponder ao nome configurado em Global Tool Configuration.
        nodejs 'nodejs'
    }

    stages {
        stage('Checkout') {
            steps {
                // Baixa o código do repositório
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // O 'npm ci' é uma boa prática para CI/CD pois é mais rápido e 
                // rigoroso que o 'npm install', utilizando as versões exatas do package-lock.json.
                // Se o seu Jenkins rodar em Windows nativamente (sem Docker/WSL), troque 'sh' por 'bat'.
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                // Executa os testes unitários criados anteriormente
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Compila o código TypeScript para JavaScript (gera a pasta dist)
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline executado com sucesso!'
        }
        failure {
            echo '❌ Pipeline falhou. Verifique os logs para mais detalhes.'
        }
        always {
            // Boa prática: limpa o workspace após a execução para evitar acúmulo de arquivos
            // Requer o plugin Workspace Cleanup
            cleanWs()
        }
    }
}
