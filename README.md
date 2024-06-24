# twilio makes a call

Pequeno script onde um número da Twilio liga pro seu celular

1. Credenciais Twilio

Precisa de .env com as credenciais Twilio.

2. NPM Install

Baixe os arquivos e rode `npm install`

3. Ngrok

Faça o download e instalação do Ngrok para expor sua porta localhost. Siga as orientações de acordo com seu sistema operacional em [https://dashboard.ngrok.com/get-started/setup/](https://dashboard.ngrok.com/get-started/setup/)

4. Testando só a ligação:

Com o Node instalado, rode:

```
node make-call.js
```

5. Testando ligação com servidor e fala personalizada:

Com o Node instalado, rode:

```
node server.js
```

Em outra aba, rode o Ngrok:

```
ngrok http 1337 
````

