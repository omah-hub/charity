import Detail from "../components/causes_detail.comp";
import DonateDetails from "../components/donate_details.comp";
import Impact from "../components/impact_details.comp";

export default function Details() {
  return (
    <div>
      <Detail />
      <Impact />
      <DonateDetails />
    </div>
  );
}
