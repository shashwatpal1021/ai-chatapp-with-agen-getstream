import "dotenv/config";
import { StreamChat } from "stream-chat";
const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
if (!apiKey || !apiSecret) {
    throw new Error("Missing required environment variables STREAM_API_KEY or STREAM_API_SECRET");
}
const serverClient = new StreamChat(apiKey, apiSecret);
export default { apiKey, apiSecret, serverClient };
//# sourceMappingURL=serverClient.js.map