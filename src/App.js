import Folder from "./Component/Folder";
import { explorer } from "./mock/explorer";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
