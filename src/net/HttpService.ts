import CommonHttp from "@/net/CommonHttp";
const publicPath = process.env.VUE_APP_BASE_API
const httpservice = new CommonHttp(publicPath)
export default httpservice