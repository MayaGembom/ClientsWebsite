import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MaterialTable from "material-table";
import Notification from "./controls/Notification";
import ConfirmDialog from "./ConfirmDialog";
import AddClientDialog from "./AddClientDialog";
import tableIcons from "./controls/MaterialTableIcons";


function App() {
    const [addClientDialog, setAddClientDialog] = useState({isOpen:false,title:'',subtitle:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen:false,title:'',subtitle:''})
    const [notify, setNotify] = useState({isOpen:false,message:'',type:''})
    const [tableData, setTableData] = useState([
            {name:"Priscilla Matthews" 	,id:"384525101" ,ip:"80.119.117.187" 	,phone:"+972-523862672"},
            {name:"Benjamin Douglas" 	,id:"660652470" ,ip:"104.29.98.222" 	,phone:"+972-557712987"},
            {name:"Jordan Porter" 		,id:"753184050" ,ip:"1.10.243.200" 	,phone:"+972-532509246"    },
            {name:"Jacqueline Hughes" 	,id:"875322869" ,ip:"103.255.178.143" 	,phone:"+972-551448824"},
            {name:"Max Dunn" 			,id:"338605579" ,ip:"88.144.81.24" 	,phone:"+972-543503816"    },
            {name:"Christy Neal" 		,id:"068672047" ,ip:"62.113.223.73" 	,phone:"+972-542202337"},
            {name:"Jessica Rodriquez" 	,id:"150318228" ,ip:"12.189.93.218" 	,phone:"+972-558975263"},

            {name:"Priscilla Matthews" 	,id:"384525101" ,ip:"80.119.117.187" 	,phone:"+972-523862672"},
            {name:"Benjamin Douglas" 	,id:"660652470" ,ip:"104.29.98.222" 	,phone:"+972-557712987"},
            {name:"Jordan Porter" 		,id:"753184050" ,ip:"1.10.243.200" 	,phone:"+972-532509246"    },
            {name:"Jacqueline Hughes" 	,id:"875322869" ,ip:"103.255.178.143" 	,phone:"+972-551448824"},
            {name:"Max Dunn" 			,id:"338605579" ,ip:"88.144.81.24" 	,phone:"+972-543503816"    },
            {name:"Christy Neal" 		,id:"068672047" ,ip:"62.113.223.73" 	,phone:"+972-542202337"},
            {name:"Jessica Rodriquez" 	,id:"150318228" ,ip:"12.189.93.218" 	,phone:"+972-558975263"},


            {name:"Priscilla Matthews" 	,id:"384525101" ,ip:"80.119.117.187" 	,phone:"+972-523862672"},
            {name:"Benjamin Douglas" 	,id:"660652470" ,ip:"104.29.98.222" 	,phone:"+972-557712987"},
            {name:"Jordan Porter" 		,id:"753184050" ,ip:"1.10.243.200" 	,phone:"+972-532509246"    },
            {name:"Jacqueline Hughes" 	,id:"875322869" ,ip:"103.255.178.143" 	,phone:"+972-551448824"},
            {name:"Max Dunn" 			,id:"338605579" ,ip:"88.144.81.24" 	,phone:"+972-543503816"    },
            {name:"Christy Neal" 		,id:"068672047" ,ip:"62.113.223.73" 	,phone:"+972-542202337"},
            {name:"Jessica Rodriquez" 	,id:"150318228" ,ip:"12.189.93.218" 	,phone:"+972-558975263"},
    ])

    function onAddClient(newClient){
      const newList = [...tableData];
      newList.unshift({name:newClient.fullName,id:newClient.id ,ip:newClient.ip	,phone:newClient.phoneNum});
      setTableData(newList );
      setNotify({
        isOpen:true,
        message:  `Add ${newClient.fullName} as new client successfully`,
        type: 'success'
      })
    }

    const columns = [
        {title:"Full Name", field:"name", filterPlaceholder:"Filter By Name"},
        {title:"Id", field:"id",filterPlaceholder:"Filter By Id"},
        {title:"Phone Number", field:"phone",filterPlaceholder:"Filter By Phone Number"},
        {title:"IP Address", field:"ip",filterPlaceholder:"Filter By IP Address"},
    ]

    return (
      <div>
        <Header />
        <div style={{ padding: '5% 5% 1% 5%' }}>
        <MaterialTable title="Clients Information" 
        actions={[
        {
          icon: tableIcons.Delete,
          tooltip: "Delete User",
          onClick: (event, rowData) => {
                setConfirmDialog({
                    isOpen:true,
                    title: 'Delete Client',
                    subtitle: `Are you sure you want to delete ${rowData.name}?`,
                    onConfirm: ()=>{
                        setConfirmDialog({
                            ...confirmDialog,
                            isOpen : false
                        })
                        setTableData( tableData.filter((item)=> item.id !== rowData.id))
                        console.log("delete " + rowData.id)
                        setNotify({
                            isOpen:true,
                            message:  `Client ${rowData.name} Deleted Successfully`,
                            type: 'success'
                        })
                    }
                })
                
            },
        },
        {
          icon: tableIcons.Add,
          tooltip: "Add User",
          isFreeAction: true,
          onClick: (event) => {

            setAddClientDialog({
              isOpen:true,
              onSubmit: (dialogData)=>{
                this.setState({message: dialogData})
                
              }
            })
          },
        },
      ]}
         options={{filtering:true}} columns={columns} data = {tableData} icons={tableIcons} />

</div>

        <Footer />

        <Notification notify={notify} setNotify={setNotify}/>
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog}/>
        <AddClientDialog addClientDialog={addClientDialog} setAddClientDialog={setAddClientDialog} getData={onAddClient}/>
      </div>
    );
  }

export default App;