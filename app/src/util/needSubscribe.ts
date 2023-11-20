import {showMessage} from "../dialog/message";
import {getCloudURL} from "../config/util/about";

export const needLogin = (_tip = window.siyuan.languages.needLogin) => {
    return false;
};

export const needSubscribe = (tip = window.siyuan.languages._kernel[29]) => {
    return false;
};

export const isPaidUser = () => {
    return true;
};
