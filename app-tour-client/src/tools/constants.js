
// export const API_PATH = "https://app-marell.herokuapp.com/api/";
// export const API_PATH = "http://13.234.116.200/api/";
export const API_PATH = "http://localhost:83/api/";

export const TOKEN_NAME = "app-tour-token"

export const CONFIG = {
    headers: {
        "Authorization": localStorage.getItem(TOKEN_NAME)
    }
}