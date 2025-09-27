#Jenkins Pipeline for CICD

#project setup
add basic nodejs app (app.js, package.json) add Dockerfile and Jenkinsfile
then push the code to git

#Set Up Environment
download and install jenkins (make sure to use proper jdk version)
Open Jenkins at http://localhost:8080 and unlock it using the initial admin password located in the setup logs
download and install docker desktop
Run installer; enable WSL 2 and Hyper-V, Restart PC.
Confirm installation with docker --version in a command prompt.

#Configure Jenkins Pipeline Job
Jenkins dashboard, click New Item → name it → select Pipeline → click OK
Pipeline settings → Definition: Pipeline script from SCM → Select Git under SCM → Paste GitHub repo URL → set Branch as main
Enable GitHub hook trigger for GITScm polling under Build Triggers and save

#Set GitHub Webhook for Auto-Trigger
GitHub repo → Settings → Webhooks → Add webhook
enter payload URL (it won't support http connections, use https)
install ngrok and signin for https and run ngrok http 8080 (https://abc123.ngrok.io/github-webhook/ → http://localhost8080)
Set Content type application/json, Select Just the push event and add webhook

by using webhook jenkins pipeline runs automatically if there is any push event
