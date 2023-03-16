
import PageHeader from "_common/components/PageHeader";
import useSnackbar from "_common/hooks/useSnackbar";
import LoadingSpinner from "_common/lotties/LoadingSpinner";

const DashBoardView = () => {

 const {handleClose} = useSnackbar()
  return (
    <>
       <PageHeader title="Dashboard"/>
       <LoadingSpinner />

    </>

  )
}
export default DashBoardView;