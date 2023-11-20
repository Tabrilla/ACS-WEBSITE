import { DrawerAndNavLayout } from "../../layouts";
import { Divider } from "@mui/material";
// import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Grades = () => {
    const [selectedOption, setSelectedOption] = useState<string>("BSIT First Year, First Term");

    const rowsData: { [key: string]: { code: string, description: string, units: number, grade: number }[] } = {
        "BSIT First Year, First Term": [
            { code: 'COFFEE CHAPTER', description: 'CLT', units: 3.00, grade: 1.00 },
            // Add more rows as needed for this option
        ],
        "BSIT First Year, Second Term": [
            { code: 'COFFEE', description: 'CLT', units: 3.00, grade: 1.00 },
            // Add rows for this option
        ],
        // Add entries for other options with their respective rows
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newValue = event.target.value as string;
        setSelectedOption(newValue);
    };
  

    const selectedRows = rowsData[selectedOption] || [];

    return (
        <section className="h-screen">
            <DrawerAndNavLayout>
                <div className="space-y-2">
                    <div className="">
                        <div>
                            <div className="w-full">
                            
                            <select
                                value={selectedOption}
                                onChange={(event) => handleChange(event)}
                                className="border border-gray-300 rounded-md px-3 py-2"
                            >
                                <option value="BSIT First Year, First Term">BSIT First Year, First Term</option>
                                <option value="BSIT First Year, Second Term">BSIT First Year, Second Term</option>
                                {/* Add other options */}
                            </select>


                            </div>
                        </div>
                    </div>
                    <Divider color="black" />
                </div>

                <div className="py-10">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#E8E9EF' }}>
                                    <TableCell>Course Code</TableCell>
                                    <TableCell>Course Description</TableCell>
                                    <TableCell>Req. Units</TableCell>
                                    <TableCell>Grades</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {selectedRows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.code}</TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>{row.units}</TableCell>
                                        <TableCell>{row.grade}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </DrawerAndNavLayout>
        </section>
    );
};

export default Grades;
