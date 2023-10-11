import { toast } from "react-hot-toast";

export const successNotification =(message,position)=> toast.success(message, {
    duration: 3000,
    position: position || "top-right",
});

export const errorNotification =(message,position)=> {
    // console.log('message', message)
    toast.error(message, {
    duration: 3000,
    position: position || "top-right",
});
}

export const infoNotification =(message,position)=> toast.info(message, {
    duration: 3000,
    position: position || "top-right",
});

export const warnNotification =(data)=> toast.warn(data?.message, {
    duration: 3000,
    position: data?.position || "top-right",
});

