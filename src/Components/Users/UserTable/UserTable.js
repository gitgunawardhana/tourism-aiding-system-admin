// import * as React from 'react';
// import PropTypes from 'prop-types';
// import {alpha} from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import {visuallyHidden} from '@mui/utils';
//
//
// // function createData(name, calories, fat, carbs, protein) {
// function createData(id, firstName, lastName, nic, email, mobile, address, country) {
//     return {
//         id,
//         firstName,
//         lastName,
//         nic,
//         email,
//         mobile,
//         address,
//         country,
//     };
// }
//
// const rows = [
//     createData(192, "Diluni", "Malsha", "199960700964", "diluni@gmail.com","+94716064944","Galle","Sri Lanka"),
//     createData(193, "Sanidu", "Hasanka", "199860700964", "sanidu@gmail.com","+94719064944","Kalutara","Sri Lanka"),
//     createData(194, "Ishan", "Tharindu", "199860700924", "ishan@gmail.com","+94715751121","Matara","Sri Lanka"),
//     createData(195, "Sachini", "Deepashika", "199704700924", "sachini@gmail.com","+94769608396","Anuradhapura","Sri Lanka"),
//     createData(196, "Thilini", "Nisansala", "199712700924", "thilini@gmail.com","+94711672789","Hanguranketha","Sri Lanka"),
//     createData(197, "Yasmi", "Navodya", "199806920924", "yasmi@gmail.com","+94775341619","Dankotuwa","Sri Lanka"),
//     createData(198, "Yureni", "Vidunika", "199805700924", "yureni@gmail.com","+94712417816","Rathnapura","Sri Lanka"),
//     createData(199, "Ishara", "Madhuwanthi", "199892286924", "ishara@gmail.com","+94771504857","Badulla","Sri Lanka"),
//     createData(200, "Subhashi", "Sudharma", "199705792924", "subha@gmail.com","+94717141520","Balangoda","Sri Lanka"),
//
// ];
//
// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }
//
// function getComparator(order, orderBy) {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }
//
// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) {
//             return order;
//         }
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// }
//
// const headCells = [
//     {
//         id: 'id',
//         numeric: true,
//         disablePadding: true,
//         label: 'ID',
//     },
//     {
//         id: 'firstName',
//         numeric: false,
//         disablePadding: false,
//         label: 'First Name',
//     },
//     {
//         id: 'lastName',
//         numeric: false,
//         disablePadding: false,
//         label: 'Last Name',
//     },
//     {
//         id: 'nic',
//         numeric: false,
//         disablePadding: false,
//         label: 'NIC / Passport',
//     },
//     {
//         id: 'email',
//         numeric: false,
//         disablePadding: false,
//         label: 'Email',
//     },
//     {
//         id: 'mobile',
//         numeric: false,
//         disablePadding: false,
//         label: 'Mobile',
//     },
//     {
//         id: 'address',
//         numeric: false,
//         disablePadding: false,
//         label: 'Address',
//     },
//     {
//         id: 'country',
//         numeric: false,
//         disablePadding: false,
//         label: 'Country',
//     },
// ];
//
// function EnhancedTableHead(props) {
//     const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
//         props;
//     const createSortHandler = (property) => (event) => {
//         onRequestSort(event, property);
//     };
//
//     return (
//         <TableHead>
//             <TableRow>
//                 <TableCell padding="checkbox">
//                     <Checkbox
//                         color="primary"
//                         indeterminate={numSelected > 0 && numSelected < rowCount}
//                         checked={rowCount > 0 && numSelected === rowCount}
//                         onChange={onSelectAllClick}
//                         inputProps={{
//                             'aria-label': 'select all users',
//                         }}
//                     />
//                 </TableCell>
//                 {headCells.map((headCell) => (
//                     <TableCell
//                         key={headCell.id}
//                         align={headCell.numeric ? 'right' : 'left'}
//                         padding={headCell.disablePadding ? 'none' : 'normal'}
//                         sortDirection={orderBy === headCell.id ? order : false}
//                     >
//                         <TableSortLabel
//                             active={orderBy === headCell.id}
//                             direction={orderBy === headCell.id ? order : 'asc'}
//                             onClick={createSortHandler(headCell.id)}
//                         >
//                             {headCell.label}
//                             {orderBy === headCell.id ? (
//                                 <Box component="span" sx={visuallyHidden}>
//                                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                                 </Box>
//                             ) : null}
//                         </TableSortLabel>
//                     </TableCell>
//                 ))}
//             </TableRow>
//         </TableHead>
//     );
// }
//
// EnhancedTableHead.propTypes = {
//     numSelected: PropTypes.number.isRequired,
//     onRequestSort: PropTypes.func.isRequired,
//     onSelectAllClick: PropTypes.func.isRequired,
//     order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//     orderBy: PropTypes.string.isRequired,
//     rowCount: PropTypes.number.isRequired,
// };
//
// const EnhancedTableToolbar = (props) => {
//     const {numSelected} = props;
//
//     return (
//         <Toolbar
//             sx={{
//                 pl: {sm: 2},
//                 pr: {xs: 1, sm: 1},
//                 ...(numSelected > 0 && {
//                     bgcolor: (theme) =>
//                         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//                 }),
//             }}
//         >
//             {numSelected > 0 ? (
//                 <Typography
//                     sx={{flex: '1 1 100%'}}
//                     color="inherit"
//                     variant="subtitle1"
//                     component="div"
//                 >
//                     {numSelected} selected
//                 </Typography>
//             ) : (
//                 <Typography
//                     sx={{flex: '1 1 100%'}}
//                     variant="h6"
//                     id="tableTitle"
//                     component="div"
//                 >
//                     Users
//                 </Typography>
//             )}
//
//             {numSelected > 0 ? (
//                 <Tooltip title="Delete">
//                     <IconButton>
//                         <DeleteIcon/>
//                     </IconButton>
//                 </Tooltip>
//             ) : (
//                 <Tooltip title="Filter list">
//                     <IconButton>
//                         <FilterListIcon/>
//                     </IconButton>
//                 </Tooltip>
//             )}
//         </Toolbar>
//     );
// };
//
// EnhancedTableToolbar.propTypes = {
//     numSelected: PropTypes.number.isRequired,
// };
//
// export default function EnhancedTable() {
//     const [order, setOrder] = React.useState('asc');
//     const [orderBy, setOrderBy] = React.useState('id');
//     const [selected, setSelected] = React.useState([]);
//     const [page, setPage] = React.useState(0);
//     const [dense, setDense] = React.useState(false);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);
//
//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };
//
//     const handleSelectAllClick = (event) => {
//         if (event.target.checked) {
//             const newSelecteds = rows.map((n) => n.id);
//             setSelected(newSelecteds);
//             return;
//         }
//         setSelected([]);
//     };
//
//     const handleClick = (event, id) => {
//         const selectedIndex = selected.indexOf(id);
//         let newSelected = [];
//
//         if (selectedIndex === -1) {
//             newSelected = newSelected.concat(selected, id);
//         } else if (selectedIndex === 0) {
//             newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//             newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//             newSelected = newSelected.concat(
//                 selected.slice(0, selectedIndex),
//                 selected.slice(selectedIndex + 1),
//             );
//         }
//
//         setSelected(newSelected);
//     };
//
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };
//
//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };
//
//     const handleChangeDense = (event) => {
//         setDense(event.target.checked);
//     };
//
//     const isSelected = (id) => selected.indexOf(id) !== -1;
//
//     // Avoid a layout jump when reaching the last page with empty rows.
//     const emptyRows =
//         page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
//
//     return (
//         <Box sx={{width: '100%'}}>
//             <Paper sx={{width: '100%', mb: 2}}>
//                 <EnhancedTableToolbar numSelected={selected.length}/>
//                 <TableContainer>
//                     <Table
//                         sx={{minWidth: 750}}
//                         aria-labelledby="tableTitle"
//                         size={dense ? 'small' : 'medium'}
//                     >
//                         <EnhancedTableHead
//                             numSelected={selected.length}
//                             order={order}
//                             orderBy={orderBy}
//                             // onSelectAllClick={handleSelectAllClick}
//                             onRequestSort={handleRequestSort}
//                             rowCount={rows.length}
//                         />
//                         <TableBody>
//                             {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//                  rows.slice().sort(getComparator(order, orderBy)) */}
//                             {stableSort(rows, getComparator(order, orderBy))
//                                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                                 .map((row, index) => {
//                                     const isItemSelected = isSelected(row.id);
//                                     const labelId = `enhanced-table-checkbox-${index}`;
//
//                                     return (
//                                         <TableRow
//                                             hover
//                                             // onClick={(event) => handleClick(event, row.id)}
//                                             // role="checkbox"
//                                             // aria-checked={isItemSelected}
//                                             tabIndex={-1}
//                                             key={row.id}
//                                             selected={isItemSelected}
//                                         >
//                                             {/*<TableCell padding="checkbox">*/}
//                                                 {/*<Checkbox*/}
//                                                 {/*    color="primary"*/}
//                                                 {/*    checked={isItemSelected}*/}
//                                                 {/*    inputProps={{*/}
//                                                 {/*        'aria-labelledby': labelId,*/}
//                                                 {/*    }}*/}
//                                                 {/*/>*/}
//                                             {/*</TableCell>*/}
//                                             <TableCell
//                                                 component="th"
//                                                 id={labelId}
//                                                 scope="row"
//                                                 padding="none"
//                                             >
//                                                 {row.id}
//                                             </TableCell>
//                                             <TableCell align="right">{row.firstName}</TableCell>
//                                             <TableCell align="right">{row.lastName}</TableCell>
//                                             <TableCell align="right">{row.nic}</TableCell>
//                                             <TableCell align="right">{row.email}</TableCell>
//                                             <TableCell align="right">{row.mobile}</TableCell>
//                                             <TableCell align="right">{row.address}</TableCell>
//                                             <TableCell align="right">{row.country}</TableCell>
//                                         </TableRow>
//                                     );
//                                 })}
//                             {emptyRows > 0 && (
//                                 <TableRow
//                                     style={{
//                                         height: (dense ? 33 : 53) * emptyRows,
//                                     }}
//                                 >
//                                     <TableCell colSpan={6}/>
//                                 </TableRow>
//                             )}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     component="div"
//                     count={rows.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//             </Paper>
//         </Box>
//     );
// }

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'firstName',
        label: 'First Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'lastName',
        label: 'Last Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'nic',
        label: 'NIC / Passport',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'mobile',
        label: 'Mobile',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'address',
        label: 'Address',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'country',
        label: 'Country',
        minWidth: 150,
        align: 'center'
    },
];

