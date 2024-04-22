import { Step } from "../types";

export const Steps: Step[] = [
  {
    name: "Instalar o WSL (Caso não tiver ainda)",
    substeps: [
      { text: "wsl --install -d Ubuntu-20.04", is_code: true },
      { text: "defina seu usuário e senha (guarde essa informação)", is_code: false },
    ],
  },
  {
    name: "Instalar o python na versão correta no WSL",
    substeps: [
      { text: "sudo apt update", is_code: true },
      { text: "sudo apt install software-properties-common", is_code: true },
      { text: "sudo add-apt-repository ppa:deadsnakes/ppa", is_code: true },
      { text: "sudo apt install python3.11", is_code: true },
    ],
  },
  {
    name: "Instalar o postgresql no WSL",
    substeps: [
      {
        text: "sudo sh -c 'echo \"deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'",
        is_code: true,
      },
      { text: "wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -", is_code: true },
      { text: "sudo apt-get update -y", is_code: true },
      { text: "sudo apt-get install postgresql-15 -y", is_code: true },
    ],
  },
  {
    name: "Gerar chave SSH e cadastrar no github",
    substeps: [
      { text: "ssh-keygen", is_code: true },
      { text: "de enter em tudo sem preencher", is_code: false },
      { text: "cat ~/.ssh/id_rsa.pub", is_code: true },
      { text: "copie o código que aparecerá no terminal", is_code: false },
      { text: "abra sua conta do github, va até as configurações em sua foto de perfil, busque pelo menu SSH and GPG keys", is_code: false },
      { text: "clique em new SSH key, de um nome para a chave e cole no campo key a chave que copiou do terminal", is_code: false },
    ],
  },
  {
    name: "Instale pacotes necessários no python",
    substeps: [
      { text: "sudo apt-get install python3-pip -y", is_code: true },
      { text: "curl -sSL https://install.python-poetry.org/ | python3 -", is_code: true },
      { text: "code ~/.bashrc", is_code: true },
      { text: "adicionar no final do bashrc 'export PATH=\"/home/{usuario}/.local/bin:$PATH\"'", is_code: false },
      { text: "reiniciar o terminal", is_code: false },
      { text: "wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh", is_code: true },
      { text: "chmod +x Miniconda3-latest-Linux-x86_64.sh", is_code: true },
      { text: "./Miniconda3-latest-Linux-x86_64.sh", is_code: true },
    ],
  },
  {
    name: "Clone o repositório e instale as dependências",
    substeps: [
      { text: "git clone git@github.com:triagilbr/autorizai-guias-api-dashboard.git", is_code: true },
      { text: "caso não tiver, instale a extensão WSL no seu VSCODE", is_code: false },
      { text: "feche o terminal e abra ele novamente", is_code: false },
      { text: "cd autorizai-guias-api-dashboard", is_code: true },
      { text: "git checkout develop", is_code: true },
      { text: "conda create -n api-dashboard python=3.11 -y", is_code: true },
      { text: "conda activate api-dashboard", is_code: true },
      { text: "sudo apt install libcurl4-openssl-dev libssl-dev", is_code: true },
      { text: "poetry install", is_code: true },
    ],
  },
  {
    name: "Instale o beekeeper e crie o banco de dados",
    substeps: [
      { text: "sudo service postgresql start", is_code: true },
      { text: "baixe e instale o beekeeper https://www.beekeeperstudio.io/get-community", is_code: false },
      { text: "sudo -u postgres psql", is_code: true },
      { text: "cole esse comando no dialogo que irá abrir: ALTER USER postgres PASSWORD 'postgres';", is_code: false },
      { text: "digite exit e pressione enter (se não funcionar tente contrabarra Q, como é mostrado)", is_code: false },
      { text: "crie um banco chamado triagil_production", is_code: false },
    ],
  },
  {
    name: "Setar as variáveis de ambiente",
    substeps: [
      {
        text: "crie uma copia do arquivo .env.example, renomeie ela pra .env e arraste para a pasta dashAutorizaiGuias ( Abra o arquivo e remova os comentários em verde e os espaços depois dos valores )",
        is_code: false,
      },
      { text: "altere os seguintes dados", is_code: false },
      { text: "DATABASE_PORT=5432", is_code: false },
      { text: "DATABASE_NAME=triagil_novo", is_code: false },
      { text: "DATABASE_USER=postgres", is_code: false },
      { text: "DATABASE_PASS=postgres", is_code: false },
      { text: "salve o arquivo", is_code: false },
    ],
  },
  {
    name: "Clonar o banco de dados",
    substeps: [
      { text: "baixe esse arquivo https://drive.google.com/file/d/1wR3ErCt3L-CDD-sMZ49yZ4RH85uowphK/view?usp=drive_link", is_code: false },
      { text: "extraia o arquivo para a sua maquina", is_code: false },
      { text: "copie ele para o WSL indo em linux > ubuntu-20.04 > home > seu user", is_code: false },
      { text: "no seu terminal digite cd ~", is_code: false },
      {
        text: "pg_restore -j 8 -v -W --host=127.0.0.1 --port=5432 --username=postgres -Fd --clean -d triagil_production dump",
        is_code: true,
      },
    ],
  },
  {
    name: "Rode o projeto",
    substeps: [
      { text: "cd autorizai-guias-api-dashboard", is_code: true },
      { text: "conda activate api-dashboard", is_code: true },
      { text: "python -m manage migrate api 0031_complexruleconditions_conditional_operator --fake", is_code: true },
      { text: "python -m manage migrate", is_code: true },
      { text: "python -m manage runserver", is_code: true },
    ],
  },
];
