import { useState } from 'react';
import { DrawerAndNavLayout } from '../../layouts';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import { Divider } from '@mui/material';
import { Button } from "@material-tailwind/react";

const Enrollment = () => {
  const [selectedUnits, setSelectedUnits] = useState<number>(0);
  const [maxUnitsReached, setMaxUnitsReached] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { 
      sortable: false, 
      disableColumnMenu:true, 
      field: 'id',
      headerName: 'Course Code', 
      width: 150 
    },
    { 
      sortable: false, 
      disableColumnMenu:true, 
      field: 'description', 
      headerName: 'Course Description',
      width: 200 
    },
    { 
      sortable: false, 
      disableColumnMenu:true, 
      field: 'units', 
      headerName: 'Req. Units', 
      width: 130 
    },
    { 
      sortable: false, 
      disableColumnMenu:true, 
      field: 'grades', 
      headerName: 'Grades', 
      width: 130 
    },
  ];

  const rows = [
    { id: '1', description: 'COFFEE', units: 6.0, grades: 1.0 },
    { id: '2', description: 'COFFEE', units: 6.0, grades: 1.0 },
    { id: '3', description: 'COFFEE', units: 6.0, grades: 1.0 },
    { id: '4', description: 'COFFEE', units: 6.0, grades: 1.0 },
    { id: '5', description: 'COFFEE', units: 2.0, grades: 1.0 },
    { id: '7', description: 'COFFEE', units: 1.0, grades: 1.0 },
    { id: '8', description: 'COFFEE', units: 2.0, grades: 1.0 },
    { id: '9', description: 'COFFEE', units: 1.0, grades: 1.0 },
    { id: '10', description: 'COFFEE', units: 2.0, grades: 1.0 },
    { id: '11', description: 'COFFEE', units: 1.0, grades: 1.0 },
   
    // Add more rows as needed
  ];

  const handleSelection = (selection: GridRowId[]) => {
    let totalSelectedUnits = 0;
    selection.forEach((selectedRowId) => {
      const selectedRow = rows.find((row) => row.id === selectedRowId);
      if (selectedRow) {
        totalSelectedUnits += selectedRow.units;
      }
    });

    if (totalSelectedUnits > 26) {
      alert("You've selected more than 26 units. Please adjust your selection.");
      setMaxUnitsReached(true);
    } else {
      setSelectedUnits(totalSelectedUnits);
      setMaxUnitsReached(false);
    }
  };

  return (
    <section className="h-screen">
      <DrawerAndNavLayout>
        <div className="grid grid-cols-3 grid-rows-1 gap-3 py-2">

          <h1 className='text-xl font-semibold flex items-center'> ENROLLMENT </h1>
          
          <div className='text-center'>
            <Button>Review Selected Subject</Button>
          </div>

          {selectedUnits > 0 && (     
            <p className='text-xl font-semibold flex items-center justify-end px-2'>
                {`${selectedUnits} Units Selected` }
            </p>      
          )}

        </div>

        <Divider/>

        <div className='py-2'>
            <div style={{ height: 500, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                pageSizeOptions={[10, 20, 30, 40]}
                checkboxSelection={!maxUnitsReached} // Enable checkbox selection if max limit is not reached
                disableRowSelectionOnClick={maxUnitsReached} // Disable selection on click if max limit is reached
                onRowSelectionModelChange ={handleSelection} // Handle selection model change
              />
            </div>   
        </div>
      </DrawerAndNavLayout>
    </section>
  );
};

export default Enrollment;
