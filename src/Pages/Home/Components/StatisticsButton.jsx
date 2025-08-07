import Button from "../../../Components/Common/Button";

export default function StatisticsButton({paragraphOne, paragraphTwo}) {
  return (
    <Button buttonStyle="secondStyle">
        <p dir="rtl">{paragraphOne}</p>
        <p>{paragraphTwo}</p>
    </Button>
  )
}
