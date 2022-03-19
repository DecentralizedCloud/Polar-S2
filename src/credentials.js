const credentials = {
    userId : "",
    apiKey : "",
    projectId : "",
    projectName : "",
    set setCredential(credential) {
        this.apiKey = credential.apiKey;
        this.projectId = credential.projectId;
        this.userId = credential.userId;
        this.projectName = credential.projectName;
    }          
}

export default credentials;