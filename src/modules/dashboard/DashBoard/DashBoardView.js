
import { GridLoader } from "react-spinners";
import PageHeader from "_common/components/PageHeader";
import Search from "_common/components/Search/Search";
const override = {
  display: "block",
  margin: "10rem auto",
};
const DashBoardView = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
 
      <GridLoader
        cssOverride={override}
        color="#36d7b7"
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>

  )
}
export default DashBoardView;