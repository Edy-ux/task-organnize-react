
import ConfirmationDialog from "_common/components/ConfirmationDialog";
import PageHeader from "_common/components/PageHeader";
import useSnackbar from "_common/hooks/useSnackbar";

const DashBoardView = () => {

 const {handleClose} = useSnackbar()
  return (
    <>
       <PageHeader title="Dashboard"/>
       <ConfirmationDialog title="Confirmação" text="Tem certeza?" handleConfirmation={()=> alert("Tarefa excluida")}/>
    </>

  )
}
export default DashBoardView;