import http from "./http-common";

class UserService {

    requestToken(data) {
        return http.post("/token", data)
    }

    loadToken(data) {
        return http.get("/meters/loadToken",data);
    }

    registerMeter(body) {
        return http.get("/meters", body)
    }


}

export default new UserService