function createData(id, firstName, lastName, nic, email, mobile, address, country) {
    return {
        id,
        firstName,
        lastName,
        nic,
        email,
        mobile,
        address,
        country,
    };
}

const rows = [
    createData(192, "Diluni", "Malsha", "199960700964", "diluni@gmail.com", "+94716064944", "Galle", "Sri Lanka"),
    createData(193, "Sanidu", "Hasanka", "199860700964", "sanidu@gmail.com", "+94719064944", "Kalutara", "Sri Lanka"),
    createData(194, "Ishan", "Tharindu", "199860700924", "ishan@gmail.com", "+94715751121", "Matara", "Sri Lanka"),
    createData(200, "Subhashi", "Sudharma", "199705792924", "subha@gmail.com", "+94717141520", "Balangoda", "Sri Lanka"),
    createData(200, "Sandika", "Sandika", "199705792924", "sandika@gmail.com", "+94703148320", "Kurunagala", "Sri Lanka"),
    createData(195, "Sachini", "Deepashika", "199704700924", "sachini@gmail.com", "+94769608396", "Anuradhapura", "Sri Lanka"),
    createData(196, "Thilini", "Nisansala", "199712700924", "thilini@gmail.com", "+94711672789", "Hanguranketha", "Sri Lanka"),
    createData(197, "Yasmi", "Navodya", "199806920924", "yasmi@gmail.com", "+94775341619", "Dankotuwa", "Sri Lanka"),
    createData(198, "Yureni", "Vidunika", "199805700924", "yureni@gmail.com", "+94712417816", "Rathnapura", "Sri Lanka"),
    createData(199, "Ishara", "Madhuwanthi", "199892286924", "ishara@gmail.com", "+94771504857", "Badulla", "Sri Lanka"),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
