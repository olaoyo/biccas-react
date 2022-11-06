import { ClientsGrid, ClientsText, ClientsLogos } from "./Clients.styles";

import Unspalsh from "../../../images/unsplash.png";
import Notion from "../../../images/notion.png";
import Intercom from "../../../images/intercom.png";
import Descript from "../../../images/descript.png";
import Grammarly from "../../../images/grammarly.png";

function Clients() {
  return (
    <ClientsGrid>
      <ClientsText>
        More than 25,000 teams use Collabs
      </ClientsText>
      <ClientsLogos>
        <img src={Unspalsh} alt="Unsplash Logo" />
        <img src={Notion} alt="Notion Logo" />
        <img src={Intercom} alt="Intercom Logo" />
        <img src={Descript} alt="Descript Logo" />
        <img src={Grammarly} alt="Grammarly Logo" />
      </ClientsLogos>
    </ClientsGrid>
  );
}

export default Clients;
