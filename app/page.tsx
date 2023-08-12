import axios from "axios";
import { ApiRequest } from "./lib/validators/api-request";

export const runtime = "edge";

export default async function Home() {
  const callApi = async () => {
    // by putting the ApiRequest Validator on the payload, it gives us an error that the name is needed.
    const payload: ApiRequest = { name: "John" };
    await axios.post("/api/endpoint", payload); // is now typesafe
  };

  return (
    <main>
      <button onClick={callApi}>create user</button>
    </main>
  );
}
